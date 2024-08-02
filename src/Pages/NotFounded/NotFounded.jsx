import React from "react"
import styled from "styled-components"

import Button from "../../components/atoms/button/button"
import H2 from "../../components/atoms/H2/H2"
import Parraf from "../../components/atoms/Parraf/Parraf"
import { ShopSection } from "../Cart/Cart"

const NotFounded = () => {
   return (
      <>
         <NotFoundedContainer>
            <img
               id='picture-404-1'
               src='/img/error404.avif'
               alt='picture-describing-error404-not-founded'
               loading='lazy'
            />
            <H2>Page Not Founded</H2>
            <Parraf>Error 404 </Parraf>
            <Button goTo='/home'>Go Home</Button>
         </NotFoundedContainer>
      </>
   )
}

export default NotFounded

const NotFoundedContainer = styled(ShopSection)`
   top: 10%;
   width: 100%;
   justify-content: center;
   margin-top: var(--jd-margin-xs);
   > [id="picture-404-1"] {
      position: absolute;
      z-index: -1;
      top: 14%;
      width: 50%;
      opacity: 0.7;
      object-fit: cover;
      left: 0%;
   }
   * {
      position: relative;
      left: 20%;
   }
   > h2 {
      font-size: 60px;
      color: grey;
   }
   > p {
      font-size: 30px;
      font-weight: 600;
      text-decoration: underline;
   }
   > a {
      background-color: black;
      margin-top: var(--jd-margin-xxl);
   }
`
