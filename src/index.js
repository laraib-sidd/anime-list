import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './Containers/App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import {searchRobots} from './reducer';

const store = createStore(searchRobots);

ReactDOM.render(
  <React.StrictMode>
  <Provider>
    <App store={store}/>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
