import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <>
            <div className="  flex bg-amber-50 w-full h-17">
                <div className="flex-1 flex items-center text-2xl text-red-700 justify-start px-2">
                     A World's Leading Plateform 
                </div>
                <div className="flex-1 flex items-center justify-center px-2">
                    <li className="mb-4 m-4 p-1">
                        <NavLink to="/" className={({ isActive }) => `hover:underline ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                            Home
                        </NavLink>
                    </li>
                    <li className="mb-4  m-4 p-1">
                        <NavLink to="/contest" className={({ isActive }) => `hover:underline ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                            Contest
                        </NavLink>
                    </li>
                    <li className="mb-4  m-4 p-1">
                        <NavLink to="/problems" className={({ isActive }) => `hover:underline ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                            Problem
                        </NavLink>
                    </li>
                    <li className="mb-4  m-4 p-1">
                        <NavLink to="/github" className={({ isActive }) => `hover:underline ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                            Github
                        </NavLink>
                    </li>
                </div>
                <div className="flex-1 flex items-center justify-end px-2 gap-3">
                    <button className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        Login
                    </button>
                    <button className="px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                        Sign Up
                    </button>
                </div>
            </div>
        </>
    )
}
export default Header