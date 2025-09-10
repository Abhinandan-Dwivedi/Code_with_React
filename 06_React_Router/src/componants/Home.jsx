import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Home() {
    return (
        <>
            <div className="mx-auto w-full max-w-7xl">
                <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                    <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                            <h2 className="text-4xl font-bold sm:text-5xl">
                                🚀 Level Up Your DSA Skills
                                <span className="hidden sm:block text-4xl text-indigo-600">
                                    Code • Think • Conquer
                                </span>
                            </h2>

                            <p className="text-lg opacity-80">
                                “Every problem you solve is a step closer to cracking interviews
                                and shaping your future as an engineer. Stay consistent, stay
                                motivated.”
                            </p>

                            <div className="flex justify-center sm:justify-end gap-4">
                                <Link
                                    className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-600 rounded-lg hover:opacity-80 transition"
                                    to="/problems"
                                >
                                    🔥 Start Solving
                                </Link>

                                <Link
                                    className="inline-flex text-white items-center px-6 py-3 font-medium bg-green-600 rounded-lg hover:opacity-80 transition"
                                    to="/contest"
                                >
                                    🏆 Join Contest
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right side image */}
                    <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full flex justify-center sm:justify-start">
                        <img
                            className="w-96 opacity-90"
                            src="https://i.ibb.co/5BCcDYB/Remote2.png"
                            alt="coding illustration"
                        />
                    </div>
                </aside>

                {/* Center image below */}
                <div className="grid place-items-center sm:mt-20">
                    <img
                        className="sm:w-96 w-48"
                        src="https://i.ibb.co/2M7rtLk/Remote1.png"
                        alt="developer at work"
                    />
                </div>

                {/* Bottom motivational line */}
                <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium text-gray-800">
                    💡 “DSA is not about code, it’s about <span className='text-indigo-600 font-bold'>thinking smarter</span>.”
                </h1>
            </div>
        </>
    )
}

export default Home