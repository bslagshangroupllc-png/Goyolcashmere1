import React from 'react';
import type { Product } from '../types';
import { useTranslation } from '../context/i18n';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { t, formatPrice } = useTranslation();
  return (
    <div 
        onClick={onClick}
        className="group cursor-pointer flex flex-col h-full "
    >
      <div className="overflow-hidden bg-stone-200 aspect-[3/4]">
        <img 
          src={product.imageUrl} 
          alt={t(product.name)} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="mt-3 text-center flex-grow flex flex-col justify-between">
        <h3 className="text-sm font-medium text-brand-text">{t(product.name)}</h3>
        <p className="mt-1 text-sm text-stone-600">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;