export default function Footer() {
  return (
    <footer className="bg-[url('/damask-bg.png')] bg-repeat bg-[#F8EBC0] border-t-4 border-[#E5B200] py-8 text-[#300020] font-serif" style={{ fontFamily: 'Merriweather, Times New Roman, serif', letterSpacing: '2px' }}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex items-center mb-4 md:mb-0" data-aos="zoom-in" data-aos-delay="100">
          <img src="/logo.png" alt="Banquet Hall Logo" className="w-10 h-10 md:w-12 md:h-12 mr-3" />
          <span className="font-bold text-lg md:text-xl tracking-wide">Nurpur Banquet Palace</span>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center" data-aos="fade-up" data-aos-delay="200">
          <a href="#" className="text-[#300020] hover:text-[#E5B200] font-semibold transition-colors font-serif" aria-label="Home">Home</a>
          <a href="#" className="text-[#300020] hover:text-[#E5B200] font-semibold transition-colors font-serif" aria-label="Highlights">Highlights</a>
          <a href="#" className="text-[#300020] hover:text-[#E5B200] font-semibold transition-colors font-serif" aria-label="Services">Services</a>
          <a href="#" className="text-[#300020] hover:text-[#E5B200] font-semibold transition-colors font-serif" aria-label="Packages">Packages</a>
          <a href="#" className="text-[#300020] hover:text-[#E5B200] font-semibold transition-colors font-serif" aria-label="Contact">Contact</a>
        </div>
      </div>
      <div className="text-center mt-6 text-sm text-[#300020] font-serif" data-aos="fade-in" data-aos-delay="300">
        &copy; {new Date().getFullYear()} Nurpur Banquet Palace. All rights reserved.
      </div>
    </footer>
  );
}
