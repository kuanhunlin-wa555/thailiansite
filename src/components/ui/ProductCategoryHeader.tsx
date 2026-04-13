import { useTranslations } from 'next-intl';

interface ProductCategoryHeaderProps {
  titleKey: string;
  subtitleKey: string;
  introKey: string;
  namespace: string;
  imagePath: string;
}

export function ProductCategoryHeader({ titleKey, subtitleKey, introKey, namespace, imagePath }: ProductCategoryHeaderProps) {
  const t = useTranslations(namespace);
  const g = useTranslations('Global');

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-30 mix-blend-luminosity" 
          style={{ backgroundImage: `url(${imagePath})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        
        <div className="container relative z-10 px-4 md:px-8 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight drop-shadow-lg">
            {t(titleKey)}
          </h1>
          <p className="text-xl md:text-2xl text-red-500 font-bold mb-10 tracking-wide uppercase">
            {t(subtitleKey)}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-red-500/25">
              {g('ctaQuote')}
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              {g('ctaDetails')}
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="container px-4 md:px-8 mx-auto text-center max-w-4xl">
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light">
            {t(introKey)}
          </p>
        </div>
      </section>
    </>
  );
}
