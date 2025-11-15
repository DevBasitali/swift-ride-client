// components/Hero.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Premium Car */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/background.png" // Add your premium car image
          alt="Premium Car"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Main Text */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-orange-300 font-medium">Premium Collection 2024</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Drive Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Dream Car
              </span>
              Today
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 max-w-md">
              Experience luxury and performance with our exclusive fleet of premium vehicles.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/cars"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Browse Cars
              </Link>
              <Link
                to="/booking"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Book Now
              </Link>
            </div>

            {/* Features */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Premium Cars</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Insured</div>
              </div>
            </div>
          </div>

          {/* Right Side - Additional Info */}
          <div className={`lg:pl-12 space-y-6 transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            {/* Company Name */}
            <div className="hidden lg:block">
              <h2 className="text-3xl font-bold text-white mb-4">
                Swift Ride
              </h2>
              <p className="text-gray-300 mb-8">
                Your trusted partner for premium car rentals. We offer an extensive 
                selection of luxury vehicles, competitive prices, and exceptional service 
                to make your journey unforgettable.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-orange-400 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Instant Booking</h3>
                <p className="text-gray-400 text-sm">Book your car in seconds</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-orange-400 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Fully Insured</h3>
                <p className="text-gray-400 text-sm">Comprehensive coverage</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-orange-400 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Multiple Locations</h3>
                <p className="text-gray-400 text-sm">100+ pickup points</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-orange-400 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Best Price</h3>
                <p className="text-gray-400 text-sm">Guaranteed lowest rates</p>
              </div>
            </div>

            {/* Call to Action Text */}
            <div className="hidden lg:block bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30">
              <div className="flex items-center gap-4">
                <div className="text-orange-400">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Special Offer</h3>
                  <p className="text-gray-300 text-sm">Get 20% off on your first booking with code SWIFT20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      
      {/* Animated Lines */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-orange-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 border border-red-500/20 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;