import React from 'react'
import PostList from "../components/PostList.jsx";
import PostForm from "../components/PostForm.jsx";

export default function Home() {
    return (
        <div>
            <div className="bg-gray-50 min-h-screen">
                <main className="container mx-auto py-8">
                    <PostForm />
                    <PostList />
                </main>
            </div>
        </div>
    )
}
