import { useContext } from "react"
import styled from "styled-components"

import { Flex } from "../../../App"
import {
   arrayListHeader,
   arraySvgHeader,
} from "../../../data/arrayListHeader/arrayListHeader"
import { arrayLinksheader } from "../../../data/header/arrayLinksHeader"
import useBoolean from "../../../utils/customHooks/useBoolean/useBoolean"
import { CartContext } from "../../../utils/useContext/useContextCart"
import Button from "../../atoms/button/button"
import Li from "../../atoms/Li/Li"
import LogoTitle from "../../atoms/LogoTitle/LogoTitle"
import List from "../../molecules/List/List"

const Header1 = () => {
   const [boolean, setBoolean] = useBoolean(false)

   const { cart, setCart } = useContext(CartContext)

   const handleNav = () => setBoolean()

   return (
      <>
         {console.log(boolean)}
         <Flex id='shadow-header' />
         <Header $menu={boolean} $cartNumber={cart.length}>
            <LogoTitle>
               <Li text='LinkFashion Store' />
            </LogoTitle>
            <List arrayList={arrayListHeader} idName='container-li-clothes' />
            <List
               arrayList={arraySvgHeader}
               button={false}
               array={arrayLinksheader}
               title={true}
               idName='container-icons'
            >
               {console.log(cart)}
               <p id='cart-number'>{cart.length}</p>
            </List>
            <Button id='menu-mobile' action={handleNav}>
               <img
                  src='https://res.cloudinary.com/ddybbosdk/image/upload/v1719609521/menu-burger_zieiqy.png'
                  alt='menu-mobile'
                  loading='lazy'
               />
            </Button>
         </Header>
      </>
   )
}

export default Header1

const Header = styled.header`
   position: relative;
   z-index: 10;
   display: flex;
   width: 100%;
   justify-content: space-between;
   height: 99px;
   align-items: center;
   gap: 100px;
   background-color: white;
   > [id="menu-mobile"] {
      width: 50px;
      height: 30px;
      cursor: pointer;
      display: none;
      > img {
         width: 100%;
         height: 100%;
      }
   }
   [id="cart-number"] {
      width: 20px;
      align-content: center;
      height: 20px;
      border-radius: 50%;
      background-color: #1044ff;
      font-weight: 400;
      color: white;
      position: absolute;
      font-size: 14px;
      right: 0px;
      top: -10px;
      display: ${({ $cartNumber }) => ($cartNumber === 0 ? "none" : "block")};
   }

   @media (max-width: 860px) {
      gap: var(--jd-gap-s);
      flex-wrap: wrap;
      > [id="menu-mobile"] {
         display: flex;
         position: absolute;
         right: 5%;
      }

      > [id="container-li-clothes"] {
         border-top: 4px solid var(--jd-bg-secundary);
         transform-origin: right;
         position: absolute;
         min-width: 0px;
         width: 50%;
         transform: ${({ $menu }) => ($menu ? "scaleX(1)" : "scalex(0)")};
         align-items: center;
         margin-top: 700px;
         padding: var(--jd-padding-m);
         background-color: var(--jd-bg-secundary);
         right: 0px;
         height: 100svh;
         transition: all 0.3s ease;
         > ul {
            height: 100%;
            align-items: space-around;
         }
      }
      > [id="container-icons"] {
         margin-right: 15%;
      }
   }
   @media (max-width: 452px) {
      align-content: center;
      justify-items: center;
      > [id="container-icons"] {
         display: flex;
         justify-content: center;
      }
   }
`
