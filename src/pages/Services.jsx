import React from 'react'
import Navbar from '../Navbar'

const Services = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Services Page</h1>
      <p className="mb-6">This page demonstrates navigation with React Router DOM.</p>
      
     
      
      <div className="p-4 border border-gray-300 rounded bg-white">
        <p className="mb-2"><strong>Current Route:</strong> /services</p>
        <p>This demonstrates how React Router handles different routes in a single-page application.</p>
        
        <div className="mt-4">
          <h3 className="font-bold mb-2">Our Services:</h3>
          <ul className="list-disc pl-5">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
