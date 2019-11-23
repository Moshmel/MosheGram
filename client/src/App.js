import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import AppBackgroud from './Components/AppBackground'
import Router from './Router';
import {store} from './store/Store';
function App() {
  return (
    <div className="app">

    <Provider store={store}>
    <Router/>
      <AppBackgroud/>
    </Provider>
    

    </div>
  );
}

export default App;
