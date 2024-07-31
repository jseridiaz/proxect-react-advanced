import { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "../../../utils/useContext/useContextCart"
import ImgHero from "../../atoms/Img/Img"
import DescriptionCard from "../../molecules/DescriptionCard/DescriptionCard"

const Slides = ({ array }) => {
   const { cart, setCart } = useContext(CartContext)

   const handleClick = el => {
      setCart([...cart, el])
   }
   return (
      <>
         <CarouselContainer>
            <div>
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
                           price={el.price}
                           click={() => {
                              handleClick(el)
                           }}
                        />
                     </ImgHero>
                  ))}
               </Ul>
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
   justify-content: center;
`
