import { useContext } from "react"
import styled from "styled-components"

import { TypeHeart } from "../../../data/iconsSvgHeart/iconSvg"
import useBoolean from "../../../utils/customHooks/useBoolean/useBoolean.jsx"
import addToCart from "../../../utils/functions/addToCart/addToCart.js"
import { handleFavourite } from "../../../utils/functions/handleFavourite/handleFavourite.js"
import { CartContext } from "../../../utils/useContext/useContextCart"
import { FavouriteContext } from "../../../utils/useContext/useContextFavourites.jsx"
import Button from "../../atoms/button/button"
import ImgHero from "../../atoms/Img/Img"
import DescriptionCard from "../../molecules/DescriptionCard/DescriptionCard"
import Toast from "../../molecules/Toast/Toast.jsx"

const Slides = () => {
   const { cart, setCart } = useContext(CartContext)
   const { arrayToChange, setArrayToChange } = useContext(FavouriteContext)
   const [boolean, changeBoolean] = useBoolean(false)
   // * esto es cambiar el estado del item de un objeto con react.

   return (
      <>
         <CarouselContainer>
            {console.log(boolean)}
            <div>
               <Ul className='flex'>
                  {arrayToChange.map((el, i) => (
                     <ImgHero
                        className='card-single'
                        key={el.id}
                        img={el.img}
                        alt={el.alt}
                     >
                        <Button
                           className='icon-heart-card'
                           action={() => {
                              handleFavourite(el, setArrayToChange, arrayToChange)
                           }}
                        >
                           {el.favourite == false ? (
                              <TypeHeart fillColor='currentColor' />
                           ) : (
                              <TypeHeart fillColor='red' />
                           )}
                        </Button>
                        <DescriptionCard
                           key={i}
                           name={el.title}
                           infoArticle={el.description}
                           price={el.price}
                           click={() => {
                              addToCart(el, cart, setCart)
                              // changeBoolean(false)
                           }}
                        />
                     </ImgHero>
                  ))}
               </Ul>
            </div>
            <Toast />
         </CarouselContainer>
      </>
   )
}

export default Slides
const CarouselContainer = styled.div`
   position: relative;
   > [id="toast-container"] {
      position: absolute;
      right: 50%;
      transform: translate(50%);
   }
`
const Ul = styled.ul`
   display: flex;
   gap: 20px;
   justify-content: center;

   .card-single {
      > img {
         object-fit: cover;
      }
   }
   .icon-heart-card {
      position: absolute;
      right: 5px;
      > svg {
         background-color: ${props => props.$boolean && "red"};
         color: #ffffff;
      }
      &:active {
         transform: scale(1.3);
      }
   }
`
