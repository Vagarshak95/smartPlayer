
import React from 'react'

import ScrollToTop from './scrollToTop/ScrollToTop';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home'
import NoMatch from './pages/NoMatch';


function App() {
  return (
    <BrowserRouter>
      <div className='page' id='page'>
        <div id='routerContent'>
          <ScrollToTop />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
