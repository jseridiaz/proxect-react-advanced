import styled from "styled-components"

const Hero = styled.section`
   overflow: hidden;
   display: flex;
   flex-direction: column;
   position: relative;
   margin-top: 50px;
   width: 100%;
   max-width: 100svw;
   margin-inline: auto;
   align-items: center;
   justify-content: space-around;
   height: fit-content;

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
         font-size: 16px;
         font-weight: 500;
         padding-inline: var(--jd-padding-xs);
      }
      > h2 {
         font-size: 48px;
         font-weight: bold;
         font-family: "Playfair Display", serif;
         padding-inline: var(--jd-padding-s);
         -webkit-text-stroke: 0.2px;
         line-height: 60px;
      }
      [id="description-hero"] {
         padding-inline: calc(var(--jd-padding-xxl) * 1.8);
         width: 90%;
         font-size: 18px;
         font-weight: 500;
         line-height: 20.3px;
         letter-spacing: 0.35px;
         color: rgba(0, 0, 0, 0.75);
      }
      [id="btn-main-cta"] {
         margin-top: var(--jd-margin-m);
         height: 63px;
         color: #f6f6f6;
         font-weight: 500;
         letter-spacing: 1px;
      }
   }
   [id="effect-rounded"] {
      background-color: white;
      border-radius: 50%;
      position: absolute;
      width: 182.0599%;
      bottom: -65.1%;
      height: 611.3px;
   }
   @media (width<1409px) {
      [id="effect-rounded"] {
         width: 72.0599%;
         bottom: -45%;
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
   }
   @media (max-width: 1023px) {
      [id="effect-rounded"] {
         width: 280.0599%;
         bottom: -41%;
      }
   }
   @media (max-width: 740px) {
      [id="effect-rounded"] {
         width: 192.0599%;
         bottom: -24%;
      }
   }
   @media (max-width: 666px) {
      > div [id="description-hero"] {
         padding: var(--jd-padding-s);
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
            padding-inline: calc(var(--jd-padding-l) * 1.5);
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
         width: 292.0599%;
         bottom: -24%;
      }
   }
`
export default Hero
