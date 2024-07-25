import { Link } from "react-router-dom"
import styled from "styled-components"

const Li = ({ text, children = null, to }) => {
   return (
      <StyledLi to={to} $title>
         {text || children}
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
`
