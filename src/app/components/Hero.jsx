'use client'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sage-900">
      {/* Background Image + Modern Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Gift background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/30 to-transparent"></div>
      </div>

      {/* Main Content Centered */}
      <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
            Elevate Every Gift
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 font-light">
            Unwrap premium gifting experiences. Tailored, beautiful, and unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-8 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-sage-900 font-semibold text-lg shadow-md transition-transform hover:scale-105 min-w-[180px]">
              Shop Now
            </button>
            <button className="px-8 py-3 rounded-full border border-white/30 hover:border-white/50 text-white hover:bg-white/10 font-medium text-lg backdrop-blur-sm transition-transform hover:scale-105 min-w-[180px]">
              View Gallery
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center transition-all duration-1000 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[{
            number: '2,500+',
            label: 'Happy Customers'
          }, {
            number: '100+',
            label: 'Unique Products'
          }, {
            number: '4.9/5',
            label: 'Customer Rating'
          }].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-md hover:bg-white/10 transition duration-300"
            >
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
