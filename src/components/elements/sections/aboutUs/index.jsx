import React from 'react'
import { useLanguage } from '../../../../common/i18n';
const AboutUsItem = () => {
    const { translations } = useLanguage();

    return (
        <div>{translations.aboutUsItem}</div>
    )
}

export default AboutUsItem