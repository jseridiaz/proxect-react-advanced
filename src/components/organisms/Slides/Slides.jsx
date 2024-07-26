import React, { useState } from "react"
import styled from "styled-components"

import Button from "../../atoms/button/button"
import ImgHero from "../../atoms/Img/Img"
import DescriptionCard from "../../molecules/DescriptionCard/DescriptionCard"

const Slides = ({ array }) => {
   const [index, setIndex] = useState(0)
   return (
      <>
         <CarouselContainer>
            <div>
               <Button id='left-arrow'>
                  <StyledImg
                     src='https://res.cloudinary.com/ddybbosdk/image/upload/v1718642094/arrow-circle-left-svgrepo-com_zab7z8.svg'
                     alt='left-arrow'
                  />
               </Button>
               <Ul className='flex'>
                  {array.map(el => (
                     <ImgHero
                        className='card-single'
                        key={el.id}
                        img={el.img}
                        alt={el.alt}
                     >
                        <DescriptionCard
                           name={el.title}
                           infoArticle={el.description}
                        />
                     </ImgHero>
                  ))}
               </Ul>
               <Button id='rigth-arrow'>
                  <StyledImg
                     className='rotate'
                     src='https://res.cloudinary.com/ddybbosdk/image/upload/v1718642094/arrow-circle-left-svgrepo-com_zab7z8.svg'
                     alt='rigth-arrow'
                  />
               </Button>
            </div>
         </CarouselContainer>
      </>
   )
}

export default Slides
const CarouselContainer = styled.div`
   position: relative;
`
const Ul = styled.ul`
   display: flex;
   gap: 20px;
   justify-content: start;
`
const StyledImg = styled.img`
   width: 40%;
   height: 100%;
`
