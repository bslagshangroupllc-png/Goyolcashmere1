import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Product } from '../types';
import { products as initialProducts } from '../data/mockData';

interface ProductContextType {
    products: Product[];
    addProduct: (product: Product) => void;
    updateProduct: (product: Product) => void;
    deleteProduct: (id: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>(() => {
        const savedProducts = localStorage.getItem('goyol_products');
        if (savedProducts) {
            try {
                return JSON.parse(savedProducts);
            } catch (e) {
                console.error("Failed to parse products from local storage", e);
                return initialProducts;
            }
        }
        return initialProducts;
    });

    useEffect(() => {
        localStorage.setItem('goyol_products', JSON.stringify(products));
    }, [products]);

    const addProduct = (product: Product) => {
        setProducts(prev => [...prev, product]);
    };

    const updateProduct = (updatedProduct: Product) => {
        setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    };

    const deleteProduct = (id: number) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
};
