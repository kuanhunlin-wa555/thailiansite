"use client";

import { motion } from 'framer-motion';

const timelineEvents = [
  { year: "1996", title: "Company Founded", description: "First headquarters and primary warehouse established to service local distribution." },
  { year: "2008", title: "ISO 9001 Certification", description: "Achieved international quality management validation, standardizing our service protocols." },
  { year: "2014", title: "1,000+ Active Contracts", description: "Hit a massive milestone managing preventive maintenance across over a thousand distinct fleets." },
  { year: "2023", title: "Li-ion Modernization", description: "Launched vast distribution networks focused on zero-emission, zero-maintenance lithium-ion fleets." },
  { year: "Present", title: "Nationwide Hub Expansion", description: "Currently operating 19 service hubs nationwide, capable of next-day diagnostic response." }
];

export function LegacyTimeline() {
  return (
    <section className="w-full py-24 bg-white dark:bg-slate-950 overflow-hidden relative border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-8 mb-20 relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
          30 YEARS OF <span className="text-red-600">RELIABILITY</span>
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
          Three decades of engineering excellence. Our legacy ensures your future.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative">
        {/* Core Vertical Center Guide Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-ml-0.5 bg-slate-200 dark:bg-slate-800 rounded-full" />
        
        <div className="space-y-12">
          {timelineEvents.map((event, i) => {
            // Alternate sides on desktop, stack left on mobile
            const isEven = i % 2 === 0;
            
            return (
              <motion.div 
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot overlapping the center line */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-red-600 border-4 border-white dark:border-slate-950 shadow-lg z-10 flex items-center justify-center -translate-x-[14px] md:-translate-x-1/2">
                   <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                
                {/* Content Card */}
                <div className={`w-full pl-20 md:pl-0 md:w-5/12 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-xl hover:border-red-500/50 transition-all duration-300 relative group`}>
                    <h3 className="text-4xl font-black text-red-600 mb-2 group-hover:scale-105 transition-transform origin-left">{event.year}</h3>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{event.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {event.description}
                    </p>
                  </div>
                </div>
                
                {/* Visual Spacer to maintain grid flex */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
