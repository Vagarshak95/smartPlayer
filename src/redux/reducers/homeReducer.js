import * as actionTypes from '../actionTypes'
const initialState = {
    dailyForecasts: [],
    currentCityName: '',
    currentForecast: null,
    isFetching: false,
    isFive: false,
    errorMSG: 'empty_list'
};

const homeReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_DAILY_FORECASTS: {
            const { forecasts, currentCityName } = action.payload
            return {
                ...state,
                dailyForecasts: forecasts,
                currentCityName: currentCityName,
                currentForecast: forecasts[0],
                errorMSG: 'empty_list'
            }
        }
        case actionTypes.SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case actionTypes.CHANGE_CURRENT_FORECAST: {
            return {
                ...state,
                currentForecast: action.payload
            }
        }
        case actionTypes.SET_IS_FIVE: {
            return {
                ...state,
                isFive: !state.isFive
            }
        }
        case actionTypes.SET_ERROR: {
            return {
                ...state,
                errorMSG: action.payload,
                dailyForecasts: [],
                currentCityName: '',
                currentForecast: null,
            }
        }
        default: {
            return state
        }
    }

}

export default homeReducer