import React from "react";
import { HashRouter, Route } from "react-router-dom";
//cmps
import Navbar from './Components/Navbar'
//Pages
import MainPage from './Pages/MainPage'
import UserPage from './Pages/UserPage'

import SignUpPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage';
// import HomePage from './Pages/HomePage';

const Router = () => {
  return (
    <HashRouter>
     <Navbar/>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/user/:userId" component={UserPage} />
      <Route exact path="/" component={MainPage} />

    </HashRouter>
  );
};
export default Router;
