import styled from "styled-components"

const H2 = styled.h2`
   font-size: 39px;
   font-weight: bold;
   width: 80%;
   background-color: var(--jd-bg-terciray);
   font-family: "Playfair Display", serif;
   text-align: center;
   padding: calc(var(--jd-padding-xxl) * 1);
   margin-bottom: 1rem;
   -webkit-text-stroke: 0.2px;
   line-height: 60px;
   &[id="title-section-colection"] {
      width: 80%;
      grid-column: 1/-1;
      grid-row: 1/2;
      padding: calc(var(--jd-padding-xxl) * 1.7);
      text-align: center;
      border-radius: var(--jd-br-li);
   }
   &[id="title-cart-section"] {
      margin-bottom: var(--jd-margin-m);
      padding: 20px;
      margin-inline: auto;
      background-color: transparent;
   }
   @media (max-width: 1254px) {
      &[id="title-section-colection"] {
         grid-column: 1/-1;
         padding: var(--jd-padding-l);
      }
   }

   @media (max-width: 455px) {
      font-size: 37px;
      &[id="title-section-colection"] {
         width: 100%;
      }
   }
   @media (width<325px) {
      &[id="title-cart-section"] {
         width: 100%;
         /* width: 200%; */
      }
   }
`
export default H2
