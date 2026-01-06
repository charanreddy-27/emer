import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-maroon-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-maroon-600/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail size={36} className="text-amber-400" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Join Our Style Circle
          </h2>
          <p className="text-stone-300 text-lg mb-8">
            Subscribe to get exclusive offers, early access to new arrivals, and style inspiration delivered to your inbox.
          </p>

          {/* Incentive Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-amber-200 text-sm font-medium">Get 15% off your first order!</span>
          </div>

          {/* Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                <Input 
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-6 bg-white/10 border-white/20 text-white placeholder:text-stone-400 rounded-full focus:bg-white/15 focus:border-amber-500 transition-all"
                  required
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-8 py-6 rounded-full group transition-all duration-300 shadow-lg shadow-amber-500/30"
              >
                Subscribe
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 bg-emerald-500/20 backdrop-blur-sm px-6 py-4 rounded-full max-w-lg mx-auto">
              <CheckCircle size={24} className="text-emerald-400" />
              <span className="text-emerald-200 font-medium">Welcome to the family! Check your inbox for your discount code.</span>
            </div>
          )}

          {/* Trust Text */}
          <p className="text-stone-400 text-sm mt-6">
            No spam, unsubscribe anytime. Read our <a href="#privacy" className="text-amber-400 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
