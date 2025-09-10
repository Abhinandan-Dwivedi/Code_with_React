import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Problems() {
  const problems = [
    { id: 1, title: "Two Sum", difficulty: "Easy" },
    { id: 2, title: "Reverse Linked List", difficulty: "Medium" },
    { id: 3, title: "Median of Two Sorted Arrays", difficulty: "Hard" },
    { id: 4, title: "Binary Tree Level Order Traversal", difficulty: "Medium" },
    { id: 5, title: "Longest Palindromic Substring", difficulty: "Hard" },
  ]; 
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10">
      <h1 className="text-3xl sm:text-5xl font-bold text-center text-indigo-700 mb-10">
          Practice DSA Problems
      </h1>

      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Solve problems, improve your skills, and prepare for coding interviews.
        Choose from different difficulty levels and challenge yourself every day.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <div
            key={problem.id}
            className="border border-gray-200 shadow-lg rounded-xl p-6 bg-white hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              {problem.title}
            </h2>
            <p
              className={`mt-2 text-sm font-medium ${
                problem.difficulty === "Easy"
                  ? "text-green-600"
                  : problem.difficulty === "Medium"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              Difficulty: {problem.difficulty}
            </p>

            <Link
              
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Solve →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Problems 