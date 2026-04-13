import { ProductCategoryHeader } from '@/components/ui/ProductCategoryHeader';

export default function PartsAccessoriesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      <ProductCategoryHeader 
        namespace="PartsAccessories"
        titleKey="title"
        subtitleKey="subtitle"
        introKey="intro"
        imagePath="/images/hero_forklift.png"
      />
    </main>
  );
}
