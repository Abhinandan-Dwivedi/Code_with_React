import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className="fixed z-50 bottom-0 left-0 flex bg-amber-200 w-full h-30">
      <div className="flex-1 flex items-center justify-center px-2">
        <p className="text-sm">
          Boost your DSA skills! Join <span className="text-orange-400 font-semibold">LeetCode Pro</span> today.
          <Link to="#" className="ml-2 text-indigo-400 hover:underline">Learn More →</Link>
        </p>
      </div>
      <div className="flex-1 flex items-center justify-end px-2">
        <p className="text-sm">
          Link Boost your DSA skills! Join <span className="text-orange-400 font-semibold">LeetCode Pro</span> today.
          <Link to="#" className="ml-2 text-indigo-400 hover:underline">Learn More →</Link>
        </p>
      </div>
    </div>

  )
}
export default Footer