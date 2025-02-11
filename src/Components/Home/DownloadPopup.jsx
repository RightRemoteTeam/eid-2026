import React,{useState} from 'react'
import { useTranslation } from 'react-i18next';
import {GoogleAnalytics} from "../GoogleAnalytics";

export default function DownloadFilePopup({ isOpen, image,url,closeModal,targetEvent }) {
    
    const { t } = useTranslation();
    if (!isOpen) return null;
    const { trackEvent } = GoogleAnalytics();
    const triggerEvent = (event_label,event_category) => {
        console.log('event_label:',event_label);
        trackEvent({
          action: 'click',
          category: event_category,
          label: event_label, 
          value: 1,
        });
      };
    return (
      
      <div className="modal-overlay" onClick={closeModal} >
        <div className="modal-content download-popup">
            
            <div className="modal-header">
                <div className="download-container">
                    <div className="download-preview">
                        <img src={image} className='img-fit' alt="" />
                    </div>
                </div>
            </div>
            <a href={url} download className="modal-button" onClick={()=>{
                if(targetEvent && targetEvent!=='')
                {
                    triggerEvent(targetEvent,'File_download')
                }
            }}>{t('DownloadPopup.ButtonText')}</a>
        </div>
    </div>
    );
  }