const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', alt: 'Wedding Event', type: 'Wedding' },
  { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', alt: 'Banquet Hall Interior', type: 'Banquet Hall' },
  { src: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80', alt: 'Outdoor Wedding Lawn', type: 'Outdoor Lawn' },
  { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80', alt: 'Stage Decor', type: 'Stage & Decor' },
  { src: 'https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f5?auto=format&fit=crop&w=600&q=80', alt: 'Event Lighting', type: 'Lighting & Ambience' },
  { src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80', alt: 'Guest Room', type: 'Guest Rooms' },
  { src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80', alt: 'Parking Area', type: 'Parking Space' },
];

export default function Gallery() {
  return (
    <section className="py-16 px-4 bg-[#23234a] text-cream" data-aos="fade-in">
      <h2
        className="text-3xl md:text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 drop-shadow-lg mb-4 text-center"
        style={{ letterSpacing: '2px' }}
        data-aos="zoom-in"
      >
        Gallery
      </h2>
      <div className="flex justify-center mb-8">
        <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600"></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden shadow-lg bg-[#1a1a2e]" data-aos="fade-up" data-aos-delay={idx * 100}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="p-4 text-center">
              <span className="text-gold font-semibold">{img.type}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Optional: Add event type filters and lightbox in future */}
    </section>
  );
}
