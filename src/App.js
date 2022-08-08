import React from 'react'
import './App.css'
import injectContext from './Store/appContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ViewRecipe from './Views/ViewRecipe'
import CreateRecipe from './Component/CreateRecipe/CreateRecipe'
import 'bootstrap/dist/css/bootstrap.min.css'
import Favoritos from './Component/Favoritos/Favoritos'
import Home from './Views/Home'
import Navbar from './Component/Navbar/Navbar'
import CommentsRates from './Component/Comment_Rate/Comment_Rate'
import ModalSessionStart from './Component/modals/ModalSessionStart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/viewrecipe/:id" element={<ViewRecipe />} />
          <Route
            path="/viewrecipe/commentrate/:id"
            element={<CommentsRates />}
          />
          <Route path="/login" element={<ModalSessionStart />} />
          <Route path="/createrecipe" element={<CreateRecipe />} />
          {/* <Route path="/favoritos" element={<Favoritos />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default injectContext(App)
