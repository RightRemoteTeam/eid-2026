import React, { useState } from 'react';
import moonIcon from './../assets/images/moon.png';
import sunIcon from './../assets/images/sun.png';
import playIcon from './../assets/images/play.png'; // Import your play icon
import pauseIcon from './../assets/images/pause.png'; // Import your pause icon


export const ToggleThemeButton = ({ theme, toggleTheme }) => {
    
    const isDarkMode = theme === 'dark-mode';
    const icon = isDarkMode ? moonIcon : sunIcon;
  
    return (
        <div className={`toggle-button ${theme}`} onClick={toggleTheme}>
            <img src={icon} className="icon" alt="Toggle icon" />
        </div>
    );
};

export const AudioToggleButton = ({audioEnabled, setAudioEnabled}) => {
    // const [audioEnabled, setAudioEnabled] = useState(false);
    
    const playAudio = async () => {
        try {
            // await navigator.mediaDevices.getUserMedia({ audio: true });
            setAudioEnabled(true);
            // console.log('audio enabled');
        } catch (err) {
            setAudioEnabled(false);
            console.error('Could not get audio permission:', err);
            alert('Could not get audio permission:', err);
            // Handle permission denial
        }
    };

    const pauseAudio = async() => {
        setAudioEnabled(false);
        // console.log('audio disabled');
    };

    return (
        <div className="switch-container">
            <button className="switch-button" onClick={pauseAudio} disabled={!audioEnabled}>
                <img src={pauseIcon} alt="Pause audio" />
            </button>
            <button className="switch-button" onClick={playAudio} disabled={audioEnabled}>
                <img src={playIcon} alt="Play audio" />
            </button>
        </div>
    );
};
export const checkLang = (i18n,lang) => {
    if (lang==='en') {
        i18n.changeLanguage('en');
        document.body.classList.remove('rtl');
    }
    else if(lang==='ar')
    {
        i18n.changeLanguage('ar');
        document.body.classList.add('rtl');
    }
    else {
        i18n.changeLanguage('en');
        document.body.classList.remove('rtl');

    }
}

