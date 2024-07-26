import React from "react"
import styled from "styled-components"

import arrayCards from "../../../../data/Home/sectionCategories/arrayCards/arrayCards"
// import arrayCards from "../../../../data/Home/sectionCategories/arrayCards/arrayCards"
import { arrayListCategories } from "../../../../data/Home/sectionCategories/arrayListCategories/arrayListCategories"
import H2 from "../../../atoms/H2/H2"
// import DescriptionCard from "../../../molecules/DescriptionCard/DescriptionCard"
import List from "../../../molecules/List/List"
import Slides from "../../Slides/Slides"

const SectionCategories = () => {
   return (
      <>
         <SectionFlex>
            <H2>Latest Arrivals By Categories</H2>
            <List arrayList={arrayListCategories} idName='nav-categories' />
            <Slides array={arrayCards} />
         </SectionFlex>
         {/* {arrayCards.map(el => ( */}

         {/* <DescriptionCard name={el.title} infoArticle={el.description} /> */}
         {/* // ))} */}
      </>
   )
}

export default SectionCategories

const SectionFlex = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   > h2 {
      width: 100%;
      padding: var(--jd-padding-xl);
   }
   > nav {
      padding: var(--jd-padding-xxl);
      width: 80%;
      > ul {
         margin-inline: auto;
         width: 90%;
         justify-content: space-evenly;
         letter-spacing: 0.3px;
         > li {
            padding: var(--jd-padding-xs);
         }
      }
   }
`
