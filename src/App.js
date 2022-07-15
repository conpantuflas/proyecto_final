import React from 'react';
import './App.css';
import injectContext from './Store/appContext';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Component/Home.js';
import Header from './Component/Header.js';


function App() {
  return (
    <div className="App">
     	<BrowserRouter>
			  <Routes>
			    <Route path='/' element={  <Home /> }/>
			  </Routes>
		   </BrowserRouter>
		   <Header/>
    </div>
  );
}

export default injectContext(App);
