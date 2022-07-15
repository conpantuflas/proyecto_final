import React from 'react';
import './App.css';
import injectContext from './Store/appContext';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Component/Home.js';
import Header from './Component/Header.js';
import Search from './Component/Search.js';


function App() {
  return (
    <div className="App">
     	<BrowserRouter>
			  <Routes>
			    <Route path='/' element={  <Home /> }/>
			  </Routes>
		   </BrowserRouter>
		   <Header/>
		   <Search/>
    </div>
  );
}

export default injectContext(App);
