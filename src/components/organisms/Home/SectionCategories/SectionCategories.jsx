import React from "react"
import styled from "styled-components"

import arrayCards from "../../../../data/Home/sectionCategories/arrayCards/arrayCards"
import { arrayListCategories } from "../../../../data/Home/sectionCategories/arrayListCategories/arrayListCategories"
import H2 from "../../../atoms/H2/H2"
import List from "../../../molecules/List/List"
import Slides from "../../Slides/Slides"

const SectionCategories = () => {
   return (
      <>
         <SectionFlex>
            <H2>Latest Arrivals By Categories</H2>
            <List
               arrayList={arrayListCategories}
               isDisabled={true}
               idName='nav-categories'
            />
            <Slides array={arrayCards} />
         </SectionFlex>
      </>
   )
}

export default SectionCategories

const SectionFlex = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: var(--jd-bgcolor-primary);
   > h2 {
      border-radius: var(--jd-br-li);
   }
   > nav {
      padding: var(--jd-padding-xxl);
      width: 80%;
      > ul {
         margin-inline: auto;
         width: 82.2%;
         justify-content: space-evenly;
         letter-spacing: 0.3px;
         background-color: white;
         border-radius: var(--jd-br-s);
         > li {
            padding: var(--jd-padding-xs) var(--jd-padding-s);
            transition: all 0.5s ease;
            border-radius: var(--jd-br-li);
            &:hover {
               text-decoration: underline;
            }
            &:hover > a {
               color: black;
            }
            a {
               font-size: 18px;
               color: rgba(0, 0, 0, 0.756);
               font-weight: 600;
            }
         }
         .favourite-icon-card {
            width: 200px;
         }
      }
   }
   @media (width < 700px) {
      > nav {
         width: 100%;
         padding: 5px;
      }
      > nav > ul {
         width: 100%;
         padding: 5px;
      }
   }
   @media (width<361px) {
      > h2 {
         font-size: 30px;
      }
   }
`
