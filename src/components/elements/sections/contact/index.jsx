import React from 'react'
import { useLanguage } from '../../../../common/i18n';

const ContactItem = () => {
    const { translations } = useLanguage();
  return (
    <div>{translations.contactItem}</div>
  )
}

export default ContactItem