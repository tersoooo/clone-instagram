import React, {useState} from 'react'
import axios from 'axios'

export default function Register() {

    const [formData, setFormData] = useState({
        username : '',
        email : '',
        password: '',
        profilePicture: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            setMessage({ type: 'success', text: response.data.message })
        }catch (error) {
            const errorMessage = error.response?.data?.message || 'Bir hata oluştu.';
            setMessage({ type: 'error', text: errorMessage });
        }
    }

    const [message, setMessage] = useState(null);


    return (
        <div className="register-form max-w-md mx-auto mt-10 p-5 border rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Kayıt Ol</h2>
            {message && (
                <div
                    className={`p-3 mb-4 rounded ${
                        message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}
                >
                    {message.text}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="username">
                        Kullanıcı Adı
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
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
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="profilePicture">
                        Profil Fotoğrafı (URL)
                    </label>
                    <input
                        type="text"
                        id="profilePicture"
                        name="profilePicture"
                        value={formData.profilePicture}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                    Kayıt Ol
                </button>
            </form>
        </div>
    )
}
