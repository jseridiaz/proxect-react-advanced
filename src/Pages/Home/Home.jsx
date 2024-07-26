import React from "react"
import styled from "styled-components"

import Button from "../../components/atoms/button/button"
import H2 from "../../components/atoms/H2/H2"
import ImgHero from "../../components/atoms/Img/Img"
import Li from "../../components/atoms/Li/Li"
import Hero from "../../components/organisms/Hero/Hero"
import SectionCategories from "../../components/organisms/Home/SectionCategories/SectionCategories"
import SectionCollection from "../../components/organisms/Home/SectionCollection/SectionCollection"
import SectionFeatures from "../../components/organisms/Home/SectionFeatures/SectionFeatures"
import { arrayPicturesHero } from "../../data/arrayPicturesHero/arrayPicturesHero"

const Home = () => {
   return (
      <>
         <Hero>
            <div className='hero-container'>
               <p>Experience fashion like never before</p>
               <H2>
                  Elevate Your Style With Fashion Store: Where Fashion Meets Passion
               </H2>

               <p id='description-hero'>
                  Discover a world of fashion-forward trends, curated collections,
                  and timeless pieces that inspire. Unleash your inner fashionista
                  and embark on a journey of confidence, elegance and impeccable
                  style.
               </p>
               <Button id='btn-main-cta' bgColor='black' fontColor={"#F6F6F6"}>
                  <Li to='/shop'>
                     Start <Space /> Shopping
                  </Li>
               </Button>
            </div>
            <Article id='article-hero-pictures'>
               {arrayPicturesHero.map((el, index) => (
                  <ImgHero
                     key={`${el.id}-${index}`}
                     idName={el.id}
                     img={el.src}
                     alt={el.alt}
                  />
               ))}
            </Article>
            <div id='effect-rounded'></div>
         </Hero>
         <SectionCollection />
         <SectionCategories />
         {/* <SectionFeatures /> */}
      </>
   )
}

export default Home

const Space = styled.span`
   margin-left: 12px;
`

const Article = styled.article`
   display: flex;
   max-width: 100svw;
   width: 100%;
   justify-content: space-around;
   gap: var(--jd-gap-m);
   flex-wrap: wrap;
   padding: var(--jd-padding-m);
   > div {
      > img {
         width: 100%;
      }
   }
`
