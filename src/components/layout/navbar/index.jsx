import React, { useEffect, useState } from 'react';
import '../../../common/style/root.css';
import MainButton from '../../elements/buttons';
import CallTicker from '../../elements/tickers/call';
import NewsTicker from '../../elements/tickers/news';
import VacancyTicker from '../../elements/tickers/vacancy';
import LanguageTicker from '../../elements/tickers/language';
import ThemeTicker from '../../elements/tickers/theme';
import LogoMark from '../../elements/logo';
import AboutUsItem from '../../elements/sections/aboutUs';
import OpportunityItem from '../../elements/sections/opportunity';
import ActivitiesItem from '../../elements/sections/activities';
import BlogPostItem from '../../elements/sections/blogPost';
import ContactItem from '../../elements/sections/contact';


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
                        <AboutUsItem />
                        <OpportunityItem />
                        <ActivitiesItem />
                        <BlogPostItem />
                        <ContactItem />
                        <MainButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
