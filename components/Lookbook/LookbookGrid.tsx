import React, { useState } from 'react';
import { Look } from '../../data/kuhoData';
import './Lookbook.css';

interface LookbookGridProps {
    looks: Look[];
    onLookClick: (look: Look) => void;
}

const LookbookGrid: React.FC<LookbookGridProps> = ({ looks, onLookClick }) => {
    return (
        <div className="lookbook-grid-container">
            <div className="lookbook-masonry">
                {looks.map((look) => (
                    <div
                        key={look.look_id}
                        className="look-item"
                        onClick={() => onLookClick(look)}
                    >
                        <div className="image-wrapper">
                            <img
                                src={look.image_url}
                                alt={look.alt_text}
                                loading="lazy"
                            />
                            <div className="look-overlay">
                                <span className="look-number">Look {look.look_id}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LookbookGrid;
