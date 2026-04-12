import { mockProducts } from '@/lib/data/products';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ChevronRight, Download, Mail } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { QuoteDrawer } from '@/components/forms/QuoteDrawer';
import { Suspense } from 'react';

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id } = await params;
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <>
    <main className="min-h-screen bg-white dark:bg-slate-950 py-12">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-12">
          <Link href="/products" className="hover:text-red-600 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to Equipment
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="capitalize">{product.type}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 dark:text-white font-bold">{product.model}</span>
        </div>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] w-full bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm relative">
               <img src={product.imageUrl} alt={product.model} className="w-full h-full object-cover" />
               <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full font-black text-red-600 dark:text-red-500 shadow-xl border border-slate-200 dark:border-slate-800 tracking-tight">
                 IN STOCK
               </div>
            </div>
            {/* Thumbnail array placeholder */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800" />
              ))}
            </div>
          </div>

          {/* Right: Details & Lead Capture */}
          <div className="flex flex-col">
            <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-widest text-xs rounded-full w-max mb-6">
              {product.type} Equipment
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              {product.model}
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-10 leading-relaxed">
              {product.description}
            </p>

            {/* Spec Table */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 mb-10 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Core Technical Specifications</h3>
              <div className="space-y-4 font-medium">
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-slate-500">Lifting Capacity</span>
                  <span className="text-slate-900 dark:text-white font-black">{product.capacity}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-slate-500">Power Source</span>
                  <span className="text-slate-900 dark:text-white font-black capitalize">{product.type}</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-slate-500">Service Level Guarantee</span>
                  <span className="text-red-600 font-black flex items-center gap-1">
                    <CheckCircle2 className="w-5 h-5"/> 19 National Hubs
                  </span>
                </div>
              </div>
            </div>

            {/* Sticky/Fixed Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
              <Link href="?quote=open" scroll={false} className="flex-1 bg-red-600 hover:bg-red-500 text-white py-5 rounded-2xl font-black text-lg transition-transform transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg hover:shadow-red-500/25">
                <Mail className="w-5 h-5"/> Request Formal Quote
              </Link>
              <button className="flex-1 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 py-5 rounded-2xl font-black text-lg transition-transform transform hover:scale-[1.02] flex items-center justify-center gap-2">
                <Download className="w-5 h-5"/> Download Brochure
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </main>
    <Suspense fallback={null}>
      <QuoteDrawer productName={product.model} />
    </Suspense>
    </>
  );
}
