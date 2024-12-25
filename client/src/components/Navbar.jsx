import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white border-b shadow">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex-1  font-bold text-gray-800">
                    <Link to="/" className="text-blue-500 text-4xl flex justify-center ml-32">Instagram</Link>
                </div>
                <div className="flex space-x-4">
                    <Link to="/register" className="text-sm font-medium text-gray-700 hover:text-blue-500">
                        Register
                    </Link>

                    <button className="text-sm font-medium text-gray-700 hover:text-blue-500">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    )
}
