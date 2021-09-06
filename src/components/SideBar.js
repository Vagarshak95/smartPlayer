import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsFive } from '../redux/actions/homeActions'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const SideBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isFive } = useSelector((state) => state.homeReducer)
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const dayChangeHandler = (event) => {
        event.preventDefault()
        dispatch(setIsFive())
        setMenuOpen(menuOpen => !menuOpen)
    }

    const lang = localStorage.getItem('i18nextLng')
    console.log(lang)
    const languageChangeHandler = (lng) => {
        i18next.changeLanguage(lng)
        window.location.reload()
    }

    return (
        <div className={` menu ${!menuOpen ? 'menu menuActive' : ''}`}>
            <div className='menu__arrow' onClick={() => setMenuOpen(menuOpen => !menuOpen)} />
            <div className='language__block'>
                <button className={`${lang === 'en' ? 'choosen_language' : ''} language__block-btn`} onClick={() => languageChangeHandler('en')}>{t('eng')}</button>
                <button className={`${lang === 'ru' ? 'choosen_language' : ''} language__block-btn`} onClick={() => languageChangeHandler('ru')}>{t('ru')}</button>
            </div>
            <button className='menu__btn' onClick={dayChangeHandler} >{!isFive ? t('show_all') : t('show_one')}</button>
        </div>
    )
}

export default SideBar
