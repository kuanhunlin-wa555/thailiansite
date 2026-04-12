"use client";

import { motion } from 'framer-motion';
import { Search, Settings2, Zap, Fuel, Warehouse } from 'lucide-react';

export function EquipmentFinder() {
  return (
    <section className="w-full py-12 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl relative -mt-24 z-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-3">
              <Search className="text-red-600" />
              Find Your Equipment
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-red-600 dark:hover:border-red-500 hover:bg-red-50 dark:hover:bg-slate-800/50 transition-all group">
              <Zap className="w-8 h-8 text-slate-400 group-hover:text-red-600 mb-3" />
              <span className="font-bold text-slate-700 dark:text-slate-200">Electric Forklifts</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-red-600 dark:hover:border-red-500 hover:bg-red-50 dark:hover:bg-slate-800/50 transition-all group">
              <Fuel className="w-8 h-8 text-slate-400 group-hover:text-red-600 mb-3" />
              <span className="font-bold text-slate-700 dark:text-slate-200">Engine Forklifts</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-red-600 dark:hover:border-red-500 hover:bg-red-50 dark:hover:bg-slate-800/50 transition-all group">
              <Warehouse className="w-8 h-8 text-slate-400 group-hover:text-red-600 mb-3" />
              <span className="font-bold text-slate-700 dark:text-slate-200">Warehouse Tools</span>
            </button>
            <div className="flex flex-col justify-center">
              <button className="w-full h-full bg-red-700 hover:bg-red-600 text-white font-bold rounded-2xl text-lg transition-colors flex items-center justify-center gap-2 min-h-[100px]">
                Search <Settings2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
