import React from 'react';
import './App.css';
import injectContext from './Store/appContext';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Component/Home.js';

function App() {
  return (
    <div className="App">
     	<BrowserRouter>
			  <Routes>
			    <Route path='/' element={  <Home /> }/>
			  </Routes>
		   </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
