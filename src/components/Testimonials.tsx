import { useState, useEffect } from 'react';
import { Card, CardContent } from "./ui/card";

import { testimonials } from "../constants/landingPageData";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="relative mb-8">
      <h3 className="text-center mb-6 text-pink-800">
        Marafon ishtirokchilarining fikrlari
      </h3>
      
      <div className="relative overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="w-full flex-shrink-0 bg-gradient-to-br from-pink-50 to-rose-100 border-pink-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="text-pink-900">{testimonial.name}</h4>
                    <p className="text-pink-600 text-sm">{testimonial.age} yosh</p>
                  </div>
                </div>
                <p className="text-pink-800 mb-3 italic">"{testimonial.text}"</p>
                <div className="text-yellow-500">
                  {renderStars(testimonial.rating)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-pink-500 scale-110' 
                : 'bg-pink-200 hover:bg-pink-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}