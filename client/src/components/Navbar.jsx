import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/userSlice.js";

export default function Navbar() {

    const {userInfo} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <nav className="bg-white border-b shadow">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex-1  font-bold text-gray-800">
                    <Link to="/" className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-4xl flex justify-center ml-32">Instagram</Link>
                </div>
                <div className="flex space-x-4">
                    {userInfo ? (
                        <div className="flex gap-x-4">
                            {userInfo.username}
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <div className="flex gap-x-4">
                            <Link to="/register" className="text-sm font-medium text-gray-700 hover:text-blue-500">
                                Register
                            </Link>
                            <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-blue-500">
                                Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}
