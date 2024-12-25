import React from 'react';

const posts = [
    {
        id: 1,
        username: 'user1',
        image: 'https://via.placeholder.com/600x400',
        caption: 'This is a beautiful day!',
    },
    {
        id: 2,
        username: 'user2',
        image: 'https://via.placeholder.com/600x400',
        caption: 'Loving the vibes!',
    },
    {
        id: 3,
        username: 'user3',
        image: 'https://via.placeholder.com/600x400',
        caption: 'Another post for testing!',
    },
];

const PostList = () => {
    return (
        <div className="space-y-6">
            {posts.map((post) => (
                <div key={post.id} className="bg-white border rounded-lg shadow p-4 max-w-2xl mx-auto">
                    <h2 className="text-lg font-bold mb-2">{post.username}</h2>
                    <img src={post.image} alt="Post" className="w-full rounded-lg mb-4" />
                    <p className="text-gray-700">{post.caption}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
