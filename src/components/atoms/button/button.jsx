import styled from "styled-components"

import Li from "../Li/Li"
export const colours = ["#0000ff", "#00ff26", "#ee2e2e"]
const Button = ({
   id,
   text = null,
   children = null,
   bgColor,
   fontColor,
   goTo = false,
}) => (
   <>
      {goTo ? (
         <Li id={id} className='link-button' to={goTo}>
            {text}
            {children}
         </Li>
      ) : (
         <StyledButton id={id} $primary={bgColor} $color={fontColor}>
            {text}
            {children}
         </StyledButton>
      )}
   </>
)

const StyledButton = styled.button`
   background-color: ${({ $primary }) => ($primary ? $primary : "transparent")};
   width: fit-content;
   height: fit-content;
   color: ${({ $color }) => $color || "black"};
   cursor: pointer;
   align-content: center;
   border-radius: 4px;
   transition: all 0.5s ease;
   font-weight: 500;
   border: none;

   &[id="btn-main-cta"] {
      display: flex;
      justify-content: center;
      width: 232px;
      border-radius: 50px;
      height: 63px;
      text-align: center;
      align-items: center;
      a {
         color: white;
      }
   }
   &:hover {
      transform: scale(1.05);
   }

   /* &[id="btn-main-cta"]{
      ba
   } */
`
export default Button
