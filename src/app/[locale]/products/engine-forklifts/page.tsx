import { ProductCategoryHeader } from '@/components/ui/ProductCategoryHeader';

export default function EngineForkliftsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      <ProductCategoryHeader 
        namespace="EngineForklifts"
        titleKey="title"
        subtitleKey="subtitle"
        introKey="intro"
        imagePath="/images/hero_forklift.png"
      />
      {/* TODO: Add specific equipment grid here */}
    </main>
  );
}
