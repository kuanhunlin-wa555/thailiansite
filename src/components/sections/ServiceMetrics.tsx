"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, PackageOpen } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'Certified Technicians',
    description: 'Expertly trained engineers ready to deploy nationwide.',
    icon: HardHat,
    value: '300+'
  },
  {
    id: 2,
    title: 'Next-Day Rapid Dispatch',
    description: 'Guaranteed technician on-site by the next day of contact.',
    icon: ShieldCheck,
    value: '24HR'
  },
  {
    id: 3,
    title: 'Multi-Brand Parts Depot',
    description: 'Deep inventory stock ensuring your fleets stay operational.',
    icon: PackageOpen,
    value: '10k+'
  }
];

export function ServiceMetrics() {
  return (
    <section className="py-24 bg-red-600 text-white relative overflow-hidden shadow-inner">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center backdrop-blur-md mb-8 border border-white/20 shadow-xl">
                <stat.icon className="w-10 h-10 text-white drop-shadow-md" />
              </div>
              <h3 className="text-6xl font-black mb-4 tracking-tighter drop-shadow-sm">{stat.value}</h3>
              <div className="text-xl font-bold mb-3 uppercase tracking-widest text-red-100">{stat.title}</div>
              <p className="text-red-100/80 font-medium max-w-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
