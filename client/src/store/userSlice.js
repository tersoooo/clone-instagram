import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials, { rejectWithValue }) => {
        try{
            const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
            return response.data;
        }catch (error){
            return rejectWithValue(error.response?.data?.message || 'Login Failed.');
        }
    }
)

export const fetchUserByToken = createAsyncThunk(
    'user/fetchUserByToken',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Token bulunamadı.');

            const response = await axios.get('http://localhost:5000/api/auth/me', {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Kullanıcı doğrulanamadı.');
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        token: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.userInfo = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userInfo = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchUserByToken.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserByToken.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userInfo = action.payload;
            })
            .addCase(fetchUserByToken.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.token = null;
                localStorage.removeItem('token');
            });
    },
})

export const { logout } = userSlice.actions;
export default userSlice.reducer;