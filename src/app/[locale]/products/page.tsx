import { useTranslations } from 'next-intl';

export default function ProductsPage() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-950">
      <div className="container max-w-4xl text-center">
        <h1 className="text-5xl font-black mb-6">Our Products & Services</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">Products Overview - Coming Soon.</p>
      </div>
    </main>
  );
}
