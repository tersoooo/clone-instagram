import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/userSlice.js";
import Modal from './Modal.jsx';
import PostForm from "./PostForm.jsx";

export default function Navbar() {

    const {userInfo} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout())
    }

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    const handleAddPost = (postData) => {
        console.log('New Post: ', postData);
        setModalOpen(false);
    }

    return (
        <>
            <nav className="bg-white border-b shadow">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <div className="flex-1 font-bold text-gray-800">
                        <Link
                            to="/"
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-4xl flex justify-center ml-32"
                        >
                            Instagram
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        {userInfo ? (
                            <div className="relative">
                                <button
                                    onClick={toggleMenu}
                                    className="text-sm font-medium text-gray-700 hover:text-blue-500"
                                >
                                    {userInfo.username}
                                </button>
                                {menuOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
                                        <button
                                            onClick={() => setModalOpen(true)}
                                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                        >
                                            Add Post
                                        </button>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
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
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <PostForm onSubmit={handleAddPost} />
            </Modal>
        </>
    )
}
