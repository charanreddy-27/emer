import React, { useState } from 'react';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badge */}
        {product.badge && (
          <Badge className="absolute top-4 left-4 bg-maroon-800 text-white hover:bg-maroon-900 px-3 py-1">
            {product.badge}
          </Badge>
        )}

        {/* Discount Badge */}
        {product.discount > 0 && (
          <Badge className="absolute top-4 right-4 bg-emerald-600 text-white hover:bg-emerald-700 px-3 py-1">
            -{product.discount}%
          </Badge>
        )}

        {/* Wishlist Button */}
        <button 
          className={`absolute top-4 right-4 ${product.discount > 0 ? 'top-14' : 'top-4'} w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white/90 text-stone-700 hover:bg-white'} shadow-lg backdrop-blur-sm`}
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
        >
          <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>

        {/* Quick Actions */}
        <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button 
            className="flex-1 bg-white/95 hover:bg-white text-stone-900 backdrop-blur-sm shadow-lg gap-2 rounded-full"
          >
            <ShoppingBag size={16} />
            Add to Cart
          </Button>
          <Button 
            size="icon"
            variant="secondary"
            className="bg-white/95 hover:bg-white backdrop-blur-sm shadow-lg rounded-full"
          >
            <Eye size={16} />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 lg:p-5">
        {/* Category */}
        <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">{product.category}</p>
        
        {/* Name */}
        <h3 className="font-medium text-stone-900 text-lg mb-2 line-clamp-1 group-hover:text-maroon-800 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium text-stone-700">{product.rating}</span>
          </div>
          <span className="text-stone-400">•</span>
          <span className="text-sm text-stone-500">{product.reviews} reviews</span>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mb-3">
          <span className="text-xs px-2 py-1 bg-stone-100 text-stone-600 rounded-full">{product.fabric}</span>
          <span className="text-xs px-2 py-1 bg-stone-100 text-stone-600 rounded-full">{product.occasion}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-maroon-800">{formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-stone-400 line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
