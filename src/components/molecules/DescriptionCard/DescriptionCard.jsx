import React from "react"
import styled from "styled-components"

import Button from "../../atoms/button/button"

const DescriptionCard = ({ name, infoArticle }) => {
   return (
      <ContainerDescription>
         <div>
            <h4>{name}</h4>
            <p>{infoArticle}</p>
         </div>

         <Button>
            <img
               src='https://res.cloudinary.com/ddybbosdk/image/upload/v1721998538/Proyect%2012%20react/Resources/Shopping_bag_zxoiz1.webp'
               alt='icon-take-in-cart'
            />
         </Button>
      </ContainerDescription>
   )
}

export default DescriptionCard
const ContainerDescription = styled.div`
   position: absolute;
   display: flex;
   bottom: 0;
   background-color: var(--jd-bg-card);
   width: 100%;
   height: 100px;
   justify-content: space-between;
   align-items: center;
   padding-inline: var(--jd-padding-l);
   border-radius: 0px 0px 20px 20px;
   * {
      font-family: "Inter", sans-serif;
   }
   > div {
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: var(--jd-gap-s);
   }
   button {
      transform: translateY(25%);
   }
`
