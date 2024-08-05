import { useContext } from "react"
import styled from "styled-components"

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

   const { cart } = useContext(CartContext)

   const handleNav = () => setBoolean()

   return (
      <>
         <Header $menu={boolean} $cartNumber={cart?.length}>
            <LogoTitle>
               <Li text='LinkFashion Store' />
            </LogoTitle>
            <List
               arrayList={arrayListHeader}
               isDisabled={true}
               idName='container-li-clothes'
            />
            <List
               arrayList={arraySvgHeader}
               button={false}
               array={arrayLinksheader}
               title={true}
               idName='container-icons'
            ></List>
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
   background-color: var(--jd-bg-terciray);
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
      right: -6px;
      top: -14px;
      display: ${({ $cartNumber }) => ($cartNumber === 0 ? "none" : "block")};
   }

   @media (max-width: 926px) {
      gap: var(--jd-gap-l);
      flex-wrap: wrap;
      > [id="menu-mobile"] {
         display: flex;
         position: absolute;
         right: 2%;
      }
      > [id="container-li-clothes"] {
         border-top: 4px solid var(--jd-bgcolor-primary);
         transform-origin: right;
         position: absolute;
         min-width: 0px;
         width: 50%;
         transform: ${({ $menu }) => ($menu ? "scaleX(1)" : "scalex(0)")};
         align-items: center;
         top: 100%;
         padding: var(--jd-padding-m);
         background-color: var(--jd-bgcolor-primary);
         right: 0px;
         height: 85svh;
         transition: all 0.3s ease;
         > ul {
            height: 100%;
            align-items: space-around;
            flex-direction: column;
         }
      }
      > [id="container-icons"] {
         margin-right: 15%;
      }
   }
   @media (width<516px) {
      height: 130px;
      gap: 0px;
      > [id="container-li-clothes"] {
         width: 100%;
         top: 100%;
      }
      > [id="container-icons"] {
         width: 80%;
         > ul {
            justify-content: center;
         }
      }
      [id="cart-number"] {
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
