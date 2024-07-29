import React from "react"
import styled from "styled-components"

import H2 from "../../../atoms/H2/H2"
import ImgHero from "../../../atoms/Img/Img"
import Description from "../../../molecules/Description/Description"

const SectionFeatures = () => {
   return (
      <SectionBlock>
         <H2>Featured and Special Offers</H2>
         <ImgHero
            className='features-picture-container'
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722029615/street-style-tyler-joe-1-1674752623-1_z16ji3.webp'
            alt='picture-collection-bottega-venega'
         >
            <Description
               h3='Bottega veneta Women Exclusive Series'
               className='description-collection'
               btn='Shop now'
            />
         </ImgHero>
         <ImgHero
            className='features-picture-container'
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722029615/ww-brands-anyday-v2-010923-1_c8gp7y.webp'
            alt='picture-collection-john-lewis'
         >
            <Description
               h3='John Lewis : Any Day Ceollections'
               className='description-collection'
               btn='Shop now'
            />
         </ImgHero>
         <ImgHero
            className='features-picture-container'
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722030840/Proyect%2012%20react/images/yjol4wv4mzyiayksvpir.webp'
            alt='picture-with-special-50%-summer-offer'
         >
            <Description
               h3='Save 50% this Holiday season'
               p='It’s  time to revamp your fashion game without breaking the bank! Dive into our exclusive 50% off sale and discover unbearable deals on the most coveted styles.'
               className='description-collection'
               btn='Shop now'
            />
         </ImgHero>
      </SectionBlock>
   )
}

export default SectionFeatures

const SectionBlock = styled.section`
   display: flex;
   flex-wrap: wrap;
   padding: calc(var(--jd-padding-xxl) * 2.1);
   justify-content: space-around;
   column-gap: var(--jd-gap-m);
   row-gap: var(--jd-gap-xxl);
   h2 {
      width: 100%;
      padding: var(--jd-padding-l) var(--jd-padding-l) var(--jd-padding-xxl);
   }
   .features-picture-container:not(:last-child) {
      width: 49%;
   }
   @media (width<1241px) {
      .features-picture-container:not(:last-child) {
         width: 100%;
      }
   }
   @media (width<844px) {
      .features-picture-container:not(:last-child) {
         > div {
            width: 90%;
         }
      }
   }
   @media (width<716px) {
      .features-picture-container:not(:last-child) {
         height: 550px;
         > img {
            border-radius: 20px;
            object-fit: cover;
         }
      }
   }
   @media (width<556px) {
      padding: var(--jd-padding-m);
      .features-picture-container:not(:last-child) {
         > div {
            width: 100%;
            padding: var(--jd-padding-xs);
            > h3 {
               font-size: 29px;
            }
            a.link-button {
               width: 70%;
               height: 50px;
            }
         }
      }
   }
`
