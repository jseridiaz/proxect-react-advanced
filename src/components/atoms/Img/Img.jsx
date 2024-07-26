import React from "react"
import styled from "styled-components"

const ImgHero = ({ img, alt, idName, children, className, idNameContainer }) => {
   return (
      <ContainerImg className={className} id={idNameContainer}>
         <img id={idName} src={img} alt={alt} draggable={false} loading='lazy' />
         {children}
      </ContainerImg>
   )
}

const ContainerImg = styled.div`
   display: flex;
   background-color: transparent;
   justify-self: center;
   width: 335px;
   height: 100%;
   > img {
      width: 100%;
      height: 100%;
   }
   &.grid-pictures {
      position: relative;
   }
   &.arrow-navigate {
      background-color: #dad9d9;
   }
   &[id="container-picture-0"] {
      grid-column: 1/3;
      grid-row: 2/3;
      width: 100%;
      gap: var(--jd-gap-s);

      > a {
         position: absolute;
         right: 2.87%;
         top: 4.54%;
         width: 43px;
         height: 43px;

         * {
            width: 100%;
            height: 100%;
         }
         .arrow-navigate {
            border-radius: 50%;
         }
      }
   }
   &[id="container-picture-1"] {
      grid-column: 3/4;
      grid-row: 2/4;
      width: 100%;
      height: 100%;
      a {
         margin-top: var(--jd-margin-l);
      }
   }
   &[id="container-picture-2"] {
      grid-column: 1/2;
      grid-row: 3/4;
      width: 100%;
   }
   &[id="container-picture-3"] {
      grid-column: 2/3;
      grid-row: 3/4;
      width: 100%;
   }
   &[id="container-picture-0"] ~ div > div {
      padding-bottom: var(--jd-padding-m);
   }
   &.card-single {
      border: 1px solid black;
      position: relative;
      height: 425px;
      overflow: hidden;
      border-radius: var(--jd-br-card);
      > img {
         object-position: 50% 0%;
         object-fit: contain;
         width: 100%;
         height: 100%;
      }
   }
   &.card-single:last-child {
      > img {
         object-fit: fill;
         border-radius: var(--jd-br-l);
      }
   }
`

export default ImgHero
