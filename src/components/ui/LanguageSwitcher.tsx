"use client";

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';

const locales = [
  { code: 'th', label: 'ไทย' },
  { code: 'en', label: 'ENG' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' }
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-red-600 p-2 rounded-md transition-colors focus:outline-none">
        <Globe className="w-4 h-4" />
        <span className="uppercase">{locale}</span>
      </button>
      
      {/* Dropdown Menu with glass UI */}
      <div className="absolute right-0 top-full mt-2 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right scale-95 group-hover:scale-100 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl overflow-hidden z-50">
        <div className="py-1 flex flex-col">
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => switchLocale(l.code)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-red-50 dark:hover:bg-slate-800 ${
                locale === l.code ? 'text-red-600 font-bold bg-red-50/50 dark:bg-slate-800/50 cursor-default pointer-events-none' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
