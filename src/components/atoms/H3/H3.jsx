import styled from "styled-components"
const H3 = ({ children }) => {
   return <StyledH3>{children}</StyledH3>
}
const StyledH3 = styled.h3`
   position: relative;
   width: 200px;
   font-family: "Playfair Display", sans-serif;
   font-size: 36px;
   font-weight: bold;
   color: white;
   width: fit-content;
   text-align: left;
   -webkit-text-stroke-width: 0px;
`

export default H3
