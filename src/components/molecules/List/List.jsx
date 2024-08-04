import { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "../../../utils/useContext/useContextCart"
import Button from "../../atoms/button/button"
import Li from "../../atoms/Li/Li"

const List = ({
   arrayList,
   button = false,
   textBtn = false,
   idName = null,
   array,
   title,
   children,
   isDisabled,
}) => {
   const { cart } = useContext(CartContext)
   return (
      <NavStyled id={idName}>
         <Ul as='ul'>
            {arrayList.map((el, index) => (
               <li key={`${index}`} title={title && array[index].slice(1)}>
                  {!button ? (
                     <Li
                        key={`${el || index}-li`}
                        to={array ? array[index] : "/shop"}
                        disabled={isDisabled}
                     >
                        {el.svg || el}
                        {el.alt == "shopping-cart" ? (
                           <div id='cart-number'>
                              {cart.lengt == 0 ? null : cart.length}
                           </div>
                        ) : null}
                     </Li>
                  ) : (
                     <Button key={textBtn ? el + index : el.alt}>
                        {textBtn && el}
                        {el.svg}
                     </Button>
                  )}
               </li>
            ))}
            {children}
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
            display: flex;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            transition: all 0.7s ease;
            justify-content: center;
            align-items: center;
            &:hover {
               background-color: var(--jd-bgcolor-primary);
            }
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
