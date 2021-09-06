import React from 'react'
import { useTranslation } from 'react-i18next';


const SoloCardItem = ({ dayForecast, cityName }) => {
    let iconNumber = '0'
    const { Day, Temperature } = dayForecast
    let transformedDate = new Date(dayForecast.Date).toString().split(' ').splice(0, 3);
    const { Maximum, Minimum } = Temperature
    const { IconPhrase, Icon } = Day
    if (Icon < 10) {
        iconNumber += Icon
    } else {
        iconNumber = Icon
    }
    const { t } = useTranslation()
    return (
        <div className='app__content'>
            <div className='data__container'>
                <div className='dayData__container'>
                    <h1 className='dayData__location'>{cityName}</h1>
                    <p className='dayData__day'>{`${transformedDate[0]}, ${transformedDate[2]} ${transformedDate[1]}`}</p>
                </div>
                <div className='degree'>
                    <h2 className='degree__number'>+ {Math.floor(Maximum.Value)}<sup>o</sup></h2>
                    <div className='degree__container'>
                        <h3 className='degree__title'>{IconPhrase}</h3>
                        <p className='degree__subTitlte'>{t('feels_like')} {Math.floor(Minimum.Value)}<sup>o</sup></p>
                    </div>
                </div>
            </div>
            <img src={`https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`} className='weather-icon' alt='sun icon' />
        </div>
    )
}

export default SoloCardItem
