import React from 'react'
import Navbar from '../Navbar'

const About = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <p className="mb-6">This page demonstrates navigation with React Router DOM.</p>
      
      <div className="mb-6 p-4 border border-gray-300 rounded bg-white">
        <h2 className="font-bold mb-2">Navigation</h2>
        <Navbar />
      </div>
      
      <div className="p-4 border border-gray-300 rounded bg-white">
        <p className="mb-2"><strong>Current Route:</strong> /about</p>
        <p>Notice how the URL has changed but the page didn't fully reload. This is the SPA (Single Page Application) behavior provided by React Router.</p>
      </div>
    </div>
  )
}

export default About;