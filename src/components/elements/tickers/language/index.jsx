import React, { useState, useRef, useEffect } from 'react';
import LanguageIcon from '../../../../assets/svg/globe.svg';
import languageData from '../../../../common/utils/languageData';
import { useLanguage } from '../../../../common/i18n';

const LanguageTicker = () => {
  const { language, setLanguage, translations } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const handleChange = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const togglePopup = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="Ticker-Group" ref={popupRef}>
      <div className="language-trigger" onClick={togglePopup}>
        <img src={LanguageIcon} className="No-Select" />
        <p>{translations.chooseLanguage}</p>
      </div>

      {isOpen && (
        <div className="Main-Popup">
          {languageData.map((lang) => (
            <div
              key={lang.code}
              className={`Popup-Item ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleChange(lang.code)}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageTicker;