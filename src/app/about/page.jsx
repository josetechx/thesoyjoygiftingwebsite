

export default function About() {
  const values = [
    {
      title: "Joy in Every Detail",
      description:
        "We believe that true joy lies in the thoughtful details that show how much you care.",
      icon: "❤️"
    },
    {
      title: "Artisan Craftsmanship",
      description:
        "Each basket is handcrafted with meticulous attention to quality and presentation.",
      icon: "✨"
    },
    {
      title: "Intentional Gifting",
      description:
        "Every gift should tell a story and create a meaningful connection between hearts.",
      icon: "🏱"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-forest mb-6">
                Our Story of Joy & Connection
              </h1>
              <p className="text-xl text-charcoal mb-8 leading-relaxed">
                Founded on the belief that every moment deserves to be celebrated, The Soy Joy Gifting Basket was born from a passion for creating meaningful connections through thoughtful gifting.
              </p>
              <p className="text-lg text-charcoal mb-8 leading-relaxed">
                What started as a small venture to bring joy to our local community has blossomed into a trusted partner for individuals and businesses seeking to express their appreciation, love, and gratitude through beautifully curated gift experiences.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80"
                alt="Gift basket preparation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold opacity-20 rounded-full animate-float"></div>
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-blush opacity-30 rounded-full animate-float"
                style={{ animationDelay: '2s' }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
