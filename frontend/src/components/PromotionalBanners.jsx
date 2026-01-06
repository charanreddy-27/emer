import React from 'react';
import { ArrowRight, Sparkles, Gift } from 'lucide-react';
import { Button } from './ui/button';

const PromotionalBanners = () => {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Festival Sale Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-maroon-900 to-maroon-800 p-8 lg:p-10 min-h-[320px] group">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-maroon-600/30 rounded-full blur-2xl"></div>
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <Sparkles size={16} className="text-amber-400" />
                  <span className="text-amber-200 text-sm font-medium">Limited Time Offer</span>
                </div>
                <h3 className="font-serif text-3xl lg:text-4xl text-white mb-2">Festival Sale</h3>
                <p className="text-4xl lg:text-5xl font-bold text-amber-400 mb-4">Up to 50% Off</p>
                <p className="text-stone-300 max-w-sm">Celebrate in style with our exclusive festive collection of sarees and dress materials</p>
              </div>
              <Button 
                className="mt-6 w-fit bg-amber-500 hover:bg-amber-600 text-maroon-950 font-semibold px-6 rounded-full group/btn transition-all duration-300"
              >
                Shop Festival
                <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* New Arrivals Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-800 p-8 lg:p-10 min-h-[320px] group">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-600/30 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <Gift size={16} className="text-emerald-300" />
                  <span className="text-emerald-200 text-sm font-medium">Just Landed</span>
                </div>
                <h3 className="font-serif text-3xl lg:text-4xl text-white mb-2">New Season</h3>
                <p className="text-4xl lg:text-5xl font-bold text-emerald-300 mb-4">Fresh Arrivals</p>
                <p className="text-stone-300 max-w-sm">Discover the latest trends in ethnic and contemporary wear for this season</p>
              </div>
              <Button 
                className="mt-6 w-fit bg-emerald-400 hover:bg-emerald-500 text-emerald-950 font-semibold px-6 rounded-full group/btn transition-all duration-300"
              >
                Explore New
                <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Combo Deal Strip */}
        <div className="mt-8 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
              <Gift size={28} className="text-amber-400" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">Combo Deal of the Week</h4>
              <p className="text-stone-400">Buy any 2 sarees & get a dress material FREE!</p>
            </div>
          </div>
          <Button 
            className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-8 rounded-full whitespace-nowrap"
          >
            Grab Deal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanners;
