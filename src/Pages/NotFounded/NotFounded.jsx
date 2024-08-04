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
            <H2 id='title-not-founded-page'>Page Not Founded</H2>
            <Parraf>Error 404 </Parraf>
            <Button id='go-home-btn' goTo='/home'>
               Go Home
            </Button>
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
   > [id="title-not-founded-page"] {
      background-color: transparent;
      font-size: 60px;
      color: grey;
      width: 50%;
   }
   > p {
      font-size: 30px;
      font-weight: 600;
      text-decoration: underline;
   }
   > a {
      padding: var(--jd-padding-s);
      font-weight: 600;
      border-radius: var(--jd-br-s);
      background-color: var(--jd-btn-primary);
      margin-top: var(--jd-margin-xxl);
   }
   @media (width<960px) {
      > [id="picture-404-1"] {
         width: 80%;
         left: 50%;
         height: 100%;
         transform: translate(-50%);
      }
      h2 {
         margin-bottom: calc(var(--jd-margin-xxl) * 1.4);
         padding-inline: var(--jd-padding-s);
      }
      > *:not([id="picture-404-1"]) {
         left: 0px;
         width: 90%;
      }
      > p {
         display: none;
      }
      > a#go-home-btn {
         width: 40%;
      }
   }
   @media (width<516px) {
      > [id="picture-404-1"] {
         object-fit: cover;
         height: 80%;
         width: 100%;
         top: 21%;
      }
      > h2[id="title-not-founded-page"] {
         position: absolute;
         top: 14%;
         width: 100%;
         font-size: 39px;
      }
      > a[id="go-home-btn"] {
         position: absolute;
         bottom: 0%;
         left: 50%;
         transform: translate(-50%);
         padding: var(--jd-padding-s);
         font-weight: 600;
         border-radius: var(--jd-br-s);
         background-color: var(--jd-btn-primary);
      }
   }
`
