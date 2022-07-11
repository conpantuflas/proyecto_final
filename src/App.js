import React from 'react';
import './App.css';
import injectContext from './Store/appContext';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ViewRecipe from './Views/ViewRecipe';
import CreateRecipe from './Component/CreateRecipe/CreateRecipe';
import "bootstrap/dist/css/bootstrap.min.css";
import Carrusel from './Component/Carrusel/carrusel';
import Favoritos from './Component/Favoritos/Favoritos';
import Home from './Views/Home';

function App() {
  return (
    <div className="App">
     	<BrowserRouter>
			  <Routes>
          <Route path='/viewrecipe' element={  <ViewRecipe /> }/>
          <Route path='/createrecipe' element={  <CreateRecipe /> }/>
          <Route path='/carrusel' element={  <Carrusel /> }/>
          <Route path='/favoritos' element={  <Favoritos /> }/>
          <Route path='/' element={  <Home /> }/>
			  </Routes>
		   </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
