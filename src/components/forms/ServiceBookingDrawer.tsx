"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Wrench, Clock } from 'lucide-react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export function ServiceBookingDrawer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isOpen = searchParams.get('booking') === 'open';

  const closeDrawer = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('booking');
    const newParams = params.toString() ? `?${params.toString()}` : '';
    router.replace(`${pathname}${newParams}`, { scroll: false });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-[110] w-full max-w-md bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-transparent bg-slate-900 text-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-600 rounded-lg">
                   <Clock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-black tracking-tight">Dispatch Request</h2>
              </div>
              <button onClick={closeDrawer} className="p-2 rounded-full hover:bg-slate-800 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto flex-grow hide-scrollbar">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed">
                Our technicians are on standby. Detail your machinery scope below and we will confirm your <strong className="text-red-600 dark:text-red-500">Next-Day Dispatch</strong> scheduling immediately.
              </p>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); closeDrawer(); }}>
                <div>
                  <label className="block text-sm font-bold text-slate-800 dark:text-slate-200 mb-2 uppercase tracking-wider text-xs">Machine Brand / Model</label>
                  <input autoFocus type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900 dark:text-white" placeholder="e.g. Toyota 8FD30" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 dark:text-slate-200 mb-2 uppercase tracking-wider text-xs">Site Location (Province)</label>
                  <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900 dark:text-white" placeholder="Chonburi, Amata City" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 dark:text-slate-200 mb-2 uppercase tracking-wider text-xs">Priority Level</label>
                  <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900 dark:text-white appearance-none cursor-pointer">
                    <option>Standard PM Check</option>
                    <option>Breakdown / Machine Down (Emergency)</option>
                    <option>Parts Inquiry Only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 dark:text-slate-200 mb-2 uppercase tracking-wider text-xs">Direct Contact Number</label>
                  <input type="tel" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900 dark:text-white" placeholder="08X-XXX-XXXX" required />
                </div>
              </form>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
              <button 
                onClick={(e) => { e.preventDefault(); closeDrawer(); }}
                className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 py-4 rounded-2xl font-black text-lg transition-transform transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-xl"
              >
                <Wrench className="w-5 h-5"/> Request Technician
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
