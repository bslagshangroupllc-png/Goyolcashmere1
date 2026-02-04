import React, { useState, useEffect } from 'react';
import type { Product, Category } from '../types';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import { useTranslation } from '../context/i18n';

interface CategoryPageProps {
  category: Category;
  products: Product[];
  onViewProduct: (productId: number) => void;
  onBack?: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, products, onViewProduct, onBack }) => {
  const { t } = useTranslation();
  const [sortOrder, setSortOrder] = useState('latest');
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const sortProducts = () => {
      const productsToSort = [...products];
      switch (sortOrder) {
        case 'price_low_high':
          productsToSort.sort((a, b) => a.price - b.price);
          break;
        case 'price_high_low':
          productsToSort.sort((a, b) => b.price - a.price);
          break;
        case 'latest':
        default:
          productsToSort.sort((a, b) => b.id - a.id);
          break;
      }
      setSortedProducts(productsToSort);
    };
    sortProducts();
  }, [products, sortOrder]);

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
      {/* Back Button */}
      <button
        onClick={() => onBack ? onBack() : window.history.back()}
        className="flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-brand-brown transition-colors mb-6"
      >
        <Icon name="chevron-down" className="w-4 h-4 rotate-90" />
        {t('back')}
      </button>

      <div className="text-center sm:text-left border-b border-stone-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">{category.name}</h1>
        <p className="mt-2 text-sm text-stone-500">{t('product_count', { count: category.productCount })}</p>
      </div>
      
      <div className="flex justify-end mt-6">
        <div className="relative">
          <select 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="appearance-none bg-transparent border border-stone-300 pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-brown focus:border-brand-brown"
          >
            <option value="latest">{t('sort_latest')}</option>
            <option value="price_low_high">{t('sort_price_low_high')}</option>
            <option value="price_high_low">{t('sort_price_high_low')}</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-700">
             <Icon name="chevron-down" className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      <section className="mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={() => onViewProduct(product.id)} />
          ))}
        </div>
      </section>

      {category.id === 'men' && (
        <section className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-96 bg-pink-200 flex items-center justify-center">
                 <div className="bg-white p-4 shadow-lg w-40 h-72"></div>
            </div>
            <div className="h-96 bg-blue-200 flex items-center justify-center">
                <div className="bg-white p-4 shadow-lg w-40 h-72"></div>
            </div>
            <div className="h-96 bg-teal-200 flex items-center justify-center">
                <div className="bg-white p-4 shadow-lg w-40 h-72"></div>
            </div>
        </section>
      )}

    </main>
  );
};

export default CategoryPage;