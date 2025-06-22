import React from 'react'
import { useLanguage } from '../../../../common/i18n';
const OpportunityItem = () => {
      const { translations } = useLanguage();
  return (
    <div>{translations.opportunityItem}</div>
  )
}

export default OpportunityItem