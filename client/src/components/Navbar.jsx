// Navbar.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='sticky top-0 z-50 bg-surface/60 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-6 md:px-16  w-full h-20'>
        {/* Brand Logo */}
        <div className='flex items-center gap-2'>
            <div className='w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-on-primary'>
                BF
            </div>
            <h1 className='font-headline-lg text-lg font-black text-primary tracking-tighter'>BudjetFlow</h1>
        </div>
        {/* Center Menu Links */}
        <div className='hidden md:flex items-center gap-8 font-label-sm text-on-surface-variant uppercase tracking-widest'>
            <a href="#features" className='hover:text-on-surface transition-colors'>Features</a>
            <a href="#analytics" className='hover:text-on-surface transition-colors'>Analytics</a>
            <a href="#pricing" className='hover:text-on-surface transition-colors'>Pricing</a>
            <a href="#testimonials" className='hover:text-on-surface transition-colors'>Testimonials</a>
        </div>
        {/* Call to Action Buttons */}
        <div className='flex items-center gap-4 text-xs font-label-sm uppercase tracking-widest'>
            <button onClick={()=>navigate('/login')} className='text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer'>Log In</button>
            <button onClick={()=>navigate('/signup')} className='flex items-center justify-center px-3 py-2.5 bg-primary hover:bg-primary-container text-on-primary rounded-lg font-bold shadow-lg shadow-primary/10 transition-all hover:scale-105 active:scale-95'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar