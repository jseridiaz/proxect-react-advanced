import React from "react"
import styled from "styled-components"

import Li from "../Li/Li"

const Ul = ({ array, goTo, id, children, className, classAname }) => {
   return (
      <>
         <StyledUl id={id}>
            {children}
            {array.map((el, i) => (
               <li className={className} key={`li-to-${el}-${i}`}>
                  <Li className={classAname} to={goTo}>
                     {el}
                  </Li>
               </li>
            ))}
         </StyledUl>
      </>
   )
}

export default Ul

const StyledUl = styled.ul`
   display: flex;
   flex-direction: column;
   gap: var(--jd-gap-s);
   padding: var(--jd-padding-l);
   > li:first-child {
      margin-bottom: 10px;
      text-decoration: underline;
      font-weight: 600;
      font-size: 20px;
   }

   * {
      display: flex;
      flex-direction: column;
      align-items: start;
      color: white;
   }
   > li.li-footer {
      font-weight: 200;
      > a.a-li-footer {
         font-size: 18px;
      }
   }
`
