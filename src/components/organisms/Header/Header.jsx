import styled from "styled-components"

import { Flex } from "../../../App"
import {
   arrayListHeader,
   arraySvgHeader,
} from "../../../data/arrayListHeader/arrayListHeader"
import Button from "../../atoms/button/button"
import Li from "../../atoms/Li/Li"
import LogoTitle from "../../atoms/LogoTitle/LogoTitle"
import List from "../../molecules/List/List"

const Header1 = () => {
   return (
      <>
         <Flex id='shadow-header' />
         <Header>
            <LogoTitle>
               <Li text='LinkFashion Store' />
            </LogoTitle>
            <List arrayList={arrayListHeader} idName='container-li-clothes' />
            <List
               arrayList={arraySvgHeader}
               button={true}
               idName='container-icons'
            />
            <Button id='menu-mobile'>
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

   @media (max-width: 860px) {
      gap: var(--jd-gap-s);
      flex-wrap: wrap;
      > [id="menu-mobile"] {
         display: flex;
         position: absolute;
         right: 5%;
      }

      > [id="container-li-clothes"] {
         position: absolute;
         min-width: 0px;
         width: 50%;
         transform: scaleX(0);
         align-items: center;
         margin-top: 700px;
         padding: var(--jd-padding-m);
         background-color: var(--jd-bg-secundary);
         right: 0px;
         height: 100svh;
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
