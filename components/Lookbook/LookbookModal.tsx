import React, { useEffect } from 'react';
import { Look } from '../../data/kuhoData';
import './Lookbook.css';

interface LookbookModalProps {
    look: Look;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const LookbookModal: React.FC<LookbookModalProps> = ({ look, onClose, onNext, onPrev }) => {
    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>

                <div className="modal-image-section">
                    <button className="modal-nav-btn prev-btn" onClick={onPrev}>&lt;</button>
                    <img src={look.image_url} alt={look.alt_text} />
                    <button className="modal-nav-btn next-btn" onClick={onNext}>&gt;</button>
                </div>

                <div className="modal-info-section">
                    <div className="look-detail-title">Look {look.look_id}</div>
                    <p className="look-description">
                        {look.description || look.alt_text}
                    </p>

                    {look.related_products.length > 0 && (
                        <div className="related-products">
                            <div className="related-title">Shop The Look</div>
                            {look.related_products.map(prod => (
                                <a key={prod.product_id} href={prod.link} className="product-link">
                                    {prod.name} - {prod.price}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LookbookModal;
