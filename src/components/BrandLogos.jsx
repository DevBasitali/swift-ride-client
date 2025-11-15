import React from 'react';


export default function BrandLogos() {
    const carBrands = [
    { id: 1, name: "BMW", logo: "car1.png" },
    { id: 2, name: "Mercedes", logo: "car2.png" },
    { id: 3, name: "Audi", logo: "car3.png" },
    { id: 4, name: "Tesla", logo: "car4.png" },
    { id: 5, name: "Porsche", logo: "car5.png" },
    { id: 6, name: "Lexus", logo: "car6.png" },
    { id: 7, name: "Toyota", logo: "car7.png" },
  ];

  const duplicatedBrands = [...carBrands, ...carBrands];
  return (
     <div className="hidden md:block relative bg-gradient-to-r from-gray-50 via-white to-gray-50 py-12 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
          <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span className="text-sm font-semibold text-gray-700">Trusted Partners</span>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Infinite Scroll */}
        <div className="flex animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 px-8 group"
            >
              <div className="relative">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Logo Container */}
                <div className="relative bg-white rounded-2xl p-6 shadow-sm group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={`/src/assets/cars/${brand.logo}`}
                    className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    alt={brand.name}
                    loading="lazy"
                  />
                  
                  {/* Brand Name Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                      {brand.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
