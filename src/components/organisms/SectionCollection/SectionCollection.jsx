import React from "react"
import styled from "styled-components"

import H2 from "../../atoms/H2/H2"

const SectionCollection = () => {
   return (
      <SectionGrid>
         <H2 id='title-section-colection'>Explore Our Latest Collections For Y0u</H2>
      </SectionGrid>
   )
}

export default SectionCollection

export const SectionGrid = styled.section`
   margin-top: var(--jd-margin-xxl);
   display: grid;
`
