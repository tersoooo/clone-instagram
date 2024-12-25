import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../store/userSlice.js";
import {useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';

export default function Login() {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(formData));
        toast.success('Login Successfully!');
        navigate('/')
    }

    return (
        <div className="container mx-auto mt-10 max-w-md p-4 bg-white border rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                        E-posta
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="password">
                        Şifre
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    disabled={isLoading}
                >
                    {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                </button>
            </form>
        </div>
    )
}
