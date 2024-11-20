import { useState, useEffect } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

const bakeryProducts = [
  {
    name: "Artisan Sourdough",
    description: "Naturally leavened bread",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxLIdWSrBoqwjkzXllENwIaxEkvBqQBarAA&s"
  },
  {
    name: "French Croissants",
    description: "Buttery and flaky",
    imgUrl: "https://media.istockphoto.com/id/95380176/photo/fresh-croissant.jpg?s=612x612&w=0&k=20&c=WC9_MHOVAcCPF39ER4plI5yFmVhnO-bKqTeiXk3TKmM="
  },
  {
    name: "Chocolate Eclairs",
    description: "Filled with cream",
    imgUrl: "https://media.istockphoto.com/id/1381139289/photo/traditional-french-eclairs-with-chocolate.jpg?s=612x612&w=0&k=20&c=1ZxJVTP0e1R6xWUugSRB6oeuaq-q9iEgIN8zfHanylc="
  },
  {
    name: "Fresh Baguettes",
    description: "Crusty and authentic",
    imgUrl: "https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?cs=srgb&dl=pexels-pixabay-461060.jpg&fm=jpg"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bakeryProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? bakeryProducts.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    setIsVisible(true);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-orange-50 to-orange-100">
      <div className="container mx-auto px-4 lg:px-6 min-h-[600px] lg:h-[500px]">
        <div className="flex flex-col lg:flex-row h-full items-center py-8 lg:py-0">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <div className="overflow-hidden">
              <div 
                className={`text-4xl md:text-5xl font-bold transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                Fresh Baked Happiness
              </div>
              <div 
                className={`text-4xl md:text-5xl font-bold text-orange-500 transition-all duration-1000 delay-300 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                Delivered To You
              </div>
            </div>
            <p className={`mb-6 text-gray-600 text-lg mt-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Discover our handcrafted breads, pastries, and cakes made fresh daily
            </p>
            <button className={`bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Shop Now <ShoppingBag className="inline-block ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Right Content - Carousel */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto">
              <div className={`absolute inset-0 rounded-lg shadow-xl overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <img 
                  src={bakeryProducts[currentSlide].imgUrl}
                  alt={bakeryProducts[currentSlide].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 bg-black/40 w-full text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {bakeryProducts[currentSlide].name}
                    </h3>
                    <p>{bakeryProducts[currentSlide].description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-orange-500" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-orange-500" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {bakeryProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? 'bg-orange-500' : 'bg-orange-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;