import { FacebookShareButton } from "react-share"
import styled from "styled-components"

import Button from "../../components/atoms/button/button"
import H2 from "../../components/atoms/H2/H2"
import ImgHero from "../../components/atoms/Img/Img"
import Li from "../../components/atoms/Li/Li"
import Hero from "../../components/organisms/Hero/Hero"
import SectionCategories from "../../components/organisms/Home/SectionCategories/SectionCategories"
import SectionCollection from "../../components/organisms/Home/SectionCollection/SectionCollection"
import SectionFeatures from "../../components/organisms/Home/SectionFeatures/SectionFeatures"
import Seo from "../../components/organisms/Seo/Seo"
import { arrayPicturesHero } from "../../data/arrayPicturesHero/arrayPicturesHero"

const Home = () => {
   return (
      <>
         <Seo
            title='Fashion Store - Clothes and complements'
            description='Fashion Store shop is the new fashion store 
          to find out all modern trendy clothes of the current and the next season.'
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722546207/Proyect%2012%20react/images/zara-model_1_rzgbw0.avif'
         />
         <Hero>
            <FacebookShareButton
               url='https://portfolio-fullstack-josedanielrivera.netlify.app/'
               quote='prueba'
               hashtag='#tuHashtag'
            >
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  fill='none'
               >
                  <path
                     fill='#CACACA'
                     d='M24.9 17.633c0 4.459-2.658 7.117-7.117 7.117h-1.458a1.229 1.229 0 0 1-1.225-1.225v-7.068c0-.331.27-.613.6-.613l2.156-.037a.39.39 0 0 0 .355-.306l.43-2.34a.37.37 0 0 0-.368-.428l-2.61.037a.623.623 0 0 1-.624-.6l-.05-3.002c0-.196.16-.367.368-.367l2.94-.05a.36.36 0 0 0 .368-.367l-.05-2.94a.361.361 0 0 0-.367-.367l-3.307.049a3.67 3.67 0 0 0-3.614 3.736l.061 3.368a.607.607 0 0 1-.6.625l-1.47.025a.36.36 0 0 0-.367.367l.036 2.328c0 .208.16.367.368.367l1.47-.024c.343 0 .612.27.625.6l.11 6.982a1.226 1.226 0 0 1-1.225 1.25H7.517C3.058 24.75.4 22.092.4 17.62V7.367C.4 2.908 3.058.25 7.517.25h10.266c4.459 0 7.117 2.658 7.117 7.117v10.266Z'
                  />
               </svg>
            </FacebookShareButton>

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
         <SectionFeatures />
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
