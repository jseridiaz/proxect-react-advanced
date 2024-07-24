import React from "react"
import { Route, Routes } from "react-router-dom"

import Article from "./Pages/Article/Article"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Shop from "./Pages/Shop/Shop"

const App = () => {
   return (
      <>
         <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:id' element={<Article />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
         </Routes>
      </>
   )
}

export default App
