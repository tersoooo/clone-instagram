import React, {useEffect, useState} from 'react';
import axios from 'axios';


const PostList = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const response = await axios.get('http://localhost:5000/api/posts');
                setPosts(response.data);
            }catch (err){
                console.error('Gönderiler getirilemedi:', err);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className="space-y-6">
            {posts.map((post) => (
                <div key={post.id} className="bg-white border rounded-lg shadow p-4 max-w-2xl mx-auto">
                    <h2 className="text-lg font-bold mb-2">{post.user.username}</h2>
                    <img src={post.imageUrl} alt="Post" className="w-full rounded-lg mb-4"/>
                    <p className="text-gray-700">{post.caption}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
