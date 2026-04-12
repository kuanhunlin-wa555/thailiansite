"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useState } from 'react';

const branches = [
  {
    id: 'bkk',
    name: 'Bangkok Head Office',
    address: '279 Srinakarin Road, Nong Bon, Prawet',
    phone: '02-747-3999',
    hours: 'Mon-Sat: 08:00 - 17:00',
    top: '65%',
    left: '48%',
  },
  {
    id: 'ryg',
    name: 'Rayong Branch',
    address: 'Eastern Seaboard Industrial Estate',
    phone: '038-123-456',
    hours: 'Mon-Sat: 08:00 - 17:00',
    top: '75%',
    left: '55%',
  },
  {
    id: 'cmi',
    name: 'Chiang Mai Branch',
    address: 'Northern Industrial Park (Placeholder)',
    phone: '053-987-654',
    hours: 'Mon-Sat: 08:00 - 17:00',
    top: '35%',
    left: '35%',
  },
  {
    id: 'kkn',
    name: 'Khon Kaen Branch',
    address: 'Isan Business Center (Placeholder)',
    phone: '043-456-789',
    hours: 'Mon-Sat: 08:00 - 17:00',
    top: '50%',
    left: '60%',
  }
];

export function BranchMap() {
  const [activeBranch, setActiveBranch] = useState<string | null>(null);

  // t('title') usage will go here when adding to translation JSON, omitting for now to avoid errors

  return (
    <section className="w-full py-24 px-4 md:px-8 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
             NATIONWIDE <span className="text-red-600">INFRASTRUCTURE</span>
           </h2>
           <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
             With 19 branches strategically located across the country, we guarantee rapid service deployment, preventative maintenance, and comprehensive after-sale coverage anywhere you operate.
           </p>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto h-[700px] bg-white rounded-3xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 flex items-center justify-center p-8 shadow-2xl overflow-visible">
          {/* Stylized Abstract Map Background */}
          
          <svg className="absolute inset-0 w-full h-full text-slate-100 dark:text-slate-800/30 rounded-3xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Extremely abstract geographical anchor just to give spatial context over the grid */}
            <path d="M300,100 Q400,200 450,400 T450,600 Q400,550 350,500 T300,300 Z" fill="currentColor" className="text-slate-50 dark:text-slate-800/40" />
          </svg>

          {/* Interactive Plot Nodes */}
          {branches.map((branch) => (
            <div 
              key={branch.id}
              className="absolute z-10"
              style={{ top: branch.top, left: branch.left }}
              onMouseEnter={() => setActiveBranch(branch.id)}
              onMouseLeave={() => setActiveBranch(null)}
            >
              {/* Ping Ring */}
              <div className="absolute -left-3 -top-3 w-6 h-6 flex items-center justify-center pointer-events-none">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-red-700 border-[3px] border-white dark:border-slate-900 shadow-lg transform transition-transform hover:scale-[1.3] pointer-events-auto cursor-pointer"></span>
              </div>

              {/* Hover Popover Card */}
              <AnimatePresence>
                {activeBranch === branch.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: -20, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-5 pointer-events-none"
                  >
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 dark:bg-slate-900/95 border-b border-r border-slate-200 dark:border-slate-800 rotate-45 transform"></div>
                    
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{branch.name}</h3>
                    
                    <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                        <span className="leading-tight">{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-red-600 shrink-0" />
                        <span className="font-semibold">{branch.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{branch.hours}</span>
                      </div>
                    </div>
                    
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-center gap-2 text-sm font-bold text-red-600 dark:text-red-500">
                        <Navigation className="w-4 h-4" /> Get Directions
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
