// components/BrowseCars.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const BrowseCars = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [carsPerView, setCarsPerView] = useState(3);
  const navigate = useNavigate();

  // Sample car data - replace with your actual data
  const cars = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      category: "Luxury",
      price: 199,
      image: "/src/assets/cars/mercedes-s-class.jpg",
      seats: 4,
      transmission: "Automatic",
      fuel: "Hybrid",
      rating: 4.9,
      features: ["GPS", "Bluetooth", "USB", "AC"],
      available: true
    },
    {
      id: 2,
      name: "BMW 7 Series",
      category: "Luxury",
      price: 189,
      image: "/src/assets/cars/bmw-7-series.jpg",
      seats: 4,
      transmission: "Automatic",
      fuel: "Petrol",
      rating: 4.8,
      features: ["GPS", "Bluetooth", "USB", "AC"],
      available: true
    },
    {
      id: 3,
      name: "Audi A8",
      category: "Luxury",
      price: 179,
      image: "/src/assets/cars/audi-a8.jpg",
      seats: 4,
      transmission: "Automatic",
      fuel: "Diesel",
      rating: 4.7,
      features: ["GPS", "Bluetooth", "USB", "AC"],
      available: true
    },
    {
      id: 4,
      name: "Tesla Model S",
      category: "Electric",
      price: 229,
      image: "/src/assets/cars/tesla-model-s.jpg",
      seats: 5,
      transmission: "Automatic",
      fuel: "Electric",
      rating: 4.9,
      features: ["Autopilot", "GPS", "Bluetooth", "AC"],
      available: true
    },
    {
      id: 5,
      name: "Porsche Panamera",
      category: "Sports",
      price: 249,
      image: "/src/assets/cars/porsche-panamera.jpg",
      seats: 4,
      transmission: "Automatic",
      fuel: "Hybrid",
      rating: 5.0,
      features: ["GPS", "Sports Mode", "USB", "AC"],
      available: true
    },
    {
      id: 6,
      name: "Range Rover Sport",
      category: "SUV",
      price: 209,
      image: "/src/assets/cars/range-rover.jpg",
      seats: 7,
      transmission: "Automatic",
      fuel: "Diesel",
      rating: 4.8,
      features: ["4WD", "GPS", "Bluetooth", "AC"],
      available: true
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // Handle responsive cars per view
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCarsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCarsPerView(2);
      } else {
        setCarsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = cars.length - carsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = cars.length - carsPerView;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const handleBookNow = (carId, carName) => {
    // Store selected car info in localStorage or state management
    localStorage.setItem('selectedCar', JSON.stringify({ id: carId, name: carName }));
    // Navigate to login
    navigate('/login');
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="text-sm font-semibold text-orange-700">Premium Collection</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Browse Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Premium Fleet</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our exclusive collection of luxury and premium vehicles for your next journey
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cars Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / carsPerView)}%)` 
              }}
            >
              {cars.map((car, index) => (
                <div
                  key={car.id}
                  className={`flex-shrink-0 transition-all duration-700 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ 
                    width: `calc(${100 / carsPerView}% - 1.5rem)`,
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                    {/* Car Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                          {car.category}
                        </span>
                      </div>
                      
                      {/* Rating */}
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                        <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="text-xs font-semibold text-gray-700">{car.rating}</span>
                      </div>
                    </div>

                    {/* Car Details */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {car.name}
                      </h3>

                      {/* Features */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="flex items-center gap-1 text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                          </svg>
                          <span className="text-xs">{car.seats} Seats</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                          </svg>
                          <span className="text-xs">{car.transmission}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                          </svg>
                          <span className="text-xs">{car.fuel}</span>
                        </div>
                      </div>

                      {/* Price and Book Button */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <span className="text-gray-600 text-sm">Per Day</span>
                          <div className="text-2xl font-bold text-gray-900">
                            ${car.price}
                          </div>
                        </div>
                        
                        <button
                          onClick={() => handleBookNow(car.id, car.name)}
                          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(Math.max(1, cars.length - carsPerView + 1))].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-8 bg-gradient-to-r from-orange-500 to-red-500' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                } rounded-full`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <Link
            to="/cars"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            View All Cars
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default BrowseCars;