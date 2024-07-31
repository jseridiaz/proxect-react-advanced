import { useContext } from "react"
import styled from "styled-components"

import Button from "../../components/atoms/button/button"
import H3 from "../../components/atoms/H3/H3"
import ImgHero from "../../components/atoms/Img/Img"
import Parraf from "../../components/atoms/Parraf/Parraf"
import useCounter from "../../utils/customHooks/counter/useCounter"
import { CartContext } from "../../utils/useContext/useContextCart"

// const Cart = () => {
//    const { cart, setCart } = useContext(CartContext)

//   return (
//    <ShopSection id='section-cart-shop'>
//       {cart.length==0&&<ShopSection>
//          <ImgHero img="https://res.cloudinary.com/ddybbosdk/image/upload/v1722439506/Proyect%2012%20react/images/empty-Cart_zoztgh.webp" alt="icon-empty-cart">
//          Your cart is empty</ImgHero>}
//       </ShopSection>
//   )
// }

const Cart = () => {
   const counters = cart.map((el)=>) useCounter()
   const { cart, setCart } = useContext(CartContext)

   // const handleSum = useCallback(() => setCounter(counter + 1), [])
   // const handleRes = useCallback(() => setCounter(counter - 1), [])
   return (
      <ShopSection
         id='cart-section-page'
         className={cart.length > 0 && "width-reduced"}
      >
         {cart.length == 0 && (
            <ImgHero
               idNameContainer='empty-cart-container'
               img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722439506/Proyect%2012%20react/images/empty-Cart_zoztgh.webp'
               alt='icon-no-items-cart'
            >
               <Parraf id='description-empty-cart'>Your cart ist empty</Parraf>
            </ImgHero>
         )}
         {cart.length > 0 &&
            cart.map(el => (
               <DivCart key={el.id}>
                  <ImgHero img={el.img} alt={`picture-appareal-${el.title}`} />
                  <div className='info-article-cart'>
                     <H3>{el.title}</H3>
                     <Parraf id='description-appareal'>{el.description}</Parraf>
                     <Parraf>{el.price}</Parraf>
                     <Button>x</Button>
                     <div id='counter-container'>
                        <div>
                           <Button
                              action={() => {
                                 res()
                              }}
                           >
                              -
                           </Button>
                           <Button
                              action={() => {
                                 sum()
                              }}
                           >
                              +
                           </Button>
                        </div>

                        <span>{counter}</span>
                     </div>
                  </div>
               </DivCart>
            ))}
      </ShopSection>
   )
}

export default Cart

const ShopSection = styled.section`
   min-height: 85svh;
   margin-top: calc(var(--jd-margin-xxl) * 2.5);
   display: flex;
   flex-direction: column;
   padding: var(--jd-padding-s);
   width: 35%;
   margin-inline: auto;
   align-items: center;
   gap: var(--jd-gap-m);
   &.width-reduced {
      width: 45%;
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
`
const DivCart = styled.div`
   display: flex;
   width: 350px;
   height: 150px;
   align-items: center;
   border-radius: var(--jd-br-li);
   box-shadow: 0px 1px 4px -1px #9980ac;

   > div {
      padding: var(--jd-padding-s);
      border-radius: var(--jd-br-li);
      width: 160px;
      height: 130px;
      > img {
         object-fit: cover;
         border-radius: 20px;
      }
   }
   .info-article-cart {
      width: 178px;
      position: relative;

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
         width: 100px;
         display: flex;
         justify-content: space-around;
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
            > button:first-child {
               background-color: transparent;
            }
            > button:last-child {
               background-color: #39fd39;
            }
         }
      }
      > button {
         position: absolute;
         top: -5px;
         right: -5px;
         border-radius: 50%;
         border: 2px solid #9980ac;
         align-content: center;
         font-size: 15px;
         width: 24px;
         font-weight: 700;
         height: 24px;
         &:hover {
            transform: scale(1);
            background-color: grey;
         }
      }
   }
`
