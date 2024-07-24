import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"

import Button, { colours } from "./components/atoms/button/button"
import Header1 from "./components/organisms/Header/Header"
import Article from "./Pages/Article/Article"
import Cart from "./Pages/Cart/Cart"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import NotFounded from "./Pages/NotFounded/NotFounded"
import Register from "./Pages/Register/Register"
import Shop from "./Pages/Shop/Shop"

const App = () => {
   const [colourBtn, setColoutBtn] = useState()
   return (
      <>
         <Header1 />
         <Button
            $primary={colourBtn}
            onClick={() => {
               setColoutBtn(colours[Math.floor(Math.random() * colours.length)])
            }}
         >
            Click
         </Button>
         <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:id' element={<Article />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFounded />} />
         </Routes>
      </>
   )
}

export default App
