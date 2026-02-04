import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductForm from '../components/ProductForm';
import type { Product } from '../types';

import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminPage: React.FC = () => {
    const { products, addProduct, updateProduct, deleteProduct } = useProducts();
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | undefined>(undefined);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleAddNew = () => {
        setEditingProduct(undefined);
        setIsEditing(true);
    };

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
        setIsEditing(true);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            deleteProduct(id);
        }
    };

    const handleSave = (product: Product) => {
        if (editingProduct) {
            updateProduct(product);
        } else {
            // Generate ID
            const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
            addProduct({ ...product, id: newId });
        }
        setIsEditing(false);
        setEditingProduct(undefined);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditingProduct(undefined);
    };

    if (isEditing) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="mb-4">
                    <button onClick={handleCancel} className="text-stone-500 hover:text-stone-900">&larr; Back to Dashboard</button>
                </div>
                <ProductForm initialProduct={editingProduct} onSave={handleSave} onCancel={handleCancel} />
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold font-serif text-brand-text">Product Dashboard</h1>
                <div className="space-x-4">
                    <button
                        onClick={handleLogout}
                        className="text-gray-600 hover:text-gray-900 px-4 py-2"
                    >
                        Logout
                    </button>
                    <button
                        onClick={handleAddNew}
                        className="bg-brand-dark-brown text-white px-4 py-2 rounded hover:opacity-90 bg-stone-800"
                    >
                        + Add New Product
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map(product => (
                            <tr key={product.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img src={product.imageUrl} alt={product.name} className="h-10 w-10 object-cover rounded" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">{product.category} / {product.subcategory}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">${product.price}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                    <button onClick={() => handleEdit(product)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                    <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPage;
