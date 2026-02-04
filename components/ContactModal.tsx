import React, { useEffect } from 'react';
import Icon from './Icon';
import { useTranslation } from '../context/i18n';
import { imageAssets } from '../data/images';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md m-4 overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">{t('contact_modal_title')}</h2>
          <button onClick={onClose} className="text-stone-500 hover:text-stone-800"><Icon name="x" className="w-5 h-5"/></button>
        </div>

        <div className="p-6 text-center">
          <div className="mb-4">
            <img src={imageAssets.kakao} alt="kakao" className="w-100 h-80 object-contain mx-auto" />
          </div>

          <p className="text-sm text-stone-600">
            <a href="mailto:korea@goyolcashmere.mn" className="text-brand-brown hover:underline">Email:korea@goyolcashmere.mn</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
