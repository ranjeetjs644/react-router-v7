import React from 'react'
import Navbar from '../Navbar'

const Contact = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Contact Page</h1>
      <p className="mb-6">This page shows how to navigate to the Contact route.</p>
      
      <div className="mb-6 p-4 border border-gray-300 rounded bg-white">
        <h2 className="font-bold mb-2">Navigation</h2>
        <Navbar />
      </div>
      
      <div className="p-4 border border-gray-300 rounded bg-white">
        <p className="mb-2"><strong>Current Route:</strong> /contact</p>
        <p>This is the contact page. In a real application, you might place a contact form here.</p>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input 
              type="text" 
              id="name" 
              className="border p-2 w-full" 
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input 
              type="email" 
              id="email" 
              className="border p-2 w-full" 
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">Message:</label>
            <textarea 
              id="message" 
              rows="3" 
              className="border p-2 w-full"
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="bg-gray-800 text-white px-4 py-2">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
