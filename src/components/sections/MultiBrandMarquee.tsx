"use client";

import { motion } from 'framer-motion';

const brands = [
  "TOYOTA", "KOMATSU", "NISSAN", "MITSUBISHI", "CATERPILLAR", "TCM", "HYSTER", "YALE", "LINDE"
];

export function MultiBrandMarquee() {
  return (
    <div className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 overflow-hidden relative flex flex-col items-center">
      <p className="font-bold text-slate-400 dark:text-slate-500 mb-10 uppercase tracking-[0.3em] text-xs z-10 flex items-center gap-4 before:h-px before:w-12 before:bg-slate-300 dark:before:bg-slate-700 after:h-px after:w-12 after:bg-slate-300 dark:after:bg-slate-700">
        Fully Equipped to Service All Major Manufacturers
      </p>
      
      {/* Gradient Fades for Smooth Entrance/Exit */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-[200%]">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {/* Quadruple array to create seamless long loop without snapping */}
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="mx-16 text-4xl md:text-6xl font-black text-slate-100 dark:text-slate-800/50 tracking-tighter hover:text-red-600 dark:hover:text-red-500 transition-colors duration-300 cursor-default">
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
