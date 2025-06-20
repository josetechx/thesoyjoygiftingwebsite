// pages/contact.js
'use client'
  import { useState } from 'react'
  import toast from 'react-hot-toast'
  
  export default function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsSubmitting(true)
  
      // Simulate form submission
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        toast.success('Thank you! Your message has been sent successfully.')
        setFormData({ name: '', email: '', message: '' })
      } catch (error) {
        toast.error('Something went wrong. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    }
  
    const contactInfo = [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        ),
        title: "Phone",
        content: "+1 (555) 123-4567",
        link: "tel:+15551234567"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        title: "Email",
        content: "hello@thesoyjoy.com",
        link: "mailto:hello@thesoyjoy.com"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: "Address",
        content: "123 Gifting Lane, Joy City, JC 12345",
        link: null
      }
    ]
  
    return (
      <>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-forest mb-6">
              Let's Create Something Beautiful Together
            </h1>
            <p className="text-xl text-charcoal max-w-2xl mx-auto">
              Ready to curate the perfect gift? We're here to help you create an unforgettable experience that will be cherished forever.
            </p>
          </div>
        </section>
  
        {/* Contact Form & Info */}
        <section className="py-20 bg-champagne">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-ivory rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-serif font-bold text-forest mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-champagne rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-champagne rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-champagne rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your gifting needs, special occasion, or any specific requirements..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Let\'s Help You Curate the Perfect Gift'}
                  </button>
                </form>
              </div>
  
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-forest mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-charcoal mb-8 leading-relaxed">
                    We'd love to hear from you! Whether you're planning a corporate event, celebrating a special milestone, or simply want to bring joy to someone's day, our team is here to help create the perfect gifting experience.
                  </p>
                </div>
  
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-forest rounded-full flex items-center justify-center text-ivory">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-forest mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-charcoal hover:text-forest transition-colors duration-300"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-charcoal">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
  
                {/* Social Links */}
                <div className="pt-8 border-t border-blush">
                  <h3 className="text-lg font-semibold text-forest mb-4">Follow Our Journey</h3>
                  <div className="flex space-x-4">
                    {['Facebook', 'Instagram', 'Pinterest'].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 bg-forest rounded-full flex items-center justify-center text-ivory hover:bg-opacity-80 transition-all duration-300 hover:scale-110"
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Map Section */}
        <section className="py-20 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-forest mb-4">
                Visit Our Studio
              </h2>
              <p className="text-lg text-charcoal max-w-2xl mx-auto">
                Located in the heart of the city, our studio is where all the magic happens. Schedule a visit to see our process firsthand.
              </p>
            </div>
            
            <div className="bg-forest rounded-2xl p-8 text-center text-ivory">
              <div className="max-w-md mx-auto">
                <svg className="w-16 h-16 mx-auto mb-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-2xl font-serif font-bold mb-2">Our Location</h3>
                <p className="text-champagne mb-4">123 Gifting Lane, Joy City, JC 12345</p>
                <p className="text-sm text-champagne">
                  Google Maps integration would be embedded here in production
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20 bg-forest text-ivory text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-champagne mb-8 max-w-2xl mx-auto">
              Don't wait to make someone's day extraordinary. Let's begin crafting your perfect gift today.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
              <a href="tel:+15551234567" className="btn-primary bg-gold text-forest hover:bg-opacity-90 inline-block">
                Call Us Now
              </a>
              <a href="mailto:hello@thesoyjoy.com" className="btn-secondary border-champagne text-champagne hover:bg-champagne hover:text-forest inline-block">
                Send an Email
              </a>
            </div>
          </div>
        </section>
      </>
    )
}