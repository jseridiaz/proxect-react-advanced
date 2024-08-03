import React, { memo } from "react"
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
         object-fit: cover;
         width: 100%;
         height: 76.6%;
      }
   }
   /* &.card-single:last-child {
      > img {
         object-fit: fill;
         border-radius: var(--jd-br-l);
      }
   } */
   &.features-picture-container:not(:last-child) {
      width: 49%;
      position: relative;
      > div {
         gap: var(--jd-padding-m);
         padding: 30px;
         width: 80%;
         a {
            outline: 2px solid white;
            height: 50px;
            width: 40%;
            padding: var(--jd-padding-xs);
            font-weight: 500;
         }
      }
   }
   &.features-picture-container:last-child {
      width: 100%;
      height: 364px;
      position: relative;
      background-color: var(--jd-card-card-offer);
      border-radius: var(--jd-br-card);
      a {
         outline: 2px solid white;
      }
      > img {
         position: absolute;
         width: 32%;
         right: 0;
         top: 0;
      }
      > div {
         display: flex;
         flex-direction: column;
         justify-content: space-around;
         width: 65%;
         height: 100%;
         padding: var(--jd-padding-xl);
      }
   }
   @media (max-width: 1254px) {
      &[id="title-section-colection"] {
         grid-column: 1/-1;
      }
      &[id="container-picture-0"] {
         grid-column: 1/-1;
         min-height: 520px;
         > img {
            object-fit: cover;
         }
      }
      &[id="container-picture-1"] {
         grid-column: 1/-1;
         grid-row: 3/4;
      }
      &[id="container-picture-2"] {
         grid-column: 1/2;
         grid-row: 4/5;
      }
      &[id="container-picture-3"] {
         grid-column: 2/3;
         grid-row: 4/5;
      }
      &.features-picture-container:not(:last-child) {
         width: 90%;
      }
   }
   @media (width<1002px) {
      &.features-picture-container:last-child {
         height: 450px;
         > div {
            min-width: 490px;
         }
         > img {
            object-fit: cover;
            object-position: 10%;
         }
      }
   }
   @media (width<839px) {
      &.features-picture-container:last-child {
         height: 850px;
         flex-wrap: wrap;

         > div {
            min-width: 0px;
            width: 100%;
            height: 50%;
         }
         > img {
            border-radius: 20px 20px 0px 0px;
            align-self: start;
            position: relative;
            object-fit: fill;
            width: 100%;
            height: 50%;
         }
      }
   }
   @media (width<800px) {
      &.features-picture-container:not(:last-child) {
         > div {
            > h3 {
               font-size: 29px;
            }
         }
      }
   }
   @media (width<471px) {
      &[id="container-picture-0"],
      &[id="container-picture-1"],
      &[id="container-picture-2"],
      &[id="container-picture-3"] {
         > img {
            border-radius: var(--jd-br-card);
         }
         > div {
            width: 100%;
            padding-inline: var(--jd-padding-xs);
            > h3 {
               font-size: 25px;
            }
            > p {
               font-size: 14px;
            }
            > a {
               width: 35%;
               font-size: 15px;
            }
         }
      }
      &[id="container-picture-0"] {
         min-height: 0px;
         > img {
            object-fit: fill;
            object-position: 80%;
            height: 400px;
         }
      }
      &[id="container-picture-2"] {
         grid-column: 1/-1;
         grid-row: 4/5;
      }
      &[id="container-picture-3"] {
         grid-column: 1/-1;
         grid-row: 5/6;
      }
   }
   @media (width<438px) {
      &.card-single {
         width: 85%;
         > img {
            object-fit: cover;
         }
      }
      &.features-picture-container:not(:last-child) {
         > div {
            width: 100%;
            padding: var(--jd-padding-xs);
         }
      }
      &.features-picture-container:last-child {
         height: 800px;
         > img {
            height: 40%;
         }
         > div {
            height: 65%;
            > h3 {
               font-size: 30px;
            }
            > p {
               font-size: 17px;
            }
         }
      }
   }
`

export default memo(ImgHero)
