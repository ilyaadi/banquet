const services = [
  {
    title: 'Catering',
    description: 'Delicious veg & non-veg menus, custom options for every event.',
    icon: '🍽️',
  },
  {
    title: 'Wedding Planning',
    description: 'Expert planning for seamless, memorable celebrations.',
    icon: '💍',
  },
  {
    title: 'Decorations',
    description: 'Themes, floral arrangements, and custom décor setups.',
    icon: '🌸',
  },
  {
    title: 'DJ & Entertainment',
    description: 'Professional DJ, live music, and entertainment options.',
    icon: '🎶',
  },
  {
    title: 'Photography',
    description: 'Capture every moment with skilled photographers.',
    icon: '📸',
  },
  {
    title: 'Room Stays',
    description: 'Comfortable guest rooms for family and friends.',
    icon: '🏨',
  },
];

export default function ServicesOffered() {
  return (
    <section
      className="py-16 px-4 text-[#300020] bg-[url('/damask-bg.png')] bg-repeat bg-[#F8EBC0] border-t-4 border-[#E5B200] font-serif"
      style={{ fontFamily: 'Merriweather, Times New Roman, serif', letterSpacing: '2px' }}
      data-aos="fade-in"
    >
      <h2
        className="text-3xl md:text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E5B200] via-[#300020] to-[#E4007C] drop-shadow-lg mb-4 text-center"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        Services Offered
      </h2>
      <div className="flex justify-center mb-8" data-aos="fade-right" data-aos-delay="200">
        <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-[#E5B200] via-[#300020] to-[#E4007C]"></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-2 sm:px-0">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#F8EBC0] rounded-xl shadow-lg p-4 sm:p-8 flex flex-col items-center text-center border border-[#E5B200] hover:scale-105 transition-transform duration-300 font-serif"
            data-aos="flip-up"
            data-aos-delay={300 + idx * 100}
          >
            <span
              className="text-3xl sm:text-5xl mb-4 text-[#E5B200]"
              data-aos="zoom-in"
              data-aos-delay={400 + idx * 100}
            >
              {service.icon}
            </span>
            <h3
              className="text-base sm:text-xl font-semibold text-[#300020] mb-2"
              data-aos="fade-right"
              data-aos-delay={500 + idx * 100}
            >
              {service.title}
            </h3>
            <p
              className="text-sm sm:text-base text-[#300020]"
              data-aos="fade-left"
              data-aos-delay={600 + idx * 100}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
