"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('HomePage');

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Graphic Simulation */}
      <div className="absolute inset-0 z-0 bg-[url('/images/hero_forklift.png')] bg-cover bg-[center_60%]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Native Logo */}
          <div className="bg-white p-3 rounded-2xl mb-8 shadow-2xl mx-auto w-fit">
            <img 
              src="/images/logo.png" 
              alt="Thailian Logo" 
              className="h-14 md:h-20 w-auto object-contain" 
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 max-w-2xl mx-auto drop-shadow-md">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-red-500/25">
              {t('heroCtaRentals')} <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all">
              {t('heroCtaEquipment')}
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-semibold">Scroll to Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
