import React from 'react'
import './../scss/cardItem.scss'



function CardItem({ dayForecast, changeHandler }) {
    const { Day, Temperature } = dayForecast
    let transformedDate = new Date(dayForecast.Date).toString().split(' ').splice(0, 3);
    let iconNumber = '0'
    const { Maximum, Minimum } = Temperature
    const { IconPhrase, Icon } = Day
    if (Icon < 10) {
        iconNumber += Icon
    } else {
        iconNumber = Icon
    }
    return (
        <article className='cardItem' onClick={() => changeHandler(dayForecast)}>
            <h1 className='cardItem__day'>{transformedDate[0]}</h1>
            <p className='cardItem__dayData'>{`${transformedDate[2]} ${transformedDate[1]}`}</p>
            <img className='cardItem__icon' src={`https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`} alt='icon' />
            <p className='cardItem__dayData'>+{Math.floor(Maximum.Value)}<sup>o</sup> +{Math.floor(Minimum.Value)}<sup>o</sup></p>
            <p className='cardItem__dayData'>{IconPhrase}</p>
        </article>
    )
}

export default CardItem