import React from "react";
import './Modal.scss'
import { useTranslation } from 'react-i18next';
export default function Modal({ isOpen, onClose, children }) {
    const { t } = useTranslation();
  if (!isOpen) return null;
  

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        {/* <button className="close-button" onClick={onClose}>×</button> */}
        <div className="modal-header">
        {children}
        </div>
        <button className="modal-button" onClick={onClose}>{t('modal.button_close')}</button>
      </div>
    </div>
  );
}
