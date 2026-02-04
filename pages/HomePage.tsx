import React from 'react';
import type { Product } from '../types';
import type { Page } from '../App';
import ProductCard from '../components/ProductCard';
import { useTranslation } from '../context/i18n';
import { imageAssets } from '../data/images';
import ImageSlider from '../components/ImageSlider';
import { recommendedProducts } from '../data/mockData';

interface HomePageProps {
    products: Product[];
    onViewProduct: (productId: number) => void;
    onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ products, onViewProduct, onNavigate }) => {
    const { t } = useTranslation();

    return (
        <main>
            <ImageSlider images={imageAssets.homePage.heroImages}>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{t('home_hero_title')}</h1>
                <button
                    onClick={() => onNavigate('collection')}
                    className="mt-6 px-8 py-3 border border-white text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
                    {t('home_hero_button')}
                </button>
            </ImageSlider>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
                <div className="relative h-[50vh] md:h-[70vh] bg-cover bg-center flex items-end p-8 md:p-12" style={{ backgroundImage: `url('${imageAssets.homePage.promo}')` }}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-white">
                        <h2 className="text-3xl md:text-4xl font-semibold">{t('home_promo_title')}</h2>
                        <button
                            onClick={() => onNavigate('collection')}
                            className="mt-4 inline-block text-sm font-medium uppercase tracking-wider border-b border-white pb-1 hover:opacity-80 transition-opacity">
                            {t('home_promo_button')}
                        </button>
                    </div>
                </div>
            </div>

            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
                <h2 className="text-2xl font-medium text-center mb-10">{t('home_recommended_title')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
                    {(() => {
                        const correctProducts = products.filter(p => p.isRecommended);
                        const displayProducts = correctProducts.length > 0 ? correctProducts : products.slice(0, 4);
                        return displayProducts.map(product => (
                            <ProductCard key={product.id} product={product} onClick={() => onViewProduct(product.id)} />
                        ));
                    })()}
                </div>
            </section>
        </main>
    );
};

export default HomePage;