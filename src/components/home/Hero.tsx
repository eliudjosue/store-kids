import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
      title: "Las mejores marcas ahora en nuestra tienda online",
    },
    {
      image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4",
      title: "Descubre nuestra nueva colección primavera-verano",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-dancing-script text-center">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 -mt-10 sm:-mt-16 md:-mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-pink-100 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-dancing-script text-blue-900 mb-2">
              Visita Nuestro OUTLET
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Descubre nuestras mejores ofertas
            </p>
            <button className="flex items-center text-blue-900 hover:text-blue-700 text-sm md:text-base">
              Ver más <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <div className="bg-blue-100 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-dancing-script text-blue-900 mb-2">
              Envío Gratis
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              En pedidos superiores a 80€
            </p>
            <button className="flex items-center text-blue-900 hover:text-blue-700 text-sm md:text-base">
              Ver condiciones <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}