import "./App.css"

import { Route, Routes } from "react-router-dom"
import styled from "styled-components"

import Header1 from "./components/organisms/Header/Header"
import Article from "./Pages/Article/Article"
import Cart from "./Pages/Cart/Cart"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import NotFounded from "./Pages/NotFounded/NotFounded"
import Register from "./Pages/Register/Register"
import Shop from "./Pages/Shop/Shop"

const App = () => {
   return (
      <>
         <Header1 />
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
export const Flex = styled.div`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   align-items: center;
   &[id="shadow-header"] {
      position: absolute;
      z-index: 0;
      top: 80px;
      width: 100svw;
      height: 110px;
      background: rgb(217, 217, 217);
      background: linear-gradient(
         180deg,
         rgba(217, 217, 217, 1) 0%,
         rgba(255, 255, 255, 1) 90%
      );
      left: 0;
   }
`
