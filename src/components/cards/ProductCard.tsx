"use client";

import { motion } from 'framer-motion';
import { Settings2, ArrowRight, Battery, Fuel, Warehouse } from 'lucide-react';
import { Product } from '@/lib/data/products';
import { Link } from '@/i18n/routing';

export function ProductCard({ product }: { product: Product }) {
  const getTypeIcon = () => {
    switch(product.type) {
      case 'electric': return <Battery className="w-4 h-4" />;
      case 'engine': return <Fuel className="w-4 h-4" />;
      case 'warehouse': return <Warehouse className="w-4 h-4" />;
    }
  };

  const getBadgeColor = () => {
    switch(product.type) {
      case 'electric': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'engine': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'warehouse': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
    }
  };

  return (
    <Link href={`/products/${product.id}`} className="block focus:outline-none">
      <motion.div 
        whileHover={{ y: -8 }}
        className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-full"
      >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          src={product.imageUrl} 
          alt={product.model}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${getBadgeColor()}`}>
          {getTypeIcon()} {product.type}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{product.model}</h3>
        <p className="text-sm font-semibold text-red-600 dark:text-red-500 mb-4 tracking-tight uppercase">
          CAPACITY: {product.capacity}
        </p>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
          {product.description}
        </p>
        
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
          <button className="flex items-center text-sm font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors">
            View Details <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="p-2 rounded-full bg-slate-50 hover:bg-red-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-400 hover:text-red-600 transition-colors">
            <Settings2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      </motion.div>
    </Link>
  );
}
