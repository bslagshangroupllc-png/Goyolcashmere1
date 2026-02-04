import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import { useTranslation } from '../context/i18n';
import type { Product } from '../types';

interface ColorSelectorModalProps {
    isOpen: boolean;
    onClose: () => void;
    colors: Product['colors'];
    // select mode: allow selecting colors (default)
    selectedColors?: string[];
    onConfirm?: (selected: string[]) => void;
    // catalog mode: show images only, limited by imageLimit
    mode?: 'select' | 'catalog';
    imageLimit?: number;
    onImageClick?: (imageUrl: string) => void;
    // optional additional images to include in catalog (e.g., product images)
    images?: string[];
}

const ColorSelectorModal: React.FC<ColorSelectorModalProps> = ({
    isOpen,
    onClose,
    colors,
    selectedColors,
    onConfirm,
    mode = 'select',
    imageLimit = 7,
    onImageClick,
    images,
}) => {
    const [tempSelected, setTempSelected] = useState<string[]>(selectedColors || []);
    const { t } = useTranslation();

    useEffect(() => {
        setTempSelected(selectedColors || []);
    }, [isOpen, selectedColors]);
    
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    const handleColorToggle = (colorName: string) => {
        setTempSelected(prev =>
            prev.includes(colorName)
                ? prev.filter(c => c !== colorName)
                : [...prev, colorName]
        );
    };

    const handleConfirm = () => {
        onConfirm && onConfirm(tempSelected);
    };

    const [enlarged, setEnlarged] = useState<string | null>(null);

    if (!isOpen) {
        return null;
    }

    return (
        <>
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-white rounded-lg shadow-xl w-full max-w-2xl m-4 overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-medium">{mode === 'catalog' ? t('color_catalog_title') : t('product_select_color')}</h2>
                    <button onClick={onClose} className="text-stone-500 hover:text-stone-800">
                        <Icon name="x" className="w-5 h-5" />
                    </button>
                </div>
                
                <div className="p-6 max-h-[60vh] overflow-y-auto">
                    {/** Catalog mode shows images only (limited), select mode shows selectable tiles */}
                    { (mode === 'catalog') ? (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {(() => {
                                // Show fixed catalog images named color-1..color-4 for all products
                                const defaultCount = imageLimit || 6;
                                const defaultUrls = Array.from({ length: defaultCount }, (_, i) => `/product-images/color-${i + 1}.png`);
                                return defaultUrls.map((url, i) => (
                                    <button key={i} onClick={() => setEnlarged(url)} className="cursor-pointer border rounded-md p-1 overflow-hidden">
                                        <div className="aspect-square bg-stone-100 mb-2 overflow-hidden rounded">
                                            <img src={url} alt={`color-${i+1}`} loading="eager" decoding="async" width={240} height={240} className="w-full h-full object-cover"/>
                                        </div>
                                        <div className="text-center text-sm text-stone-700">{`color-${i+1}`}</div>
                                    </button>
                                ));
                            })()}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {colors.map(color => (
                                <div 
                                    key={color.name} 
                                    onClick={() => handleColorToggle(color.name)}
                                    className={`cursor-pointer border-2 rounded-md p-2 text-center ${tempSelected.includes(color.name) ? 'border-brand-brown' : 'border-transparent hover:border-stone-300'}`}
                                >
                                    <div className="aspect-square bg-stone-100 mb-2 overflow-hidden rounded">
                                        <img src={color.image} alt={t(color.name)} loading="eager" decoding="async" width={240} height={240} className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                         <input
                                            type="checkbox"
                                            checked={tempSelected.includes(color.name)}
                                            readOnly
                                            className="form-checkbox h-4 w-4 text-brand-brown rounded focus:ring-brand-light-brown"
                                         />
                                        <span className="text-sm">{t(color.name)}</span>
                                        <span className="w-3 h-3 rounded-full inline-block" style={{backgroundColor: color.hex}}></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex justify-end p-4 border-t bg-stone-50">
                    <button 
                        onClick={onClose}
                        className="px-6 py-2 border border-stone-300 text-sm font-medium rounded-md hover:bg-stone-100 mr-2"
                    >
                        {t('cancel')}
                    </button>
                    {mode !== 'catalog' && (
                        <button 
                            onClick={handleConfirm}
                            className="px-6 py-2 bg-brand-brown text-white text-sm font-medium rounded-md hover:bg-brand-light-brown"
                        >
                            {t('done')}
                        </button>
                    )}
                </div>
            </div>
        </div>
        {/* Enlarged image overlay inside modal */}
        {enlarged && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/70" style={{ zIndex: 9999 }}>
                <div className="relative bg-transparent p-4 max-w-4xl w-full">
                    <button onClick={() => setEnlarged(null)} className="absolute top-2 right-2 text-white z-10"><Icon name="x" className="w-6 h-6"/></button>
                    <div className="bg-white rounded shadow-lg overflow-hidden">
                        <img src={enlarged} alt="enlarged" loading="eager" decoding="async" className="w-full h-[70vh] object-contain bg-stone-100" />
                        <div className="p-4 flex justify-end gap-2">
                            <button onClick={() => setEnlarged(null)} className="px-4 py-2 border border-stone-300 rounded-md">{t('cancel')}</button>
                           
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default ColorSelectorModal;
