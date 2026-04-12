import { useTranslations } from 'next-intl';
import { ShieldCheck, Truck, Clock, HandCoins, CheckCircle2 } from 'lucide-react';

export default function RentalsPage() {
  const t = useTranslations('RentalServices');
  const g = useTranslations('Global');

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      
      {/* Hero Section */}
      <section className="relative w-full py-24 lg:py-32 flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 bg-[url('/images/hero_forklift.png')] bg-cover bg-center bg-fixed opacity-20" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-red-950/80 to-slate-900/90 mix-blend-multiply" />
        
        <div className="container relative z-10 px-4 md:px-8 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 drop-shadow-md">
            {t('subtitle')}
          </p>
          <button className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-red-500/25">
            {g('ctaRental')}
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="container px-4 md:px-8 mx-auto text-center max-w-3xl">
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light">
            {t('intro')}
          </p>
        </div>
      </section>

      {/* Rental Programs */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative z-10 px-4 md:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              {t('programsTitle')}
            </h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-red-100 dark:hover:border-red-900/50">
              <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mb-8 text-red-600 dark:text-red-400">
                <Truck className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('longTermTitle')}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('longTermDesc')}</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-red-100 dark:hover:border-red-900/50">
              <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mb-8 text-red-600 dark:text-red-400">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('monthlyTitle')}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('monthlyDesc')}</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-red-100 dark:hover:border-red-900/50">
              <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mb-8 text-red-600 dark:text-red-400">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('dailyTitle')}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('dailyDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-red-600 rounded-[3rem] rotate-3 opacity-20 transform origin-bottom-right" />
              
              {/* Note: In a real app we'd use next/image, but since this is an empty placeholder workspace, rendering an atmospheric div or placeholder img */}
              <div className="relative z-10 rounded-3xl shadow-2xl object-cover aspect-square bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero_forklift.png')] bg-cover bg-center mix-blend-luminosity opacity-40 hover:opacity-60 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <h3 className="relative z-10 text-3xl font-black text-white px-8 text-center drop-shadow-lg">Thailand's Largest Rental Fleet</h3>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                {t('advantageTitle')}
              </h2>
              
              <ul className="space-y-10">
                <li className="flex gap-6">
                  <div className="mt-1">
                    <CheckCircle2 className="w-10 h-10 text-red-500 shrink-0 drop-shadow-md" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">{t('freeMaintTitle')}</h4>
                    <p className="text-lg text-slate-400 leading-relaxed">{t('freeMaintDesc')}</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="mt-1">
                    <CheckCircle2 className="w-10 h-10 text-red-500 shrink-0 drop-shadow-md" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">{t('replacementsTitle')}</h4>
                    <p className="text-lg text-slate-400 leading-relaxed">{t('replacementsDesc')}</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="mt-1">
                    <HandCoins className="w-10 h-10 text-red-500 shrink-0 drop-shadow-md" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">{t('noHiddenTitle')}</h4>
                    <p className="text-lg text-slate-400 leading-relaxed">{t('noHiddenDesc')}</p>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

    </main>
  );
}
