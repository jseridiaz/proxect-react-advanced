import React, { useCallback, useContext } from "react"
import styled from "styled-components"

import Button from "../../components/atoms/button/button"
import H2 from "../../components/atoms/H2/H2"
import H3 from "../../components/atoms/H3/H3"
import ImgHero from "../../components/atoms/Img/Img"
import Parraf from "../../components/atoms/Parraf/Parraf"
import { TypeHeart } from "../../data/iconsSvgHeart/iconSvg"
import useFilter from "../../utils/customHooks/useFilter/useFilter"
import addToCart from "../../utils/functions/addToCart/addToCart"
import { CartContext } from "../../utils/useContext/useContextCart"
import { FavouriteContext } from "../../utils/useContext/useContextFavourites"
import { DivCart, ShopSection } from "../Cart/Cart"

const Favourites = () => {
   const { cart, setCart } = useContext(CartContext)
   const { arrayToChange, setArrayToChange } = useContext(FavouriteContext)
   const { filter, setFilter } = useFilter(arrayToChange, "favourite", true)
   const removeFavourites = useCallback(
      el => {
         const newArray = arrayToChange.map(item =>
            item.id == el.id ? { ...item, favourite: false } : item,
         )
         setArrayToChange(newArray)
         setFilter(newArray.filter(item => item.favourite == true))
      },
      [arrayToChange],
   )

   return (
      <SectionStyled>
         <H2>My favourite list</H2>
         <div id='favourites-article-container'>
            {filter.length == 0 ? (
               <div id='no-favourite-container'>
                  <p>❤️ Add favourite articles to your List ❤️</p>
               </div>
            ) : (
               filter.map(e => (
                  <DivArticle key={e.id}>
                     <ImgHero img={e.img} alt={e.alt}></ImgHero>
                     <div className='info-article-cart'>
                        <H3>{e.title}</H3>
                        <Parraf id='description-appareal'>{e.description}</Parraf>
                        <Parraf>{e.price}€</Parraf>
                        <Button
                           className='icon-heart-card'
                           action={() => {
                              removeFavourites(e)
                           }}
                        >
                           <TypeHeart fillColor='red' />
                        </Button>
                        <Button
                           className='add-to-cart'
                           action={() => {
                              addToCart(e, cart, setCart)
                           }}
                        >
                           Add to cart
                        </Button>
                     </div>
                  </DivArticle>
               ))
            )}
         </div>
      </SectionStyled>
   )
}

export default Favourites

const SectionStyled = styled(ShopSection)`
   flex-direction: row;
   align-items: start;
   justify-content: center;
   width: 80%;
   flex-wrap: wrap;
   margin-top: 64px;
   > div[id="favourites-article-container"] {
      display: flex;
      gap: var(--jd-gap-xl);
      flex-wrap: wrap;
      justify-content: space-evenly;
      width: 100%;
      > [id="no-favourite-container"] {
         > p {
            font-size: 19px;
            font-weight: 600;
         }
      }
   }

   .info-article-cart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: var(--jd-gap-s);
      width: 60%;

      > button.icon-heart-card {
         width: 30px;
         height: 30px;
         border: none;
         top: 2px;

         &:hover {
            background-color: transparent;
         }
         > svg {
            width: 30px;
            height: 30px;
            border: none;
         }
      }
   }
   > h2 {
      font-size: 32px;
      width: 100%;
      border-bottom: 2px solid black;
   }
   @media (width<863px) {
      > div[id="favourites-article-container"] {
         justify-content: center;
      }
   }
   @media (width<405px) {
      > div[id="favourites-article-container"] {
         justify-content: center;
      }
      .info-article-cart {
         > h3 {
            font-size: 20px;
         }
      }
   }
`
const DivArticle = styled(DivCart)`
   width: 47%;
   height: 250px;
   min-width: 320px;

   > div {
      height: 100%;
      > img {
         object-position: 50% 100%;
      }
   }
   button.add-to-cart {
      top: 80%;
      width: 70%;
      right: 50%;
      transform: translate(50%);
      border: none;
      outline: 1px solid black;
      border-radius: var(--jd-br-s);
      background-color: #4388ff;
      height: 35px;
      color: #2d2d2d;

      &:hover {
         transform: translate(50%);
         color: black;
         background-color: #4388ff;
      }
   }
   @media (width<863px) {
      width: 70%;
   }
   @media (width<405px) {
      width: 90%;
      min-width: 290px;
   }
`
