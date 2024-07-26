import React from "react"

import H2 from "../../../atoms/H2/H2"
import ImgHero from "../../../atoms/Img/Img"
import Description from "../../../molecules/Description/Description"

const SectionFeatures = () => {
   return (
      <SectionFeatures>
         <H2>Featured and Special Offer</H2>
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
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722029615/ww-brands-anyday-v2-010923-1_c8gp7y.webp'
            alt='picture-collection-john-lewis'
         >
            <Description
               h3='Save 50% this Holiday season'
               p='It’s  time to revamp your fashion game without breaking the bank! Dive into our exclusive 50% off sale and discover unbearable deals on the most coveted styles.'
               className='description-collection'
               btn='Shop now'
            />
         </ImgHero>
      </SectionFeatures>
   )
}

export default SectionFeatures
