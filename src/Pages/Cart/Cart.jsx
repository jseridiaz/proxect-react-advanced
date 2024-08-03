import { useCallback, useContext } from "react"
import styled from "styled-components"

import Button from "../../components/atoms/button/button"
import H2 from "../../components/atoms/H2/H2"
import H3 from "../../components/atoms/H3/H3"
import ImgHero from "../../components/atoms/Img/Img"
import Parraf from "../../components/atoms/Parraf/Parraf"
import { CartContext } from "../../utils/useContext/useContextCart"

const Cart = () => {
   const { cart, setCart } = useContext(CartContext)

   const handleDelete = el => {
      setCart(cart.filter(item => item.id != el.id))
   }
   const sumQuantity = useCallback(el => {
      setCart(prevState =>
         prevState.map(item =>
            item.id == el.id ? { ...item, quantity: item.quantity + 1 } : item,
         ),
      )
   }, [])
   const resQuantity = useCallback(el => {
      setCart(prevState =>
         prevState.map(item =>
            item.id == el.id && el.quantity > 1
               ? { ...item, quantity: item.quantity - 1 }
               : item,
         ),
      )
   }, [])
   return (
      <ShopSection
         id='cart-section-page'
         className={cart.length > 0 && "width-reduced"}
      >
         <H2>My shopping cart</H2>
         {cart.length == 0 && (
            <ImgHero
               idNameContainer='empty-cart-container'
               img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722439506/Proyect%2012%20react/images/empty-Cart_zoztgh.webp'
               alt='icon-no-items-cart'
            >
               <Parraf id='description-empty-cart'>Your cart ist empty</Parraf>
            </ImgHero>
         )}
         {cart.length > 0 && (
            <>
               <div id='articles-wrp'>
                  {cart.length > 0 &&
                     cart.map(el => (
                        <DivCart $info={el.title} key={el.id}>
                           <ImgHero
                              img={el.img}
                              alt={`picture-appareal-${el.title}`}
                           />
                           <div className='info-article-cart'>
                              <H3>{el.title}</H3>
                              <Parraf id='description-appareal'>
                                 {el.description}
                              </Parraf>
                              <Parraf>{el.price}€</Parraf>
                              <Button
                                 action={() => {
                                    handleDelete(el)
                                 }}
                              >
                                 X
                              </Button>
                              <div id='counter-container'>
                                 <div>
                                    <Button action={() => resQuantity(el)}>-</Button>
                                    <Button action={() => sumQuantity(el)}>+</Button>
                                 </div>
                                 <span>Quantity: {el.quantity}</span>
                              </div>
                           </div>
                        </DivCart>
                     ))}
                  <div id='total'>
                     <span> Total:</span>
                     <span>
                        {cart
                           .reduce((acc, el) => el.quantity * el.price + acc, 0)
                           .toFixed(2)}
                        €
                     </span>
                  </div>
                  <Button id='buy-btn'>Buy now</Button>
               </div>
            </>
         )}
      </ShopSection>
   )
}

export default Cart

export const ShopSection = styled.section`
   min-height: 85svh;
   margin: calc(var(--jd-margin-xl) * 2.5) auto;
   display: flex;
   flex-direction: column;
   padding: var(--jd-padding-s);
   width: 35%;

   align-items: center;
   gap: var(--jd-gap-m);
   > h2 {
      margin-bottom: var(--jd-margin-l);
   }
   [id="articles-wrp"] {
      width: 100%;
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--jd-gap-m);
   }
   &.width-reduced {
      width: 100%;
      margin-inline: 0px;
   }
   * {
      color: black;
   }
   > [id="empty-cart-container"] {
      display: flex;
      margin-inline: auto;
      flex-direction: column;
      align-items: center;
      width: 200px;

      height: 300px;
      > p {
         text-align: center;
         font-weight: 600;
         position: relative;
         bottom: 70px;
      }
      > img {
         width: 150%;
         object-fit: cover;
      }
   }
   [id="buy-btn"] {
      background-color: #9980ac;
      width: 325px;
      font-size: 18px;
      color: white;
      margin-top: var(--jd-margin-l);
      height: 45px;
      text-shadow: 0px 2px 7px black;
      border-radius: var(--jd-br-li);
   }
   [id="total"] {
      margin-top: var(--jd-margin-m);
      font-weight: 600;
      padding: var(--jd-padding-s);
      border-radius: var(--jd-br-s);
      box-shadow: 0px 0px 4px 1px black;
      > span:last-child {
         margin-left: 10px;
      }
   }
   @media (width<405px) {
      [id="buy-btn"] {
         width: 70%;
      }
   }
`
export const DivCart = styled.div`
   display: flex;
   width: 460px;
   height: 200px;
   align-items: center;
   border-radius: var(--jd-br-li);
   box-shadow: 0px 1px 4px -1px #9980ac;
   min-width: 310px;

   > div {
      padding: var(--jd-padding-s);
      border-radius: var(--jd-br-li);
      width: 160px;
      height: 100%;
      > img {
         object-position: ${props => props.$info == "Jack & Jones Re" && "0% 78%"};
         object-fit: cover;
         border-radius: 20px;
      }
   }
   .info-article-cart {
      display: flex;
      flex-direction: column;
      width: 62%;
      gap: var(--jd-gap-xs);
      position: relative;
      align-items: center;
      justify-content: center;

      * {
         font-family: "Poppins", sans-serif;
      }

      > h3 {
         font-size: 18px;
         font-weight: 600;
      }
      > [id="description-appareal"],
      p {
         font-size: 16px;
         font-weight: 600;
      }
      [id="counter-container"] {
         position: absolute;
         right: 0px;
         bottom: 0px;
         width: 200px;
         display: flex;
         justify-content: space-around;
         > span {
            font-weight: 500;
         }
         > div {
            display: flex;
            width: 60%;
            gap: 2px;

            > button {
               font-size: 22px;
               border: 1px solid black;
               border-radius: 0px;
               width: 100%;
            }
         }
      }
      > button {
         position: absolute;
         top: 2px;
         right: -12px;
         border-radius: 50%;
         border: 1px solid #9980ac;
         align-content: center;
         font-size: 10px;
         width: 24px;
         font-weight: 700;
         height: 24px;
         &:hover {
            transform: scale(1);
            background-color: #f9b7b7;
         }
      }
   }
   @media (width<405px) {
      width: 90%;
      > .info-article-cart {
         width: 70%;
         > h3 {
            font-size: 15px;
         }

         > [id="description-appareal"],
         p,
         [id="counter-container"] > span {
            font-size: 15px;
         }
         > button {
            top: 2px;
            right: 1px;
         }
      }
   }
`
