"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Settings2, Zap, Fuel, Warehouse, Loader2, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function EquipmentFinder() {
  const [activeType, setActiveType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async (type: string) => {
    setActiveType(type);
    setLoading(true);
    try {
      const res = await fetch(`/api/equipment?type=${type}`);
      const data = await res.json();
      setResults(data.equipment || []);
    } catch (e) {
      console.error('Failed to search', e);
    } finally {
      setLoading(false);
    }
  };

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button 
              onClick={() => handleSearch('electric')}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all group ${
                activeType === 'electric' 
                  ? 'border-red-600 bg-red-50 dark:bg-red-900/20' 
                  : 'border-slate-100 dark:border-slate-800 hover:border-red-600 hover:bg-red-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <Zap className={`w-8 h-8 mb-3 ${activeType === 'electric' ? 'text-red-600' : 'text-slate-400 group-hover:text-red-600'}`} />
              <span className="font-bold text-slate-700 dark:text-slate-200">Electric Forklifts</span>
            </button>
            <button 
              onClick={() => handleSearch('engine')}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all group ${
                activeType === 'engine' 
                  ? 'border-red-600 bg-red-50 dark:bg-red-900/20' 
                  : 'border-slate-100 dark:border-slate-800 hover:border-red-600 hover:bg-red-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <Fuel className={`w-8 h-8 mb-3 ${activeType === 'engine' ? 'text-red-600' : 'text-slate-400 group-hover:text-red-600'}`} />
              <span className="font-bold text-slate-700 dark:text-slate-200">Engine Forklifts</span>
            </button>
            <button 
              onClick={() => handleSearch('warehouse')}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all group ${
                activeType === 'warehouse' 
                  ? 'border-red-600 bg-red-50 dark:bg-red-900/20' 
                  : 'border-slate-100 dark:border-slate-800 hover:border-red-600 hover:bg-red-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <Warehouse className={`w-8 h-8 mb-3 ${activeType === 'warehouse' ? 'text-red-600' : 'text-slate-400 group-hover:text-red-600'}`} />
              <span className="font-bold text-slate-700 dark:text-slate-200">Warehouse Tools</span>
            </button>
          </div>

          <AnimatePresence>
            {activeType && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                  {loading ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <Loader2 className="w-10 h-10 text-red-600 animate-spin mb-4" />
                      <p className="text-slate-500 font-medium">Scanning live inventory...</p>
                    </div>
                  ) : results.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {results.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <div className="h-40 bg-slate-100 dark:bg-slate-800 relative">
                            {/* Fallback image if no URL provided */}
                            <img 
                              src={item.image_url || `https://via.placeholder.com/400x300/1e293b/ffffff?text=${encodeURIComponent(item.model)}`} 
                              alt={item.model}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                              {item.capacity}
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">{item.model}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                              {item.description}
                            </p>
                            <Link 
                              href={`/products/${item.type === 'engine' ? 'engine-forklifts' : item.type === 'electric' ? 'electric-forklifts' : 'warehouse-equipment'}`} 
                              className="flex items-center text-red-600 font-bold hover:text-red-700 text-sm gap-1"
                            >
                              Request Quote <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-slate-500">No equipment found matching this category.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
}
