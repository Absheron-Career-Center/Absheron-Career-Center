import React from 'react'
import { useLanguage } from '../../../../common/i18n';

const ContactItem = () => {
    const { translations } = useLanguage();
  return (
    <div className='Main-Text-Accessibility'>{translations.contactItem}</div>
  )
}

export default ContactItem