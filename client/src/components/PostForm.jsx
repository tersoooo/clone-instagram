import React, {useState} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function PostForm() {

    const [formData, setFormData] = useState({ imageUrl: '', caption: '', });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/posts', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success('Gönderi başarıyla oluşturuldu!');
            setFormData({ imageUrl: '', caption: '' });
        }catch (error) {
            toast.error('Gönderi oluşturulamadı.');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <input
                type="text"
                name="imageUrl"
                placeholder="Görsel URL"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                required
            />
            <textarea
                name="caption"
                placeholder="Açıklama"
                value={formData.caption}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
            />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Gönderi Paylaş
            </button>
        </form>
    )
}
