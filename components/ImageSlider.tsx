import React, { useState, useEffect, useCallback } from 'react';

interface ImageSliderProps {
    images: string[];
    children: React.ReactNode;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, images.length]);

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            goToNext();
        }, 5000); // Change slide every 5 seconds
        return () => clearTimeout(timer);
    }, [currentIndex, goToNext]);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
            {/* Slides */}
            <div className="w-full h-full">
                {images.map((image, index) => (
                     <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                {children}
            </div>
            
            {/* Dot Indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {images.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                        aria-label={`Go to slide ${slideIndex + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
