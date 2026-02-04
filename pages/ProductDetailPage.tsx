import React, { useState } from 'react';
import type { Product } from '../types';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import ColorSelectorModal from '../components/ColorSelectorModal';
import { useTranslation } from '../context/i18n';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-stone-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full py-4 text-left"
            >
                <span className="font-medium text-sm">{title}</span>
                <Icon name={isOpen ? 'minus' : 'plus'} className="w-4 h-4 text-stone-500" />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-4 text-sm text-stone-600">
                    {children}
                </div>
            </div>
        </div>
    );
};


interface ProductDetailPageProps {
  product: Product;
  relatedProducts: Product[];
  onViewProduct: (productId: number) => void;
  onBack?: () => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, relatedProducts, onViewProduct, onBack }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes?.[0] || null);
  const [mainImage, setMainImage] = useState(product.images?.[0] || product.imageUrl);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  // Keep a ref of which color images we've already requested to avoid duplicate network requests
  const preloadedColorSetRef = React.useRef<Set<string>>(new Set());
  const { t, formatPrice } = useTranslation();

  // Ensure all color catalog images are requested when the modal opens (if not already preloaded)
  React.useEffect(() => {
    if (!isColorModalOpen) return;
    const limit = 7;
    for (let i = 1; i <= limit; i++) {
      const url = `/product-images/color-${i}.png`;
      if (!preloadedColorSetRef.current.has(url)) {
        const img = new Image();
        img.src = url;
        preloadedColorSetRef.current.add(url);
      }
    }
  }, [isColorModalOpen]);

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-2 justify-center md:justify-start">
            {(product.images || []).map((img, index) => (
              <button 
                key={index}
                onClick={() => setMainImage(img)}
                className={`w-16 h-20 bg-stone-100 overflow-hidden ${mainImage === img ? 'ring-2 ring-brand-brown' : ''}`}
              >
                <img src={img} alt={`${t(product.name)} thumbnail ${index + 1}`} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
          <div className="flex-1 bg-stone-100">
            <img src={mainImage} alt={t(product.name)} className="w-full h-full object-contain aspect-[4/4]" />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold">{t(product.name)}</h1>
          <p className="text-xl sm:text-2xl mt-2 text-brand-text">{formatPrice(product.price)}</p>
          <p className="mt-4 text-sm text-stone-600 leading-relaxed">{t(product.description)}</p>
          
          {/* Color Catalog Button */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{t('product_color')}</p>
              </div>
              <div className="mt-3">
                <button
                  onClick={() => setIsColorModalOpen(true)}
                  onMouseEnter={() => {
                    // start preloading catalog images when user hovers the button
                    const limit = 7;
                    for (let i = 1; i <= limit; i++) {
                      const url = `/product-images/color-${i}.png`;
                      if (!preloadedColorSetRef.current.has(url)) {
                        const img = new Image();
                        img.src = url;
                        preloadedColorSetRef.current.add(url);
                      }
                    }
                  }}
                  className="px-4 py-2 border border-stone-300 rounded-md text-sm font-medium hover:border-brand-brown"
                >
                  {t('product_color_catalog_button')}
                </button>
              </div>
            </div>
          )}
          
          {/* Size Selector */}
          <div className="mt-6">
            <p className="text-sm font-medium">{t('product_size')}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {(product.sizes || []).map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border text-sm font-medium transition-colors ${selectedSize === size ? 'bg-brand-brown text-white border-brand-brown' : 'border-stone-300 hover:border-brand-brown'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Accordions */}
          <div className="mt-8">
            <AccordionItem title={t('product_material_title')}>
              <p>{t(product.material)}</p>
            </AccordionItem>
            <AccordionItem title={t('product_care_title')}>
              <p>{t(product.care)}</p>
            </AccordionItem>
          </div>

          <div className="mt-6 flex items-center space-x-2 text-sm text-stone-500">
              <span>{t('product_share')}:</span>
              <Icon name="share" className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      {/* You May Also Like */}
      <section className="mt-16 sm:mt-24">
        <h2 className="text-2xl font-medium text-center mb-10">{t('product_related_title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} onClick={() => onViewProduct(p.id)} />
          ))}
        </div>
      </section>

      {/* Color Selector Modal */}
      {product.colors && (
        <ColorSelectorModal
          isOpen={isColorModalOpen}
          onClose={() => setIsColorModalOpen(false)}
          colors={product.colors}
          images={[product.imageUrl, ...(product.images || [])]}
          mode="catalog"
          imageLimit={7}
          onImageClick={(img) => { setMainImage(img); setIsColorModalOpen(false); }}
        />
      )}
    </main>
  );
};

export default ProductDetailPage;