export default function ContactSection() {
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
        Contact Us
      </h2>
      <div className="flex justify-center mb-8" data-aos="fade-right" data-aos-delay="200">
        <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-[#E5B200] via-[#300020] to-[#E4007C]"></span>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex-1 bg-[#F8EBC0] rounded-xl shadow-lg p-4 md:p-8 border border-[#E5B200] font-serif" data-aos="flip-up" data-aos-delay="300">
          <form className="space-y-6" data-aos="fade-up" data-aos-delay="400">
            <div data-aos="fade-right" data-aos-delay="500">
              <label htmlFor="name" className="block text-[#300020] font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg border border-[#E5B200] focus:outline-none focus:ring-2 focus:ring-[#E5B200] font-serif" />
            </div>
            <div data-aos="fade-left" data-aos-delay="600">
              <label htmlFor="email" className="block text-[#300020] font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border border-[#E5B200] focus:outline-none focus:ring-2 focus:ring-[#E5B200] font-serif" />
            </div>
            <div data-aos="fade-up" data-aos-delay="700">
              <label htmlFor="message" className="block text-[#300020] font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-lg border border-[#E5B200] focus:outline-none focus:ring-2 focus:ring-[#E5B200] font-serif"></textarea>
            </div>
            <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-[#E5B200] to-[#E4007C] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300 font-serif" data-aos="zoom-in-up" data-aos-delay="800">Send Message</button>
          </form>
        </div>
        <div className="flex-1 bg-[#F8EBC0] rounded-xl shadow-lg p-4 md:p-8 border border-[#E5B200] font-serif flex flex-col items-center" data-aos="fade-up" data-aos-delay="900">
          <h3 className="text-xl font-bold text-[#300020] mb-4 text-center w-full">Our Location</h3>
          <div className="w-full flex justify-center">
            <iframe
              src="https://www.google.com/maps?q=Nurpur+Banquet+Hall,+Nurpur,+Himachal+Pradesh,+India&output=embed"
              width="100%"
              height="250"
              className="rounded-xl"
              style={{ border: 0, borderRadius: '12px', maxWidth: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Banquet Hall Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
