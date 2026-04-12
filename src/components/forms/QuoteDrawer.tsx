"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export function QuoteDrawer({ productName }: { productName?: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isOpen = searchParams.get('quote') === 'open';

  const closeDrawer = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('quote');
    const newParams = params.toString() ? `?${params.toString()}` : '';
    router.replace(`${pathname}${newParams}`, { scroll: false });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-[110] w-full max-w-md bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Request Formal Quote</h2>
              <button 
                onClick={closeDrawer}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-grow hide-scrollbar">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 font-medium">
                Please provide your contact details. Our technical sales team will typically call you within 15 minutes regarding the <strong className="text-slate-900 dark:text-white">{productName || 'equipment'}</strong>.
              </p>

              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Capture logic will run here."); closeDrawer(); }}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider text-xs">Full Name</label>
                  <input autoFocus type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider text-xs">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="ACME Logistics Co." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider text-xs">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="08X-XXX-XXXX" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider text-xs">Additional Requirements (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow resize-none text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="Delivery timeline, capacity variations, etc." />
                </div>
              </form>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <button 
                onClick={(e) => { e.preventDefault(); closeDrawer(); }}
                className="w-full bg-red-600 hover:bg-red-500 text-white py-4 rounded-xl font-bold text-lg transition-transform transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg hover:shadow-red-500/25"
              >
                <Send className="w-5 h-5"/> Send Inquiry
              </button>
              <p className="text-center text-xs text-slate-500 font-medium mt-4">Safe & secure. We never share your data.</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
