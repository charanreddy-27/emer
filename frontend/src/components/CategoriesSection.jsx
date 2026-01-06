import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/mock';

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-maroon-800 font-medium tracking-widest uppercase text-sm mb-2">Browse By</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 mb-4">Shop Categories</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Explore our curated collection of traditional and contemporary fashion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <a 
              key={category.id}
              href={`#${category.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img 
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-950/40 to-transparent transition-all duration-500 group-hover:from-maroon-950/95"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-2">
                    {category.count}+ Products
                  </p>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">{category.name}</h3>
                  <p className="text-stone-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-white font-medium">
                    <span className="text-sm tracking-wide">Explore Collection</span>
                    <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
