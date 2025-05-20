import React from 'react'
import Navbar from '../Navbar'

const Home = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="mb-6">This is the home page of our React Router DOM demo.</p>
      
     
      
      <div className="p-4 border border-gray-300 rounded bg-white">
        <p className="mb-2"><strong>Current Route:</strong> /</p>
        <p>Use the navigation links above to see how React Router changes the content without page refreshes.</p>
      </div>
    </div>
  )
}

export default Home;