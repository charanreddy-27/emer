import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import ProductCard from './ProductCard';
import { newArrivals } from '../data/mock';

const NewArrivals = () => {
  return (
    <section className="py-20 bg-white" id="new-arrivals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <p className="text-emerald-700 font-medium tracking-widest uppercase text-sm mb-2">Just Landed</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 mb-4">New Arrivals</h2>
            <p className="text-stone-600 max-w-xl">
              Be the first to explore our latest collection fresh from the loom
            </p>
          </div>
          
          <Button 
            variant="outline"
            className="mt-6 lg:mt-0 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white px-6 rounded-full group transition-all duration-300 w-fit"
          >
            View All New
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {newArrivals.map((product, index) => (
            <div 
              key={product.id}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
