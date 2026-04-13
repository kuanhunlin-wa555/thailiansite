"use client";

import { Link } from '@/i18n/routing';
import { Factory, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export function MegaFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t-[8px] border-red-600 text-slate-300">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Brand & HQ */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center transform -rotate-6">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight uppercase">Thailian</span>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed">
              Advancing industrial operations through premium heavy machinery and relentless after-sale engineering support.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>123 Industrial Estate Road, Bangna, Bangkok 10260, Thailand</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <span>+66 2 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <span>sales@thailian.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Equipment</h4>
            <ul className="space-y-4 font-medium text-slate-400">
              <li><Link href="/products/engine-forklifts" className="hover:text-red-500 transition-colors">Engine Forklifts</Link></li>
              <li><Link href="/products/electric-forklifts" className="hover:text-red-500 transition-colors">Electric Li-ion Forklifts</Link></li>
              <li><Link href="/products/warehouse-equipment" className="hover:text-red-500 transition-colors">Warehouse Equipment</Link></li>
              <li><Link href="/products/parts-accessories" className="hover:text-red-500 transition-colors">Parts & Accessories</Link></li>
              <li><Link href="/products/pre-owned" className="hover:text-red-500 transition-colors">Pre-Owned Inventory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Services & Company</h4>
            <ul className="space-y-4 font-medium text-slate-400">
              <li><Link href="/rentals" className="hover:text-red-500 transition-colors">Rental Solutions</Link></li>
              <li><Link href="/after-sales" className="hover:text-red-500 transition-colors">After Sale Services</Link></li>
              <li><Link href="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-red-500 transition-colors">Contact & Support</Link></li>
            </ul>
          </div>

          {/* Newsletter Lead Capture */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Stay Informed</h4>
            <p className="text-slate-400 font-medium mb-6 leading-relaxed">
              Get the latest updates on heavy machinery technology and exclusive inventory rollouts.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="Enter your email"
              />
              <button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors group">
                Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-500">
          <p>© {currentYear} Thailian Industry Company Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-red-500 transition-colors border-b border-transparent hover:border-red-500 pb-0.5">Privacy Policy</Link>
            <Link href="#" className="hover:text-red-500 transition-colors border-b border-transparent hover:border-red-500 pb-0.5">Terms of Service</Link>
            <Link href="#" className="hover:text-red-500 transition-colors border-b border-transparent hover:border-red-500 pb-0.5">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
