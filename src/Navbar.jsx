import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  
  // Function to determine if link is active
  const isActive = (path) => {
    return location.pathname === path ? 'bg-gray-800 text-white' : 'text-gray-800 hover:bg-gray-200';
  };
  
  return (
    <nav className='flex gap-2 mx-auto'>
      <Link 
        to="/" 
        className={`px-3 py-1 rounded transition-colors ${isActive('/')}`}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className={`px-3 py-1 rounded transition-colors ${isActive('/about')}`}
      >
        About
      </Link>
      <Link 
        to="/services" 
        className={`px-3 py-1 rounded transition-colors ${isActive('/services')}`}
      >
        Services
      </Link>
      <Link 
        to="/contact" 
        className={`px-3 py-1 rounded transition-colors ${isActive('/contact')}`}
      >
        Contact
      </Link>
    </nav>
  )
}

export default Navbar