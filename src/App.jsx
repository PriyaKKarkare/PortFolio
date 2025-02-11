import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);
  
  return (
    <>
      <div className=' bg-slate-400 h-auto max-w-screen-2xl transition-all duration-300  blur-xs hover:blur-none'>
        {loading ? (
          <div className="flex flex-col items-center">
            {/* Spinner */}
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
            <p className="mt-2 text-gray-600">Loading...</p>
          </div>
        ) : (
          <>
            <Navbar />
            <Home />
            <Portfolio />
            <Contact />
            <Footer />
            <Toaster />
          </>
        )}
        {/* <Navbar />
        <Home /> */}
        {/* <About /> */}
        {/* <Portfolio /> */}
        {/* <Experience /> */}
        {/* <Contact />
        <Footer /> */}
      </div>
      {/* <Toaster /> */}
    </>
  )
}

export default App
