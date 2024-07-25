import React from "react"
import styled from "styled-components"

const Home = () => {
   return (
      <Hero>
         <p>Experience fashion like never before</p>
         <h2>Elevate Your Style With Fashion Store: Where Fashion Meets Passion</h2>
      </Hero>
   )
}

export default Home
const Hero = styled.section`
   position: relative;
   margin-top: 60px;
   display: flex;
   flex-direction: column;
   height: 400px;
   > p:first-child {
      font-size: 16px;
      font-weight: 500;
   }
   > h2 {
      font-size: 42px;
      font-family: "Playfair Display", serif;
   }
`
