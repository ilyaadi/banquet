"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import VenueHighlights from "../components/VenueHighlights";
import ServicesOffered from "../components/ServicesOffered";
import PackagesPricing from "../components/PackagesPricing";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#2e2e4d] to-[#3a3a5c] font-sans">
      <HeroSection />
      <AboutUs />
      <VenueHighlights />
      <ServicesOffered />
      <PackagesPricing />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
