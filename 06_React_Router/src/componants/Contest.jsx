import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Contest() {
  return (
    <div className="mx-auto w-full max-w-7xl">
       <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full flex justify-start">
          <img
            className="w-96 opacity-90"
            src="https://c4.wallpaperflare.com/wallpaper/42/94/569/programming-php-code-developer-wallpaper-thumb.jpg"
            alt="contest"
          />
        </div>
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-40 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Join Exciting Coding Contests 
              <span className="hidden sm:block text-3xl text-orange-700">
                Compete • Learn • Win
              </span>
            </h2>

            <p className="text-lg text-gray-700">
              Challenge yourself with real-world coding problems, 
              sharpen your DSA skills, and climb the leaderboard.
            </p>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
              to="/Problems"
            >
               Start Solving Now
            </Link>
          </div>
        </div>

        {/* Background Contest Image */}
       
      </aside>

      {/* Contest Illustration */}
      <div className="grid place-items-center sm:mt-20 mt-10">
        <img
          className="sm:w-96 w-52"
          src="https://i.ibb.co/qFjYtxC/coding.png"
          alt="contest-coding"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-semibold text-gray-800">
        Code. Compete. Conquer.  
      </h1>
    </div>
  )
}

export default Contest