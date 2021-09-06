import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import './i18n'

ReactDOM.render(
  <Suspense fallback="loading">
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Suspense>,

  document.getElementById('root')
);