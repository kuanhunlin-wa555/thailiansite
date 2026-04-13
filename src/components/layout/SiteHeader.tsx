import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { Phone, MapPin } from 'lucide-react';

export function SiteHeader() {
  const t = useTranslations('Navigation');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-20 items-center px-4 md:px-8 justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 group">
          <img 
            src="/images/logo.png" 
            alt="Thailian Logo" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105 origin-left" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <Link href="/products" className="transition-colors hover:text-red-600">{t('products')}</Link>
          <Link href="/rentals" className="transition-colors hover:text-red-600">{t('rentals')}</Link>
          <Link href="/after-sales" className="transition-colors hover:text-red-600">{t('afterSales')}</Link>
          <Link href="/about" className="transition-colors hover:text-red-600">{t('about')}</Link>
          <Link href="/contact" className="transition-colors hover:text-red-600">{t('contact')}</Link>
        </nav>

        {/* Tools Section */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm text-slate-500">
            <Phone className="w-4 h-4 text-red-600" />
            <a href="tel:027473999" className="font-bold text-slate-800 dark:text-slate-200 hover:text-red-600 transition-colors">
              02-747-3999
            </a>
          </div>
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
