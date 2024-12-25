import React from 'react'
import PostList from "../components/PostList.jsx";

export default function Home() {
    return (
        <div>
            <div className="bg-gray-50 min-h-screen">
                <main className="container mx-auto py-8">
                    <PostList />
                </main>
            </div>
        </div>
    )
}
