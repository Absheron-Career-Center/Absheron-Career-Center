import React from 'react';
import VacancyTickerIcon from '../../../../assets/svg/suitcase.svg';
import { useLanguage } from '../../../../common/i18n'; 

const VacancyTicker = () => {
  const { translations } = useLanguage();

  return (
    <div className="Ticker-Group">
      <img src={VacancyTickerIcon} className="No-Select" />
      <p>{translations.vacancyTitle}</p>
    </div>
  );
};

export default VacancyTicker;
