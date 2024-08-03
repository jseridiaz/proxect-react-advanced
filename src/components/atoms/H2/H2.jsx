import styled from "styled-components"

const H2 = styled.h2`
   font-size: 53px;
   font-weight: bold;
   width: 80%;
   background-color: var(--jd-bg-terciray);
   font-family: "Playfair Display", serif;
   text-align: center;
   padding: calc(var(--jd-padding-xxl) * 1.7);
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
   @media (max-width: 1254px) {
      &[id="title-section-colection"] {
         grid-column: 1/-1;
         padding: var(--jd-padding-l);
      }
   }

   @media (max-width: 444px) {
      font-size: 37px;
      &[id="title-section-colection"] {
         width: 100%;
      }
   }
`
export default H2
