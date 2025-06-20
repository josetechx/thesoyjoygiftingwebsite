'use client'
import { useState } from 'react'

export default function CollectionsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const collections = [
    {
      title: "Corporate Excellence",
      description: "Professional gift baskets that leave lasting impressions on clients and colleagues.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&q=80",
      features: ["Premium Selection", "Custom Branding", "Bulk Orders"],
      price: "From $85"
    },
    {
      title: "Seasonal Celebrations",
      description: "Curated collections that capture the spirit and joy of every season.",
      image: "https://images.unsplash.com/photo-1512909006721-3d6018887943?w=500&q=80",
      features: ["Seasonal Themes", "Limited Edition", "Festive Packaging"],
      price: "From $45"
    },
    {
      title: "Personalized Touch",
      description: "Bespoke arrangements tailored to create unique and meaningful experiences.",
      image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=500&q=80",
      features: ["Custom Design", "Personal Message", "Handcrafted"],
      price: "From $65"
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-sage-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-6">
            Our Signature Collections
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-sage-900 mb-6">
            Crafted for
            <span className="block text-gold-600 font-medium">Every Occasion</span>
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Each collection is meticulously crafted to deliver joy, surprise, and unforgettable moments. 
            Discover the perfect gift for any celebration.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sage-100 transition-all duration-500 ${
                hoveredIndex === index ? 'shadow-2xl scale-105 border-sage-200' : 'hover:shadow-xl'
              }`}>
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sage-700 font-medium text-sm">
                    {collection.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-medium text-sage-900 mb-3">
                    {collection.title}
                  </h3>
                  <p className="text-sage-600 mb-6 leading-relaxed">
                    {collection.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {collection.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-sage-600">
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'bg-sage-700 text-white shadow-lg'
                      : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
                  }`}>
                    {hoveredIndex === index ? 'Shop Now' : 'Learn More'}
                  </button>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-sage-200 to-gold-200 rounded-3xl transition-all duration-500 ${
                hoveredIndex === index ? 'scale-110 opacity-20' : 'scale-100 opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-sage-700 to-sage-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            View All Collections
            <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
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