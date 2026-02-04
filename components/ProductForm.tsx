import React, { useState, useEffect } from 'react';
import type { Product, CategoryId } from '../types';
import { categories } from '../data/mockData';

interface ProductFormProps {
    initialProduct?: Product;
    onSave: (product: Product) => void;
    onCancel: () => void;
}

// Helper map for Display Names
const subcategoryMap: Record<string, string> = {
    'sweaters': 'Sweaters',
    'coat': 'Coats',
    'cardigan': 'Cardigans',
    'vest': 'Vests',
    'bottoms': 'Bottoms',
    'dress': 'Dresses',
    'scarves': 'Scarves',
    'hats': 'Hats',
    'gloves': 'Gloves',
    'socks': 'Socks'
};

const ProductForm: React.FC<ProductFormProps> = ({ initialProduct, onSave, onCancel }) => {
    const [formData, setFormData] = useState<Partial<Product>>(initialProduct || {
        name: '',
        category: 'Women',
        subcategory: 'Sweaters',
        price: 0,
        imageUrl: '',
        images: [],
        colors: [],
        sizes: [],
        description: '',
        material: '',
        care: '',
        event: undefined
    });

    const [newColor, setNewColor] = useState({ name: '', hex: '#000000', image: '' });
    const [newSize, setNewSize] = useState('');
    const [newImage, setNewImage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'price' ? parseFloat(value) : value }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: 'main' | 'gallery' | 'color', index?: number) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Check file size (limit to ~500KB to be safe with localStorage)
        if (file.size > 500 * 1024) {
            alert("File is too large! Please upload images under 500KB.");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result as string;

            if (field === 'main') {
                setFormData(prev => ({ ...prev, imageUrl: base64String }));
            } else if (field === 'gallery') {
                setNewImage(base64String);
            } else if (field === 'color') {
                setNewColor(prev => ({ ...prev, image: base64String }));
            }
        };
        reader.readAsDataURL(file);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryId = e.target.value as CategoryId;
        // Note: The data model uses "Men", "Women" (Capitalized) for category field, 
        // but IDs are lowercase. We need to match existing data pattern.
        // Looking at mockData, category is "Men", "Women", "Accessories".
        // Let's strictly map ID to Display Name.
        let displayCategory = 'Women';
        if (categoryId === 'men') displayCategory = 'Men';
        if (categoryId === 'women') displayCategory = 'Women';
        if (categoryId === 'accessories') displayCategory = 'Accessories';

        // Reset subcategory when category changes
        const firstSubId = categories[categoryId]?.subcategories?.[0]?.id || '';
        const firstSubName = subcategoryMap[firstSubId] || firstSubId;

        setFormData(prev => ({
            ...prev,
            category: displayCategory,
            subcategory: firstSubName
        }));
    };

    const addColor = () => {
        if (newColor.name && newColor.hex) {
            setFormData(prev => ({ ...prev, colors: [...(prev.colors || []), newColor] }));
            setNewColor({ name: '', hex: '#000000', image: '' });
        }
    };

    const removeColor = (index: number) => {
        setFormData(prev => ({ ...prev, colors: prev.colors?.filter((_, i) => i !== index) }));
    };

    const addSize = () => {
        if (newSize) {
            setFormData(prev => ({ ...prev, sizes: [...(prev.sizes || []), newSize] }));
            setNewSize('');
        }
    };

    const removeSize = (index: number) => {
        setFormData(prev => ({ ...prev, sizes: prev.sizes?.filter((_, i) => i !== index) }));
    };

    const addImage = () => {
        if (newImage) {
            setFormData(prev => ({ ...prev, images: [...(prev.images || []), newImage] }));
            setNewImage('');
        }
    };

    const removeImage = (index: number) => {
        setFormData(prev => ({ ...prev, images: prev.images?.filter((_, i) => i !== index) }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData as Product);
    };

    // Helper to find subcategories for current selected category
    const currentCategoryId = Object.keys(categories).find(key => {
        // Reverse lookup: Display Name -> ID
        const cat = categories[key as CategoryId];
        // This is tricky because mockData uses "Men" but type has "men".
        // Let's rely on simple mapping logic
        if (formData.category === 'Men') return key === 'men';
        if (formData.category === 'Women') return key === 'women';
        if (formData.category === 'Accessories') return key === 'accessories';
        return key === 'women'; // Default
    }) as CategoryId;

    const subcategories = categories[currentCategoryId]?.subcategories || [];

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">{initialProduct ? 'Edit Product' : 'Add New Product'}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select value={currentCategoryId} onChange={handleCategoryChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="accessories">Accessories</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Subcategory</label>
                    <select name="subcategory" value={formData.subcategory} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                        {subcategories.map(sub => {
                            const displayName = subcategoryMap[sub.id] || sub.id;
                            return (
                                <option key={sub.id} value={displayName}>{displayName}</option>
                            );
                        })}
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Main Image</label>
                <div className="mt-1 flex items-center space-x-2">
                    <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" className="flex-grow border border-gray-300 rounded-md shadow-sm p-2" />
                    <label className="cursor-pointer bg-stone-200 px-3 py-2 rounded hover:bg-stone-300">
                        <span className="text-sm">Upload</span>
                        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'main')} className="hidden" />
                    </label>
                </div>
                {formData.imageUrl && <img src={formData.imageUrl} alt="Preview" className="mt-2 h-32 object-contain" />}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Gallery Images</label>
                <div className="flex space-x-2 mt-1">
                    <input type="text" value={newImage} onChange={(e) => setNewImage(e.target.value)} placeholder="Image URL" className="flex-grow border border-gray-300 rounded-md p-2" />
                    <label className="cursor-pointer bg-stone-200 px-3 py-2 rounded hover:bg-stone-300 flex items-center">
                        <span className="text-sm">Upload</span>
                        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'gallery')} className="hidden" />
                    </label>
                    <button type="button" onClick={addImage} className="bg-brand-dark-brown text-white px-4 py-2 rounded">Add</button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                    {formData.images?.map((img, idx) => (
                        <div key={idx} className="relative group">
                            <img src={img} alt="Gallery" className="h-20 w-20 object-cover rounded" />
                            <button type="button" onClick={() => removeImage(idx)} className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs opacity-0 group-hover:opacity-100">X</button>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Colors</label>
                <div className="grid grid-cols-1 gap-2 mt-1 p-2 border rounded-md">
                    <div className="flex space-x-2">
                        <input type="text" value={newColor.name} onChange={(e) => setNewColor({ ...newColor, name: e.target.value })} placeholder="Color Name" className="flex-grow border border-gray-300 rounded-md p-2" />
                        <input type="color" value={newColor.hex || '#000000'} onChange={(e) => setNewColor({ ...newColor, hex: e.target.value })} className="border border-gray-300 rounded-md p-1 h-10 w-12" />
                    </div>
                    <div className="flex space-x-2 items-center">
                        <input type="text" value={newColor.image} onChange={(e) => setNewColor({ ...newColor, image: e.target.value })} placeholder="Color Image URL (Optional)" className="flex-grow border border-gray-300 rounded-md p-2 text-sm" />
                        <label className="cursor-pointer bg-stone-200 px-3 py-2 rounded hover:bg-stone-300">
                            <span className="text-sm">Upload</span>
                            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'color')} className="hidden" />
                        </label>
                        <button type="button" onClick={addColor} className="bg-stone-200 px-4 py-2 rounded">Add Color</button>
                    </div>
                    {newColor.image && <p className="text-xs text-green-600">Color image selected!</p>}
                </div>
                <ul className="mt-2 space-y-1">
                    {formData.colors?.map((col, idx) => (
                        <li key={idx} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 rounded-full border border-gray-200" style={{ backgroundColor: col.hex }}></div>
                                <span>{col.name}</span>
                                {col.image && <span className="text-xs text-gray-400">(Image)</span>}
                            </div>
                            <button type="button" onClick={() => removeColor(idx)} className="text-red-500 text-sm">Remove</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Sizes</label>
                <div className="flex space-x-2 mt-1">
                    <input type="text" value={newSize} onChange={(e) => setNewSize(e.target.value)} placeholder="Size (e.g. S, M, L)" className="flex-grow border border-gray-300 rounded-md p-2" />
                    <button type="button" onClick={addSize} className="bg-stone-200 px-4 py-2 rounded">Add</button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                    {formData.sizes?.map((size, idx) => (
                        <span key={idx} className="bg-gray-200 px-2 py-1 rounded text-sm flex items-center">
                            {size}
                            <button type="button" onClick={() => removeSize(idx)} className="ml-1 text-gray-500 hover:text-red-500">×</button>
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Material</label>
                    <input type="text" name="material" value={formData.material} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Care</label>
                    <input type="text" name="care" value={formData.care} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Event Tag</label>
                <select name="event" value={formData.event || ''} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option value="">None</option>
                    <option value="couple">Couple</option>
                    <option value="christmas">Christmas</option>
                    <option value="company">Company</option>
                </select>
            </div>

            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="isRecommended"
                    name="isRecommended"
                    checked={formData.isRecommended || false}
                    onChange={(e) => setFormData(prev => ({ ...prev, isRecommended: e.target.checked }))}
                    className="h-4 w-4 text-brand-dark-brown focus:ring-brand-brown border-gray-300 rounded"
                />
                <label htmlFor="isRecommended" className="ml-2 block text-sm text-gray-900">
                    Add to Recommended Section
                </label>
            </div>

            <div className="flex justify-end space-x-4 pt-4 border-t">
                <button type="button" onClick={onCancel} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-brand-dark-brown text-white rounded-md text-sm font-medium hover:opacity-90 bg-stone-800">Save Product</button>
            </div>
        </form>
    );
};

export default ProductForm;
