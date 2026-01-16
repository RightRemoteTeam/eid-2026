import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate,useParams } from 'react-router-dom'
import ENV from "../Constants"
export default function Local() {
    const {i18n} = useTranslation();
    const navigate=useNavigate();
    const {lang} =useParams()
    useEffect(() => {
        if(lang){
            i18n.changeLanguage(lang)
            navigate(lang)
        }
        else{
            i18n.changeLanguage(ENV.APP_LANG)
            navigate(ENV.APP_LANG)
        }
    }, [lang])
    
  return (
    <div>

    </div>
  )
}