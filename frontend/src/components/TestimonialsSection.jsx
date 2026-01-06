import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { testimonials } from '../data/mock';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-maroon-800 font-medium tracking-widest uppercase text-sm mb-2">Customer Love</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 mb-4">What Our Customers Say</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Trusted by thousands of happy customers across India
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={80} className="text-maroon-800" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={24} 
                    className={`${i < testimonials[currentIndex].rating ? 'text-amber-500 fill-amber-500' : 'text-stone-300'}`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-xl lg:text-2xl text-stone-700 leading-relaxed mb-8 font-serif italic">
                "{testimonials[currentIndex].review}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14 bg-maroon-800">
                    <AvatarFallback className="bg-maroon-800 text-white text-lg font-semibold">
                      {testimonials[currentIndex].avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-stone-900 text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-stone-500">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <p className="text-sm text-stone-500">Purchased</p>
                  <p className="font-medium text-maroon-800">{testimonials[currentIndex].productBought}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full w-12 h-12 border-2 border-stone-300 hover:border-maroon-800 hover:text-maroon-800 transition-colors"
              onClick={prevTestimonial}
            >
              <ChevronLeft size={24} />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-maroon-800 w-8' 
                      : 'bg-stone-300 hover:bg-stone-400'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full w-12 h-12 border-2 border-stone-300 hover:border-maroon-800 hover:text-maroon-800 transition-colors"
              onClick={nextTestimonial}
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-maroon-800">50K+</p>
            <p className="text-stone-600 mt-1">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-maroon-800">4.8</p>
            <p className="text-stone-600 mt-1">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-maroon-800">98%</p>
            <p className="text-stone-600 mt-1">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
