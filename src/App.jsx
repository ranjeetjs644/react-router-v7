import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <header className="p-4 border-b mb-4">
        <h1 className="text-2xl font-bold text-center">React Router DOM Demo</h1>
        <div className="text-center text-sm text-gray-500 mt-1">
          A simple demo showing client-side routing
        </div>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      
      <footer className="mt-8 p-4 border-t text-center text-sm text-gray-500">
        React Router DOM Demo - Demonstrating SPA routing
      </footer>
    </div>
  )
}

export default App
