import  React from "react";
import {render} from 'react-dom';
import {Router} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from './routes';

const history = createBrowserHistory();
if(typeof document !== 'undefined' && window) {
  window.onload = ()=>{
    render(
      <Router history={history} routes={routes} />,
      document.getElementById("app")
    )
    window.history = history;
  }
}
