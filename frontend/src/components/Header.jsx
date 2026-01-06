import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { brandInfo, categories } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount] = useState(2);
  const [wishlistCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      {/* Top Bar */}
      <div className="bg-maroon-900 text-white py-2 px-4 text-center text-sm font-medium tracking-wide">
        <span className="animate-pulse">✨</span> Free Shipping on Orders Above ₹999 | Use Code: <span className="font-bold">Godha30</span> for 30% Off
      </div>
      
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-stone-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-maroon-900 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-xl font-bold">V</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-serif text-2xl font-semibold text-maroon-900 tracking-tight">{brandInfo.name}</h1>
                <p className="text-xs text-stone-500 tracking-widest uppercase -mt-1">Fashion Brand</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {categories.map((category) => (
              <a 
                key={category.id}
                href={`#${category.name.toLowerCase()}`}
                className="text-stone-700 hover:text-maroon-800 font-medium text-sm tracking-wide uppercase transition-colors relative group"
              >
                {category.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon-800 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#new-arrivals"
              className="text-stone-700 hover:text-maroon-800 font-medium text-sm tracking-wide uppercase transition-colors relative group"
            >
              New Arrivals
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#sale"
              className="text-red-600 hover:text-red-700 font-semibold text-sm tracking-wide uppercase transition-colors"
            >
              Sale
            </a>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white shadow-lg rounded-full p-1 animate-in slide-in-from-right">
                  <Input 
                    type="text" 
                    placeholder="Search products..." 
                    className="w-48 sm:w-64 border-none focus:ring-0 rounded-full bg-stone-50"
                    autoFocus
                  />
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="rounded-full"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X size={18} />
                  </Button>
                </div>
              ) : (
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full hover:bg-stone-100"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search size={20} className="text-stone-700" />
                </Button>
              )}
            </div>

            {/* Wishlist */}
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-stone-100 relative hidden sm:flex">
              <Heart size={20} className="text-stone-700" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-maroon-800 text-white text-xs rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Button>

            {/* User */}
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-stone-100 hidden sm:flex">
              <User size={20} className="text-stone-700" />
            </Button>

            {/* Cart */}
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-stone-100 relative">
              <ShoppingBag size={20} className="text-stone-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-maroon-800 text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 animate-in slide-in-from-top">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {categories.map((category) => (
              <a 
                key={category.id}
                href={`#${category.name.toLowerCase()}`}
                className="block py-3 px-4 text-stone-700 hover:text-maroon-800 hover:bg-stone-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </a>
            ))}
            <a 
              href="#new-arrivals"
              className="block py-3 px-4 text-stone-700 hover:text-maroon-800 hover:bg-stone-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </a>
            <a 
              href="#sale"
              className="block py-3 px-4 text-red-600 hover:bg-red-50 rounded-lg font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sale
            </a>
            <div className="pt-4 border-t border-stone-200 flex gap-4">
              <Button variant="outline" className="flex-1 gap-2">
                <Heart size={18} /> Wishlist ({wishlistCount})
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <User size={18} /> Account
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
