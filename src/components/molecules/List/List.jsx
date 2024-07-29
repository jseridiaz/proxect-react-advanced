import React from "react"
import styled from "styled-components"

import Button from "../../atoms/button/button"
import Li from "../../atoms/Li/Li"

const List = ({
   arrayList,
   button = false,
   textBtn = false,
   idName = null,
   goTo = "/shop",
}) => {
   return (
      <NavStyled id={idName}>
         <Ul as='ul'>
            {arrayList.map((el, index) => (
               <li key={el}>
                  {!button ? (
                     <Li key={`${el}-li`} to={goTo}>
                        {el}
                     </Li>
                  ) : (
                     <Button key={textBtn ? el + index : el.alt}>
                        {textBtn && el}
                        {el.svg}
                     </Button>
                  )}
               </li>
            ))}
         </Ul>
      </NavStyled>
   )
}

export default List
const NavStyled = styled.nav`
   display: flex;
   width: fit-content;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   &[id="container-li-clothes"] {
      width: 50%;
      min-width: 317px;
      > ul {
         justify-content: space-evenly;
         li {
            transition: all 2s linear;
            position: relative;
            /* &:hover {
               text-decoration: underline;
            } */
            &::after {
               content: "";
               position: absolute;
               bottom: 10%;
               left: 0;
               width: 100%;
               height: 1.7px;
               background-color: black;
               color: black;
               transform: scaleX(0);
               transform-origin: left;
               transition: all 0.1s linear;
            }
            &:hover::after {
               transform: scaleX(1);
            }
         }
      }
   }
   &[id="container-icons"] {
      position: relative;
      right: 3%;
      > ul {
         flex-wrap: nowrap;
         > li {
            width: 40px;
         }
      }
   }
   @media (max-width: 860px) {
      &[id="container-li-clothes"] {
         position: relative;

         > ul {
            flex-direction: column;
         }
      }
      &[id="container-icons"] {
         order: 1;
         right: 0px;
      }
   }
`

const Ul = styled(NavStyled)`
   gap: var(--jd-gap-m);
   font-weight: bold;
   width: 100%;
   justify-content: space-around;

   @media (width<380px) {
      padding: var(--jd-padding-xs);
   }
`
