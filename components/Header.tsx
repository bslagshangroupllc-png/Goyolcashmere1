import React, { useState } from 'react';
import Icon from './Icon';
import type { Page } from '../App';
import type { CategoryId } from '../types';
import { useTranslation } from '../context/i18n';
import { categories } from '../data/mockData';
import { imageAssets } from '../data/images';

interface HeaderProps {
    onNavigate: (page: Page, context?: CategoryId) => void;
}

const NavMenuItem: React.FC<{
    title: string;
    subItems?: { id: CategoryId; name: string }[];
    onClick: () => void;
    onSubItemClick: (id: CategoryId) => void;
}> = ({ title, subItems, onClick, onSubItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const handleSubItemClick = (id: CategoryId) => {
        onSubItemClick(id);
        setIsOpen(false);
    }

    if (!subItems || subItems.length === 0) {
        return (
            <button onClick={onClick} className="text-sm font-medium text-brand-text hover:text-brand-light-brown transition-colors">
                {title}
            </button>
        );
    }

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button onClick={onClick} className="text-sm font-medium text-brand-text hover:text-brand-light-brown transition-colors flex items-center">
                {title}
                <Icon name="chevron-down" className="w-4 h-4 ml-1" />
            </button>
            {isOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 z-10">
                    <div className="w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 mt-2">
                        {subItems.map(item => (
                            <button key={item.id} onClick={() => handleSubItemClick(item.id)} className="text-left w-full block px-4 py-2 text-sm text-brand-text hover:bg-stone-100">{t(item.name)}</button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
    const { t, language, setLanguage } = useTranslation();

    const handleNavigation = (page: Page, contextId: CategoryId) => {
        onNavigate(page, contextId);
    }

    return (
        <header className="bg-brand-background/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-3 items-center h-24 border-b border-stone-200">
                    <div className="flex justify-start">
                        <button onClick={() => onNavigate('home')} className="flex-shrink-0">
                            <img src={imageAssets.logo} alt="Goyol Logo" className="h-20 w-auto" />
                        </button>
                    </div>

                    <nav className="hidden md:flex justify-center space-x-8">
                        <NavMenuItem
                            title={t('nav_men')}
                            subItems={categories.men.subcategories}
                            onClick={() => handleNavigation('category', 'men')}
                            onSubItemClick={(id) => handleNavigation('category', (`men:${id}`) as any)}
                        />
                        <NavMenuItem
                            title={t('nav_women')}
                            subItems={categories.women.subcategories}
                            onClick={() => handleNavigation('category', 'women')}
                            onSubItemClick={(id) => handleNavigation('category', (`women:${id}`) as any)}
                        />
                        <NavMenuItem
                            title={t('nav_accessories')}
                            subItems={categories.accessories.subcategories}
                            onClick={() => handleNavigation('category', 'accessories')}
                            onSubItemClick={(id) => handleNavigation('category', (`accessories:${id}`) as any)}
                        />
                        <NavMenuItem
                            title={t('nav_event')}
                            subItems={[
                                { id: 'couple', name: 'nav_couple' },
                                { id: 'christmas', name: 'nav_christmas' },
                                { id: 'company', name: 'nav_company' },
                            ]}
                            onClick={() => { }} // Main event button does nothing
                            onSubItemClick={(id) => handleNavigation('category', id)}
                        />
                        <NavMenuItem
                            title="LOOKBOOK"
                            onClick={() => handleNavigation('lookbook', '' as any)}
                            onSubItemClick={() => { }}
                        />
                    </nav>

                    <div className="flex justify-end">
                        <div className="flex items-center space-x-2 text-sm">
                            <button
                                onClick={() => setLanguage('en')}
                                className={`font-medium transition-colors ${language === 'en' ? 'text-brand-text' : 'text-stone-400 hover:text-brand-text'}`}
                                aria-pressed={language === 'en'}
                            >
                                EN
                            </button>
                            <span className="text-stone-300">|</span>
                            <button
                                onClick={() => setLanguage('ko')}
                                className={`font-medium transition-colors ${language === 'ko' ? 'text-brand-text' : 'text-stone-400 hover:text-brand-text'}`}
                                aria-pressed={language === 'ko'}
                            >
                                KO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;