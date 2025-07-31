const testimonials = [
  {
    name: 'Priya Sharma',
    quote: 'Aashirvad made our wedding magical! The décor and service were outstanding.',
    image: '/testimonials/priya.jpg',
  },
  {
    name: 'Rahul Verma',
    quote: 'Spacious hall, beautiful lawns, and delicious food. Highly recommended!',
    image: '/testimonials/rahul.jpg',
  },
  {
    name: 'Meena Gupta',
    quote: 'The team handled everything perfectly. Our guests loved the ambiance.',
    image: '/testimonials/meena.jpg',
  },
];

export default function Testimonials() {
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
        Testimonials
      </h2>
      <div className="flex justify-center mb-8" data-aos="fade-right" data-aos-delay="200">
        <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-[#E5B200] via-[#300020] to-[#E4007C]"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-2 md:px-0">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-[#F8EBC0] rounded-xl shadow-lg p-4 md:p-8 border border-[#E5B200] hover:scale-105 transition-transform duration-300 font-serif"
            data-aos="flip-up"
            data-aos-delay={300 + idx * 100}
          >
            <p
              className="text-sm md:text-lg italic text-[#300020] mb-4"
              data-aos="fade-left"
              data-aos-delay={400 + idx * 100}
            >
              “{t.quote}”
            </p>
            <div
              className="flex items-center"
              data-aos="fade-right"
              data-aos-delay={500 + idx * 100}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#E5B200] mr-4"
                data-aos="zoom-in"
                data-aos-delay={600 + idx * 100}
              />
              <div>
                <span
                  className="font-bold text-sm md:text-base text-[#300020]"
                  data-aos="fade-right"
                  data-aos-delay={700 + idx * 100}
                >
                  {t.name}
                </span>
                <span
                  className="block text-xs md:text-sm text-[#E5B200]"
                  data-aos="fade-up"
                  data-aos-delay={800 + idx * 100}
                >
                  {t.event}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
