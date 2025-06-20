'use client'

import Link from 'next/link'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!')
      setEmail('')
    } else {
      toast.error('Please enter a valid email address')
    }
  }

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & Description */}
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-4">The Soy Joy Gifting Basket</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Thoughtfully curated gift baskets for every special moment—celebrate, surprise, and spread joy.
          </p>
          <div className="flex gap-4 text-xl text-gray-400">
            <a href="#" className="hover:text-gold transition-all"><FaTwitter /></a>
            <a href="#" className="hover:text-gold transition-all"><FaInstagram /></a>
            <a href="#" className="hover:text-gold transition-all"><FaGithub /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            <li><Link href="/collections" className="hover:text-gold transition-colors">Gift Collections</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <p className="text-gray-400 mb-4">Sign up for updates and gifting inspiration.</p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gold text-black rounded-md hover:bg-yellow-400 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} The Soy Joy Gifting Basket. All rights reserved.
        <div className="mt-2 space-x-4">
          <Link href="/privacy" className="hover:text-gold">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
