import React from 'react';

type IconProps = {
  name: 'chevron-down' | 'plus' | 'minus' | 'share' | 'instagram' | 'facebook' | 'twitter' | 'chevron-left' | 'chevron-right' | 'x';
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, className = 'w-6 h-6' }) => {
  const icons = {
    'chevron-down': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    ),
    'chevron-left': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    ),
    'chevron-right': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    ),
    plus: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
    ),
    minus: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
      </svg>
    ),
    share: (
         <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.002l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path></svg>
    ),
    instagram: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.25-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.442c-3.141 0-3.499.012-4.71.069-2.733.124-3.951 1.349-4.075 4.075-.057 1.211-.069 1.569-.069 4.71s.012 3.499.069 4.71c.124 2.725 1.342 3.951 4.075 4.075 1.211.057 1.569.069 4.71.069s3.499-.012 4.71-.069c2.733-.124 3.951-1.349 4.075-4.075.057-1.211.069-1.569.069-4.71s-.012-3.499-.069-4.71c-.124-2.725-1.342-3.951-4.075-4.075-1.211-.057-1.569-.069-4.71-.069zm0 3.846c-2.403 0-4.35 1.947-4.35 4.35s1.947 4.35 4.35 4.35 4.35-1.947 4.35-4.35-1.947-4.35-4.35-4.35zm0 7.252c-1.599 0-2.902-1.303-2.902-2.902s1.303-2.902 2.902-2.902 2.902 1.303 2.902 2.902-1.303 2.902-2.902 2.902zm4.856-7.502c-.75 0-1.358.608-1.358 1.358s.608 1.358 1.358 1.358 1.358-.608 1.358-1.358-.608-1.358-1.358-1.358z"></path></svg>
    ),
    facebook: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
    ),
    twitter: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.7 1.03-.78-.84-1.9-1.36-3.13-1.36-2.38 0-4.3 1.92-4.3 4.3 0 .34.04.67.11.98-3.57-.18-6.74-1.89-8.86-4.49-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.7-.02-1.36-.21-1.94-.53v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.7 2.13 2.94 4.02 2.97-1.47 1.15-3.32 1.83-5.33 1.83-.35 0-.69-.02-1.03-.06 1.9 1.22 4.16 1.93 6.58 1.93 7.89 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.22z"></path></svg>
    ),
    x: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    ),
  };

  return icons[name] || null;
};

export default Icon;