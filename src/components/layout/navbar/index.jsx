// const handleChangeLanguage = (lang) => {
//   setLanguage(lang);
//   setShowPopup(false);
//   setIsMobileMenuOpen(false);
// };

// const { language, setLanguage } = useLanguage();
// const [showPopup, setShowPopup] = useState(false);

//   import { useLanguage } from '../../../common/i18n/languageContext';
// import languageData from '../../../common/utils/languageData';

import React from 'react'
import Logo from '../../../assets/favicon/icon.svg'
import '../../../common/style/root.css'

const Navbar = () => {
    return (
        <div>
            <div className="Navbar-Group">
                <div className="Secondary-Navbar">

                </div>

                <div className="Primary-Navbar">
                    <img src={Logo} alt="Absheron Career Center" />
                </div>

                <div className="Main-Button">
                    <p>Sign up</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar