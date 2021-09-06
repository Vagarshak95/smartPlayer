import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CardItem from './cardItem'
import SoloCardItem from './SoloCardItem'
import { setCurrentForecast } from '../redux/actions/homeActions'
import { useTranslation } from 'react-i18next';


const CardItems = () => {

    const { currentCityName, currentForecast, dailyForecasts, isFive, errorMSG } = useSelector((state) => state.homeReducer)
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const currentForecastChangeHandler = (currentForecast) => {
        dispatch(setCurrentForecast(currentForecast))
    }

    return (
        <>
            {dailyForecasts.length > 0 ?
                <>
                    <SoloCardItem dayForecast={currentForecast} cityName={currentCityName} />
                    {isFive ?
                        <section className='daysData__container'>
                            {dailyForecasts.map((day, index) => {
                                return <CardItem key={index} dayForecast={day} changeHandler={currentForecastChangeHandler} />
                            })}
                        </section> : null
                    }
                </> :
                <p className='app_empty-list'>{t(errorMSG)}</p>
            }
        </>
    )
}

export default CardItems
