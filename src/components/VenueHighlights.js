const highlights = [
  {
    title: 'Main Banquet Hall',
    description: 'Spacious, elegant hall with luxurious décor and modern amenities.',
    img: '/main_banquet_hall.jpg',
  },
  {
    title: 'Open Lawns',
    description: 'Beautifully landscaped lawns for outdoor events and ceremonies.',
    img: '/open_lawn.jpg',
  },
  {
    title: 'Stage & Décor Setup',
    description: 'Customizable stage and décor for weddings, receptions, and more.',
    img: '/decor.jpg',
  },
  {
    title: 'Lighting & Ambience',
    description: 'Premium lighting and ambiance to set the perfect mood.',
    img: '/lighting.jpg',
  },
  {
    title: 'Guest Rooms',
    description: 'Comfortable, well-appointed rooms for guests and family.',
    img: '/guest_rooms.jpg',
  },
  {
    title: 'Parking Space',
    description: 'Ample parking for guests with security and convenience.',
    img: '/parking_space.jpg',
  },
];

export default function VenueHighlights() {
  return (
    <section className="py-16 px-4 bg-[#F8EBC0] text-[#300020]" data-aos="fade-in">
      <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E5B200] via-[#300020] to-[#E4007C] drop-shadow-lg mb-4 text-center" style={{ letterSpacing: '2px' }} data-aos="zoom-in" data-aos-delay="100">
        Venue Highlights
      </h2>
      <div className="flex justify-center mb-8" data-aos="fade-right" data-aos-delay="200">
        <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-[#E5B200] via-[#300020] to-[#E4007C]"></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-2 sm:px-0">
        {highlights.map((feature, idx) => (
          <div key={idx} className="bg-[#F8EBC0] rounded-xl shadow-lg p-4 sm:p-8 flex flex-col items-center text-center border border-[#E5B200] hover:scale-105 transition-transform duration-300" data-aos="flip-left" data-aos-delay={400 + idx * 100}>
            <img src={feature.img} alt={feature.title + ' image'} className="mb-4 w-full h-32 sm:h-40 object-cover rounded-lg border-2 border-[#E5B200]" data-aos="zoom-in" data-aos-delay={500 + idx * 100} />
            <h3 className="text-base sm:text-xl font-semibold text-[#300020] mb-2 border-b border-[#E5B200] pb-1 w-full" data-aos="fade-right" data-aos-delay={700 + idx * 100}>{feature.title}</h3>
            <p className="text-sm sm:text-base text-[#300020]" data-aos="fade-left" data-aos-delay={800 + idx * 100}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
