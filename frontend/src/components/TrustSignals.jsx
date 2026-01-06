import React from 'react';
import { Shield, Truck, RotateCcw, CreditCard } from 'lucide-react';
import { trustSignals } from '../data/mock';

const iconMap = {
  Shield,
  Truck,
  RotateCcw,
  CreditCard
};

const TrustSignals = () => {
  return (
    <section className="py-16 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustSignals.map((signal, index) => {
            const IconComponent = iconMap[signal.icon];
            return (
              <div 
                key={signal.id}
                className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-stone-50 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-maroon-800 group-hover:scale-110 transition-all duration-300">
                  <IconComponent 
                    size={28} 
                    className="text-maroon-800 group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="font-semibold text-stone-900 text-lg mb-1">{signal.title}</h3>
                <p className="text-stone-500 text-sm">{signal.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
