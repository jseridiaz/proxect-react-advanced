import styled from "styled-components"
export const colours = ["#0000ff", "#00ff26", "#ee2e2e"]
const Button = ({ text = null, children = null, bgColor }) => (
   <StyledButton $primary={bgColor}>{text || children}</StyledButton>
)

const StyledButton = styled.button`
   background-color: ${({ $primary }) => ($primary ? $primary : "transparent")};
   width: fit-content;
   height: fit-content;
   color: #ee6e2e;
   cursor: pointer;
   align-content: center;
   border-radius: 4px;
   transition: all 0.5s ease;
   font-weight: 700;
   border: none;

   &:hover {
      transform: scale(1.05);
   }
`
export default Button
