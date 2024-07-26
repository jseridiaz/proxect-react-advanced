import { Link } from "react-router-dom"
import styled from "styled-components"

const Li = ({ text = null, children, to, className }) => {
   return (
      <StyledLi className={className} to={to}>
         {text}
         {children}
      </StyledLi>
   )
}
export default Li
export const StyledLi = styled(Link)`
   display: flex;
   color: black;
   width: fit-content;
   height: fit-content;
   font-size: 20px;
   &.btn-card {
      position: absolute;
      bottom: 0;
      background-color: transparent;
   }
   &.link-button {
      display: flex;
      height: 61px;
      width: 200px;
      color: white;
      border: 1px solid white;
      justify-content: center;
      align-items: center;
      border-radius: 54px;
      > div {
         width: 41.33px;
         height: 30.32px;
      }
   }
`
