'use client'
import { useState, useEffect } from 'react'

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "The attention to detail in every basket is extraordinary. My clients were absolutely delighted with their corporate gifts.",
      role: "Corporate Executive",
      company: "Tech Solutions Inc.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=150&q=80"
    },
    {
      name: "James Rodriguez",
      text: "Perfect for celebrating our anniversary. The personalized touches made it incredibly special and memorable.",
      role: "Happy Customer",
      company: "Anniversary Celebration",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
    },
    {
      name: "Emily Chen",
      text: "Outstanding quality and presentation. This is my go-to for all special occasions and holiday gifting.",
      role: "Loyal Customer",
      company: "Regular Client",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [testimonials.length, isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-gold-500' : 'text-sage-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-24 bg-gradient-to-br from-sage-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-sage-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm text-sage-700 rounded-full text-sm font-medium mb-6 border border-sage-200">
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-sage-900 mb-6">
            What Our
            <span className="block text-gold-600 font-medium">Clients Say</span>
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl border border-sage-200 p-8 md:p-12 max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-sage-600 hover:text-sage-800 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-sage-600 hover:text-sage-800 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="relative min-h-80 flex items-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 flex flex-col items-center text-center ${
                    index === currentTestimonial 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentTestimonial 
                        ? 'opacity-0 -translate-x-8' 
                        : 'opacity-0 translate-x-8'
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-8">
                    <svg className="w-8 h-8 text-sage-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center mb-6">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl font-light text-sage-800 mb-8 leading-relaxed max-w-3xl">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-sage-200"
                    />
                    <div className="text-left">
                      <p className="text-xl font-medium text-sage-900">{testimonial.name}</p>
                      <p className="text-sage-600">{testimonial.role}</p>
                      <p className="text-sm text-sage-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-sage-700 scale-125' 
                    : 'bg-sage-300 hover:bg-sage-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-sage-800 mb-2">4.9/5</div>
            <div className="text-sage-600 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sage-800 mb-2">500+</div>
            <div className="text-sage-600 text-sm">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sage-800 mb-2">98%</div>
            <div className="text-sage-600 text-sm">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sage-800 mb-2">24h</div>
            <div className="text-sage-600 text-sm">Response Time</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .text-sage-100 { color: #ecf0ec; }
        .text-sage-200 { color: #d4ddd4; }
        .text-sage-600 { color: #8a9b8a; }
        .text-sage-700 { color: #748474; }
        .text-sage-900 { color: #475647; }
        .text-gold-500 { color: #d4af37; }
        .text-gold-600 { color: #b8956b; }
        
        .bg-sage-100 { background-color: #ecf0ec; }
        .bg-sage-200 { background-color: #d4ddd4; }
        .bg-sage-400 { background-color: #8fae8f; }
        .bg-sage-600 { background-color: #8a9b8a; }
        .bg-sage-700 { background-color: #748474; }
        .bg-gold-400 { background-color: #f1c40f; }
        .bg-gold-500 { background-color: #d4af37; }
        
        .border-sage-100 { border-color: #ecf0ec; }
        .border-sage-200 { border-color: #d4ddd4; }
        
        .hover\\:bg-sage-200:hover { background-color: #d4ddd4; }
        
        .from-sage-200 { --tw-gradient-from: #d4ddd4; }
        .from-sage-700 { --tw-gradient-from: #748474; }
        .to-sage-600 { --tw-gradient-to: #8a9b8a; }
        .to-gold-200 { --tw-gradient-to: #f7dc6f; }
      `}</style>
    </section>
  )
}