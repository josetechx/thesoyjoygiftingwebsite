'use client'
import { useState, useEffect } from 'react'
// import logo from '../../../public/the-soy-logo.png'

export default function ModernNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('/')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ]



  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-sage-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-full mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex justify-start items-center group cursor-pointer">
            <div className="transition-transform duration-300 group-hover:scale-110 w-74 h-74">
              <img src='/the-soy-logo.png' alt="logo" className='w-full h-full object-fit' />
            </div>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => setActiveLink(item.href)}
                className={`relative px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-full group ${
                  activeLink === item.href
                    ? 'text-white bg-sage-600 shadow-lg'
                    : 'text-sage-700 hover:text-sage-900 hover:bg-sage-50'
                }`}
              >
                {item.label}
                {activeLink !== item.href && (
                  <span className="absolute inset-0 rounded-full bg-sage-600 scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-10"></span>
                )}
              </button>
            ))}
            
            {/* CTA Button */}
            <button className="ml-4 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-sage-700 hover:text-sage-900 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  setActiveLink(item.href)
                  setIsMobileMenuOpen(false)
                }}
                className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                  activeLink === item.href
                    ? 'text-white bg-sage-600 shadow-md'
                    : 'text-sage-700 hover:bg-sage-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .text-sage-50 { color: #f8faf8; }
        .text-sage-100 { color: #ecf0ec; }
        .text-sage-600 { color: #8a9b8a; }
        .text-sage-700 { color: #748474; }
        .text-sage-800 { color: #5d6d5d; }
        .text-sage-900 { color: #475647; }
        .text-gold-500 { color: #d4af37; }
        .text-gold-600 { color: #b8956b; }
        
        .bg-sage-50 { background-color: #f8faf8; }
        .bg-sage-100 { background-color: #ecf0ec; }
        .bg-sage-600 { background-color: #8a9b8a; }
        .bg-gold-500 { background-color: #d4af37; }
        .bg-gold-600 { background-color: #b8956b; }
        
        .border-sage-100 { border-color: #ecf0ec; }
        
        .from-gold-500 { --tw-gradient-from: #d4af37; }
        .to-gold-600 { --tw-gradient-to: #b8956b; }
      `}</style>
    </nav>
  )
}