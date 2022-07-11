import React from 'react';
import './App.css';
import injectContext from './Store/appContext';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Component/Home.js';
import ViewRecipe from './Views/ViewRecipe';
import CreateRecipe from './Component/CreateRecipe/CreateRecipe';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
     	<BrowserRouter>
			  <Routes>
			    <Route path='/' element={  <Home /> }/>
          <Route path='/viewrecipe' element={  <ViewRecipe /> }/>
          <Route path='/CreateRecipe' element={  <CreateRecipe /> }/>
			  </Routes>
		   </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
