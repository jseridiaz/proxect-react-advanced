import styled from "styled-components"

const Hero = styled.section`
   background-color: var(--jd-bgcolor-primary);
   overflow: hidden;
   display: flex;
   flex-direction: column;
   position: relative;
   width: 100%;
   max-width: 100svw;
   margin-inline: auto;
   align-items: center;
   justify-content: space-around;
   height: fit-content;
   [id="share"] {
      width: 100px;
      height: 100px;
      color: #d32f2f;
      background-color: #d24a4a;
   }
   > div {
      display: flex;
      flex-direction: column;
      width: 70%;
      margin-inline: auto;
      align-items: center;
      gap: var(--jd-gap-l);
      padding-bottom: var(--jd-padding-xxl);
      > p:first-child {
         user-select: none;
         margin-top: var(--jd-margin-m);
         font-size: 18px;
         background-color: white;

         font-weight: 500;
         padding-inline: var(--jd-padding-xs);
      }
      > h2 {
         font-size: 48px;
         font-weight: bold;
         font-family: "Playfair Display", serif;
         padding-inline: var(--jd-padding-s);
         width: 90%;
         border-radius: var(--jd-br-li);
         -webkit-text-stroke: 0.2px;
         line-height: 60px;
      }
      [id="description-hero"] {
         padding-inline: calc(var(--jd-padding-xxl) * 1.5);
         width: 90%;
         font-size: 18px;
         font-weight: 500;
         line-height: 20.3px;
         letter-spacing: 0.35px;
         color: rgba(0, 0, 0, 0.75);
      }
      [id="btn-main-cta"] {
         display: flex;
         align-items: center;
         margin-top: var(--jd-margin-m);
         height: 63px;
         width: 25%;
         justify-content: center;
         color: #f6f6f6;
         border-radius: calc(var(--jd-br-s) * 3);
         font-weight: 500;
         letter-spacing: 1px;
         background-color: var(--jd-btn-primary);
      }
   }
   [id="effect-rounded"] {
      background-color: var(--jd-bgcolor-primary);
      border-radius: 50%;
      position: absolute;
      width: 202.0599%;
      bottom: -55.7%;
      height: 611.3px;
   }
   @media (width<1414px) {
      [id="effect-rounded"] {
         width: 99%;
         bottom: -40.1%;
      }
   }
   @media (width<1297px) {
      [id="effect-rounded"] {
         width: 96.4599%;
         bottom: -38.1%;
      }
      div > [id="btn-main-cta"] {
         width: 40%;
         min-width: 300px;
      }
   }
   @media (max-width: 1065px) {
      [id="article-hero-pictures"] {
         justify-content: center;
         gap: var(--jd-gap-xxl);
      }
      [id="effect-rounded"] {
         width: 172.0599%;
         bottom: -41%;
      }
      > div {
         h2 {
            width: 100%;
            padding: 20px;
         }
      }
   }
   @media (max-width: 1023px) {
      [id="effect-rounded"] {
         width: 242.0599%;
         bottom: -34%;
      }
   }
   @media (max-width: 739px) {
      [id="effect-rounded"] {
         width: 212.0599%;
         bottom: -21%;
      }
   }
   @media (max-width: 666px) {
      > div [id="description-hero"] {
         padding: var(--jd-padding-s);
      }
      div > [id="btn-main-cta"] {
         width: 40%;
         min-width: 240px;
      }
   }
   @media (max-width: 520px) {
      > div {
         width: 95%;
         > h2 {
            font-size: 39px;
            width: 100%;
         }
         > p[id="description-hero"] {
            padding-inline: var(--jd-padding-xs);
         }
      }
   }
   @media (max-width: 444px) {
      > div {
         > h2 {
            font-size: 34px;
            line-height: 50px;
         }
      }
      [id="effect-rounded"] {
         width: 260.0599%;
         bottom: -23%;
      }
   }
`
export default Hero
