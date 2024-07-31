import styled from "styled-components"

const H2 = styled.h2`
   font-size: 48px;
   font-weight: bold;

   font-family: "Playfair Display", serif;
   text-align: center;
   padding-inline: var(--jd-padding-s);
   -webkit-text-stroke: 0.2px;
   line-height: 60px;
   &[id="title-section-colection"] {
      width: 100%;
      grid-column: 1/-1;
      grid-row: 1/2;
      padding-bottom: calc(var(--jd-padding-xxl) * 3);
   }
   @media (max-width: 1254px) {
      &[id="title-section-colection"] {
         grid-column: 1/-1;
         padding-bottom: 0px;
      }
   }
   @media (max-width: 1254px) {
      &[id="title-section-colection"] {
         grid-column: 1/-1;
         padding-bottom: 0px;
      }
   }
   @media (max-width: 444px) {
      font-size: 37px;
   }
`
export default H2
