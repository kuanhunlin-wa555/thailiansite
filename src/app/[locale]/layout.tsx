import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thailian Forklift Co., Ltd.',
  description: 'ผู้เชี่ยวชาญด้านรถโฟล์คลิฟท์ ประสบการณ์กว่า 30 ปี / Professional provider of quality engine and electric forklifts.',
};
import { SiteHeader } from '@/components/layout/SiteHeader';
import { MegaFooter } from '@/components/layout/MegaFooter';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Extract and await the locale param
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          {children}
          <MegaFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
