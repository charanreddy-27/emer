import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail,
  CreditCard,
  Shield,
  Truck
} from 'lucide-react';
import { brandInfo, footerLinks } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-maroon-900 font-serif text-xl font-bold">V</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-white">{brandInfo.name}</h3>
                <p className="text-xs text-stone-400 tracking-widest uppercase">Fashion Brand</p>
              </div>
            </div>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Discover the finest collection of traditional sarees, premium dress materials, and contemporary T-shirts crafted with love and precision.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors group">
                <Instagram size={18} className="text-stone-400 group-hover:text-stone-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors group">
                <Facebook size={18} className="text-stone-400 group-hover:text-stone-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors group">
                <Twitter size={18} className="text-stone-400 group-hover:text-stone-900" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-stone-400">
                  123 Fashion Street, Textile Hub<br />Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-stone-400 hover:text-amber-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 flex-shrink-0" />
                <a href="mailto:hello@vastra.com" className="text-stone-400 hover:text-amber-400 transition-colors">
                  hello@vastra.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment & Security Strip */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Trust Badges */}
            <div className="flex items-center gap-6 text-stone-500 text-sm">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-emerald-500" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-emerald-500" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard size={16} className="text-emerald-500" />
                <span>Multiple Payment Options</span>
              </div>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <span className="text-stone-500 text-sm mr-2">We Accept:</span>
              <div className="flex gap-2">
                {['Visa', 'MC', 'UPI', 'GPay'].map((payment) => (
                  <div key={payment} className="w-12 h-8 bg-stone-800 rounded flex items-center justify-center text-xs text-stone-400 font-medium">
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
            <p>© {currentYear} Vastra Fashion Brand. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
