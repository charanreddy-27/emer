import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { heroData } from '../data/mock';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroData.backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/90 via-maroon-900/70 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-maroon-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Offer Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-100 px-4 py-2 rounded-full mb-6 animate-pulse">
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-sm font-medium tracking-wide">{heroData.offer}</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6">
            <span className="block">Elegance</span>
            <span className="block text-amber-400">Woven in Every</span>
            <span className="block">Thread</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-stone-200 leading-relaxed mb-8 max-w-xl">
            {heroData.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-medium rounded-full group transition-all duration-300 shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50"
            >
              {heroData.ctaText}
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-full backdrop-blur-sm transition-all duration-300"
            >
              Explore Collection
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-stone-300">Unique Designs</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">50K+</p>
              <p className="text-sm text-stone-300">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.8★</p>
              <p className="text-sm text-stone-300">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
