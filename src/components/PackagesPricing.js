const packages = [
  {
    tier: 'Silver',
    features: [
      'Banquet hall access',
      'Basic décor & lighting',
      'Standard catering',
      'Parking included',
    ],
  },
  {
    tier: 'Gold',
    features: [
      'Premium décor & lighting',
      'Custom catering menu',
      'DJ & entertainment',
      'Guest room stays',
    ],
  },
  {
    tier: 'Platinum',
    features: [
      'Luxury décor & floral',
      'Exclusive catering',
      'Photography & videography',
      'Full event planning',
    ],
  },
];

export default function PackagesPricing() {
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
        Packages & Pricing
      </h2>
      <div className="flex justify-center mb-8" data-aos="fade-right" data-aos-delay="200">
        <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-[#E5B200] via-[#300020] to-[#E4007C]"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-2 md:px-0">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`bg-[#F8EBC0] rounded-xl shadow-lg p-4 md:p-8 flex flex-col items-center text-center border-2 border-[#300020] hover:scale-105 transition-transform duration-300 font-serif`}
            data-aos="flip-right"
            data-aos-delay={300 + idx * 100}
          >
            <h3
              className="text-base md:text-2xl font-bold text-[#300020] mb-2 border-b border-[#E5B200] pb-1 w-full"
              data-aos="fade-right"
              data-aos-delay={400 + idx * 100}
            >
              {pkg.tier}
            </h3>
            <ul className="mb-4 list-disc list-inside text-left">
              {pkg.features.map((feature, i) => (
                <li
                  key={i}
                  className="text-sm md:text-base text-[#300020] mb-2"
                  data-aos="fade-up"
                  data-aos-delay={500 + i * 50}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
