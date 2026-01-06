import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import ProductCard from './ProductCard';
import { featuredProducts } from '../data/mock';

const FeaturedProducts = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Sarees', 'Dress Materials', 'T-Shirts'];

  const filteredProducts = activeFilter === 'All' 
    ? featuredProducts 
    : featuredProducts.filter(p => p.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <p className="text-maroon-800 font-medium tracking-widest uppercase text-sm mb-2">Curated For You</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 mb-4">Featured Products</h2>
            <p className="text-stone-600 max-w-xl">
              Handpicked favorites from our collection, loved by thousands of customers
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex gap-2 mt-6 lg:mt-0 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                className={`rounded-full px-5 whitespace-nowrap transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-maroon-800 hover:bg-maroon-900 text-white' 
                    : 'border-stone-300 text-stone-700 hover:border-maroon-800 hover:text-maroon-800'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-maroon-800 text-maroon-800 hover:bg-maroon-800 hover:text-white px-8 rounded-full group transition-all duration-300"
          >
            View All Products
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
