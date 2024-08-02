import "./App.css"

import { Route, Routes } from "react-router-dom"
import styled from "styled-components"

import FooterComponent from "./components/organisms/Footer/Footer"
import Header1 from "./components/organisms/Header/Header"
import Cart from "./Pages/Cart/Cart"
import Favourites from "./Pages/Favourites/Favourites"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import NotFounded from "./Pages/NotFounded/NotFounded"

const App = () => {
   return (
      <>
         <Header1 />
         <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFounded />} />
         </Routes>
         <FooterComponent />
      </>
   )
}

export default App
export const DisplayFlex = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

export const Flex = styled.div`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   align-items: center;
   &[id="shadow-header"] {
      position: absolute;
      z-index: 0;
      top: 80px;
      max-width: 100%;
      width: 100%;
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
