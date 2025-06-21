// const handleChangeLanguage = (lang) => {
//   setLanguage(lang);
//   setShowPopup(false);
//   setIsMobileMenuOpen(false);
// };

// const { language, setLanguage } = useLanguage();
// const [showPopup, setShowPopup] = useState(false);

// import { useLanguage } from '../../../common/i18n/languageContext';
// import languageData from '../../../common/utils/languageData';

import React, { useEffect, useState } from 'react';
import '../../../common/style/root.css';
import MainButton from '../../elements/buttons';
import CallTicker from '../../elements/tickers/call';
import NewsTicker from '../../elements/tickers/news';
import VacancyTicker from '../../elements/tickers/vacancy';
import LanguageTicker from '../../elements/tickers/language';
import ThemeTicker from '../../elements/tickers/theme';
import LogoMark from '../../elements/logo';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className="Navbar-Group">
                <div className={`Secondary-Navbar ${scrolled ? 'Hidden-Secondary' : ''}`}>
                    <div className="Nav-Secondary-First-Section">
                        <CallTicker />
                        <NewsTicker />
                        <VacancyTicker />
                    </div>

                    <div className="Nav-Secondary-Last-Section">
                        <LanguageTicker />
                        <ThemeTicker />
                    </div>

                    <div className="hr Nav-hr"></div>
                </div>

                <div className={`Primary-Navbar ${scrolled ? 'Scrolled' : ''}`}>
                    <div className="Nav-Primary-First-Section">
                        <LogoMark />
                    </div>
                    <div className="Nav-Primary-Last-Section">
                        <MainButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
