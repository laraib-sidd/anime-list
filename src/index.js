import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card'
// import App from './App';
import {anime} from './anime'
import 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Card name={anime[0].title} score={anime[0].score} url={anime[0].url}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
