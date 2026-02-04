import React, { useState } from 'react';
import { kuhoCollections, Look, Collection } from '../data/kuhoData';
import LookbookGrid from '../components/Lookbook/LookbookGrid';
import LookbookModal from '../components/Lookbook/LookbookModal';
import '../components/Lookbook/Lookbook.css';

const LookbookPage: React.FC = () => {
    // Default to the first collection (Most recent)
    const [activeCollectionId, setActiveCollectionId] = useState<string>(kuhoCollections[0].collection_id);
    const [selectedLook, setSelectedLook] = useState<Look | null>(null);

    const activeCollection = kuhoCollections.find(c => c.collection_id === activeCollectionId) || kuhoCollections[0];

    const handleLookClick = (look: Look) => {
        setSelectedLook(look);
    };

    const handleCloseModal = () => {
        setSelectedLook(null);
    };

    const handleNextLook = () => {
        if (!selectedLook) return;
        const currentIndex = activeCollection.looks.findIndex(l => l.look_id === selectedLook.look_id);
        const nextIndex = (currentIndex + 1) % activeCollection.looks.length;
        setSelectedLook(activeCollection.looks[nextIndex]);
    };

    const handlePrevLook = () => {
        if (!selectedLook) return;
        const currentIndex = activeCollection.looks.findIndex(l => l.look_id === selectedLook.look_id);
        const prevIndex = (currentIndex - 1 + activeCollection.looks.length) % activeCollection.looks.length;
        setSelectedLook(activeCollection.looks[prevIndex]);
    };

    return (
        <div className="lookbook-page">
            <header className="collection-header">
                <h1 className="collection-title">Lookbook</h1>

                {/* Season Selector */}
                <div className="season-selector">
                    {kuhoCollections.map(collection => (
                        <button
                            key={collection.collection_id}
                            className={`season-btn ${activeCollectionId === collection.collection_id ? 'active' : ''}`}
                            onClick={() => setActiveCollectionId(collection.collection_id)}
                        >
                            {collection.collection_id.replace('_', ' ')}
                        </button>
                    ))}
                </div>

                <div className="collection-info">
                    <h2>{activeCollection.title}</h2>
                    <p className="collection-desc">{activeCollection.description}</p>
                </div>
            </header>

            <LookbookGrid
                looks={activeCollection.looks}
                onLookClick={handleLookClick}
            />

            {selectedLook && (
                <LookbookModal
                    look={selectedLook}
                    onClose={handleCloseModal}
                    onNext={handleNextLook}
                    onPrev={handlePrevLook}
                />
            )}
        </div>
    );
};

export default LookbookPage;
