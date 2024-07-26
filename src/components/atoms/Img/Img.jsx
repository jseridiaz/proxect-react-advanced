import React from "react"
import styled from "styled-components"

const ImgHero = ({ img, alt, idName }) => {
   return (
      <ContainerImg>
         <img id={idName} src={img} alt={alt} draggable={false} loading='lazy' />
      </ContainerImg>
   )
}

const ContainerImg = styled.div`
   display: flex;
   background-color: transparent;
   width: 335px;
   height: 400px;
   > img {
      width: 100%;
      height: 100%;
   }
`

export default ImgHero
