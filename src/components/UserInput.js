import React, { useState } from 'react'
import { fetchForecasts, setIsFetching } from '../redux/actions/homeActions'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';


const UserInput = () => {
    const [cityName, setCityName] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const onChangeHandler = (event) => {
        const { value } = event.target;
        const regex = /^[a-zA-Z]+$/ // only lettters
        if (regex.test(value) || value === '') {
            setErrorMsg('')
            return setCityName(value)
        }
        return setErrorMsg(t('only_letters_error'))
    }

    const getWeather = async (event) => {
        event.preventDefault()
        if (cityName === '') {
            return setErrorMsg(t('empty_string_error'))
        }
        setErrorMsg('')
        // dispatch(setIsFetching(true))
        dispatch(fetchForecasts(cityName))
        // dispatch(setIsFetching(false))
    }

    return (
        <div className='app__search-container'>
            <div className='app__search'>
                <input className='app__search-input' value={cityName} type='text' placeholder={t('input_city')} onChange={onChangeHandler} />
                <button className='app__search-btn' onClick={getWeather}>{t('search')}</button>
            </div>
            <p className='app__search-error'>{errorMsg}</p>
        </div>
    )
}

export default UserInput
