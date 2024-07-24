import styled from "styled-components"
export const colours = ["#0000ff", "#00ff26", "#ee2e2e"]

const Button = styled.button`
   background-color: ${({ $primary }) => $primary};
   width: 150px;
   color: #ee6e2e;
   cursor: pointer;
   border-radius: 4px;
   transition: all 0.5s ease;
   font-weight: 700;
   border: none;
   box-shadow: 0px 1px 4px -2px black;

   &:hover {
      transform: scale(1.05);
   }
`
export default Button
