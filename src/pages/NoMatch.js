import React from 'react';
import './../scss/noMatch.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Path1 } from './../assets/images/liveBG2.svg';
import { useTranslation } from 'react-i18next';

function NoMatch() {
  const { t } = useTranslation()
  return (
    <>
      <section id='error-404'>
        <Path1 className='error-404-bg' />
        <div className='error-404-contnent'>
          <h3>{t('oops')}</h3>
          <h1>404</h1>
          <h2>{t('errors')}</h2>
          <h4>{t('not_found')}</h4>
          <Link to='/'>
            <button className='web-button-404'>{t('home_pages')}</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default NoMatch;
