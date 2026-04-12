import { useTranslations } from 'next-intl';

export default function PreOwnedPage() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-950">
      <div className="container max-w-4xl text-center">
        <h1 className="text-5xl font-black mb-6">Pre-Owned Forklifts</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">Premium Reliability. Exceptional Value - Coming Soon.</p>
      </div>
    </main>
  );
}
