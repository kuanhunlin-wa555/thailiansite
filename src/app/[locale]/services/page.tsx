import { ServiceMetrics } from '@/components/sections/ServiceMetrics';
import { MultiBrandMarquee } from '@/components/sections/MultiBrandMarquee';
import { ServiceBookingDrawer } from '@/components/forms/ServiceBookingDrawer';
import { Suspense } from 'react';
import { Link } from '@/i18n/routing';
import { Wrench, PhoneCall } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
        
        {/* Service Hero */}
        <section className="w-full py-24 md:py-32 px-4 md:px-8 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
          
          <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            
            <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-bold uppercase tracking-widest text-sm rounded-full shadow-sm">
                After-Sale Network
              </div>
              <h1 className="text-5xl md:text-[5rem] font-black text-slate-900 dark:text-white tracking-tighter leading-[1.05]">
                FLEET UPTIME &<br/><span className="text-red-600">PREVENTIVE CARE</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-xl leading-relaxed">
                Forget generic maintenance contracts. We focus exclusively on maximizing your operational hours and deploying rapid responses to mechanical failures.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="?booking=open" scroll={false} className="bg-red-600 hover:bg-red-500 text-white px-8 py-5 rounded-2xl font-black text-lg transition-transform transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-xl hover:shadow-red-500/25">
                  <Wrench className="w-5 h-5"/> Schedule Dispatch
                </Link>
                <button className="bg-white hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900 text-slate-900 dark:text-white border-[3px] border-slate-200 dark:border-slate-800 px-8 py-5 rounded-2xl font-black text-lg transition-transform transform hover:scale-[1.02] flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5"/> Emergency Hotline
                </button>
              </div>
            </div>
            
            <div className="flex-1 w-full relative">
              <div className="aspect-[4/5] bg-slate-200 dark:bg-slate-800 rounded-[3rem] shadow-2xl overflow-hidden relative transform rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white dark:border-slate-950">
                <div className="absolute inset-0 bg-red-900/10 dark:bg-red-900/30 mix-blend-multiply z-10 transition-opacity hover:opacity-0 duration-300"></div>
                <img src="/images/service_technician.png" alt="Technician" className="w-full h-full object-cover" />
              </div>
              {/* Decorative Accent */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-red-600 rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
            </div>
            
          </div>
        </section>

        {/* Brand Capabilities Scroll */}
        <MultiBrandMarquee />

        {/* Core Capabilities Footer Banner */}
        <ServiceMetrics />

        <Suspense fallback={null}>
          <ServiceBookingDrawer />
        </Suspense>
      </main>
    </>
  );
}
