import axios from 'axios'
import i18next from 'i18next';

import * as actionTypes from '../actionTypes'
import { API_KEY } from '../../constants'

export const setForecasts = (currentData) => ({
    type: actionTypes.GET_DAILY_FORECASTS,
    payload: currentData,
});

export const setIsFetching = (isFetching) => ({
    type: actionTypes.SET_IS_FETCHING,
    payload: isFetching,
});

export const setError = (error) => ({
    type: actionTypes.SET_ERROR,
    payload: error,
});

export const setCurrentForecast = (currentForecast) => ({
    type: actionTypes.CHANGE_CURRENT_FORECAST,
    payload: currentForecast,
});

export const setIsFive = () => ({
    type: actionTypes.SET_IS_FIVE,
});

export const fetchForecasts = (cityName) => async (dispatch) => {
    dispatch(setIsFetching(true))
    try {
        const getKey = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`)
        if (getKey.data.length > 0) {
            const { data } = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${getKey.data[0].Key}?apikey=${API_KEY}&metric=true&language=${localStorage.getItem('i18nextLng')}`)
            dispatch(setForecasts({ forecasts: data.DailyForecasts, currentCityName: cityName }))
            dispatch(setIsFetching(false))
        } else {
            dispatch(setError('city_not_found'))
            dispatch(setIsFetching(false))
        }

    } catch (error) {
        dispatch(setError('network_error'))
        dispatch(setIsFetching(false))
    }
}