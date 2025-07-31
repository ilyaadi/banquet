import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-16 px-4 text-[#300020] bg-[url('/damask-bg.png')] bg-repeat bg-[#F8EBC0] border-t-4 border-[#E5B200] font-serif" style={{ fontFamily: 'Merriweather, Times New Roman, serif', letterSpacing: '2px' }} data-aos="fade-in">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 px-2 md:px-0">
        <div className="flex-1 w-full" data-aos="fade-right" data-aos-delay="100">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#300020] to-[#E4007C] drop-shadow-lg mb-4 font-serif">About Us</h2>
          <span className="block w-16 sm:w-24 h-1 rounded-full bg-gradient-to-r from-[#E5B200] via-[#300020] to-[#E4007C] mb-4 sm:mb-6"></span>
          <p className="text-base sm:text-lg md:text-xl mb-4 font-serif" data-aos="fade-up" data-aos-delay="200">
            Aashirvad Banquet Hall is a family-owned venue in Nurpur, Himachal Pradesh, where traditional Indian hospitality meets modern luxury. Our mission is to create unforgettable celebrations, blending timeless elegance with contemporary amenities. With decades of experience, we pride ourselves on personalized service, exquisite décor, and attention to every detail.             Whether it’s a grand wedding, intimate gathering, or corporate event, our team ensures every occasion is memorable. Discover the perfect blend of culture, comfort, and sophistication at Aashirvad Banquet Hall.
          </p>
        </div>
        <div className="flex-1 flex justify-center w-full" data-aos="zoom-in" data-aos-delay="400">
          <img src="/front2.jpg" alt="About Us" className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm border-4 border-[#E5B200]" />
        </div>
      </div>
    </section>
  );
}
