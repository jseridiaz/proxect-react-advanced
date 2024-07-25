import styled from "styled-components"

import Li from "../Li/Li"

const LogoTitle = () => {
   return (
      <Li to='/home'>
         <Title>Fashion Store</Title>
      </Li>
   )
}
const Title = styled.h1`
   position: relative;
   left: 20%;
   font-family: "Kaushan Script", cursive;
   font-size: 40px;
   -webkit-text-stroke-width: 0.2px;
`
export default LogoTitle
