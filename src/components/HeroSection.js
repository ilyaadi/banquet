import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="py-6 px-2 sm:py-10 sm:px-4 bg-[#E5B200] text-[#F8EBC0] border-b-4 border-[#300020] font-serif" style={{ fontFamily: 'Merriweather, Times New Roman, serif' }} data-aos="fade-in">
      <div className="max-w-2xl sm:max-w-5xl mx-auto flex flex-col items-center">
        <img src="/logo.png" alt="Banquet Hall Logo" className="w-16 h-16 sm:w-20 sm:h-20 max-w-full mb-3 sm:mb-4" data-aos="zoom-in" data-aos-delay="100" />
        <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#300020] to-[#E4007C] drop-shadow-lg" style={{ letterSpacing: '2px' }} data-aos="fade-up" data-aos-delay="200">
          Aashirvad Banquet Hall
        </h1>
        <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-center mb-3 sm:mb-4 text-[#300020]" data-aos="fade-right" data-aos-delay="300">Where Traditions Meet Luxury</h2>
        <p className="text-xs sm:text-base md:text-lg text-center mb-4 sm:mb-6 text-[#300020] max-w-[90vw] sm:max-w-2xl" data-aos="fade-left" data-aos-delay="400">
          Experience the grandeur of Indian celebrations in a modern, elegant setting. Perfect for weddings, receptions, and all special occasions in Nurpur, Himachal Pradesh.
        </p>
        <a href="#contact" className="inline-block px-3 py-2 sm:px-6 sm:py-2 rounded-lg bg-gradient-to-r from-[#E5B200] to-[#E4007C] text-white font-bold text-xs sm:text-lg shadow-lg hover:scale-105 transition-transform duration-300" data-aos="zoom-in-up" data-aos-delay="500">
          Book Your Event
        </a>
      </div>
    </section>
  );
}
