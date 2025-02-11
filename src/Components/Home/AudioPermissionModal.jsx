import React,{useState} from 'react'
import { useTranslation } from 'react-i18next';
export default function AudioPermissionModal({ isOpen, message, onConfirm }) {
    const { t } = useTranslation();
    if (!isOpen) return null;
  
    return (
      
      <div className="modal-overlay" onClick={onConfirm}>
        <div className="modal-content">
            
            <div className="modal-header">
            {message}
            </div>
            <button className="modal-button" onClick={onConfirm}>{t('modal.button_close')}</button>
        </div>
    </div>
    );
  }