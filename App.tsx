import React from 'react';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CollectionPage from './pages/CollectionPage';
import LookbookPage from './pages/LookbookPage';
import AdminPage from './pages/AdminPage'; // New Admin Page
import { categories, collectionProducts } from './data/mockData';
import type { Product, Category, CategoryId } from './types';
import { I18nProvider, useTranslation } from './context/i18n';
import { ProductProvider, useProducts } from './context/ProductContext'; // Import Context
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';

export type Page = 'home' | 'category' | 'product' | 'collection' | 'lookbook' | 'admin' | 'login';

const ProtectedAdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <LoginPage />; // Or redirect to /login
    }
    return <>{children}</>;
};

const AppContent: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { products } = useProducts(); // Use products from Context

    const handleNavigate = (page: Page, contextId?: CategoryId | number | string) => {
        window.scrollTo(0, 0);
        if (page === 'home') navigate('/');
        else if (page === 'lookbook') navigate('/lookbook');
        else if (page === 'collection') navigate('/collection');
        else if (page === 'admin') navigate('/admin');
        else if (page === 'category' && contextId) navigate(`/category/${contextId}`);
        else if (page === 'product' && contextId) navigate(`/product/${contextId}`);
    };

    const handleViewProduct = (productId: number) => {
        navigate(`/product/${productId}`);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    // Wrapper components to extract params and pass data
    const CategoryRoute = () => {
        const { id } = useParams<{ id: string }>();

        let categoryId = id as CategoryId;

        // Logic to filter products
        const categoryProducts = products.filter(p => {
            // Quick fix: Re-implement the switch logic
            switch (categoryId) {
                case 'men': return p.category === 'Men';
                case 'women': return p.category === 'Women';
                case 'accessories': return p.category === 'Accessories';
                case 'sweaters': return p.subcategory === 'Sweaters';
                case 'scarves': return p.subcategory === 'Scarves';
                case 'hats': return p.subcategory === 'Hats';
                case 'gloves': return p.subcategory === 'Gloves';
                case 'socks': return p.subcategory === 'Socks';
                case 'couple': return p.event === 'couple';
                case 'christmas': return p.event === 'christmas';
                case 'company': return p.event === 'company';
                case 'cardigan': return p.subcategory === 'Cardigans';
                case 'dress': return p.subcategory === 'Dresses';
                case 'vest': return p.subcategory === 'Vests';
                case 'bottoms': return p.subcategory === 'Bottoms';
                case 'coat': return p.subcategory === 'Coats';
                default:
                    // Check composite like men:sweaters
                    if (categoryId && categoryId.includes(':')) {
                        const [parent, sub] = categoryId.split(':');
                        const map: Record<string, string> = {
                            'sweaters': 'Sweaters',
                            'scarves': 'Scarves',
                            // Add other mappings if needed
                        };
                        const subName = map[sub] || sub.charAt(0).toUpperCase() + sub.slice(1);
                        return p.category.toLowerCase() === parent && p.subcategory === subName;
                    }
                    return false;
            }
        });

        const actualId = categoryId && categoryId.includes(':') ? categoryId.split(':')[1] as CategoryId : categoryId;
        const categoryInfo = categories[actualId] || { name: 'Unknown', description: 'Category', subcategories: [], id: actualId, productCount: 0 };

        const category: Category = {
            ...categoryInfo,
            name: t(categoryInfo.name)
        };

        return <CategoryPage
            category={category}
            products={categoryProducts}
            onViewProduct={handleViewProduct}
            onBack={handleGoBack}
        />;
    };

    const ProductRoute = () => {
        const { id } = useParams<{ id: string }>();
        const productId = Number(id);
        const product = products.find(p => p.id === productId);

        if (!product) return <div>Product not found</div>;

        const relatedProducts = products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4);

        return <ProductDetailPage
            product={product}
            relatedProducts={relatedProducts}
            onViewProduct={handleViewProduct}
            onBack={handleGoBack}
        />;
    };


    return (
        <div className="flex flex-col min-h-screen">
            <Header onNavigate={handleNavigate} />
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage products={products} onViewProduct={handleViewProduct} onNavigate={handleNavigate} />} />
                    <Route path="/lookbook" element={<LookbookPage />} />
                    <Route path="/collection" element={<CollectionPage products={collectionProducts} onViewProduct={handleViewProduct} onBack={handleGoBack} />} />
                    <Route path="/category/:id" element={<CategoryRoute />} />
                    <Route path="/product/:id" element={<ProductRoute />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/admin"
                        element={
                            <ProtectedAdminRoute>
                                <AdminPage />
                            </ProtectedAdminRoute>
                        }
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <I18nProvider>
            <ProductProvider>
                <AuthProvider>
                    <AppContent />
                </AuthProvider>
            </ProductProvider>
        </I18nProvider>
    );
};

export default App;