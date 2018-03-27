// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Components/App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware} from 'redux' //redux directly sends action to store
import reduxThunk from 'redux-thunk'  //thunk allows action passed to dispatch function first
import registerServiceWorker from './registerServiceWorker';

//import 'normalize.css'

import App from './Components/App'
import reducers from './Reducers'
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,

  document.querySelector('#root'))


registerServiceWorker();
