import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledNavLink = styled(NavLink)`
   background-color: red;
   padding: var(--jd-padding-xs);
   &.active {
      background-color: blue;
   }
   > svg {
      width: 20px;
   }
`
export default StyledNavLink
