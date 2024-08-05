import {
   FacebookShareButton,
   TwitterShareButton,
   WhatsappShareButton,
} from "react-share"
import styled from "styled-components"

import {
   firstArrayFooter,
   secondArrayFooter,
   thirdArrayFooter,
} from "../../../data/Home/arrayFooter/arrayFooter"
import Ul from "../../atoms/Ul/Ul"
import Description from "../../molecules/Description/Description"

const FooterComponent = () => {
   return (
      <StyledFooter id='footer'>
         <Description
            h3='Fashion Store'
            p='Design amazing digital experiences that create more happy in the world.'
         />
         <Block className='second-container'>
            <Ul
               array={firstArrayFooter}
               id='ul-shop-area'
               goTo='/shop'
               className='li-footer'
               classAname='a-li-footer'
            >
               <p>Shop</p>
            </Ul>
            <Ul
               array={secondArrayFooter}
               id='ul-company-area'
               goTo='/shop'
               className='li-footer'
               classAname='a-li-footer'
            >
               <p>Company</p>
            </Ul>
            <Ul
               array={thirdArrayFooter}
               id='ul-support-area'
               goTo='/shop'
               className='li-footer'
               classAname='a-li-footer'
            >
               <p>Support</p>
            </Ul>
         </Block>
         <Block className='last-container-footer'>
            <Block>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  fill='#fff'
                  stroke='#fff'
                  strokeWidth='0'
                  viewBox='-2.56 -2.56 37.12 37.12'
               >
                  <g stroke='none'>
                     <path d='M16 32a16 16 0 0 0 16-16A16 16 0 0 0 4.69 4.69a16 16 0 0 0 0 22.62A15.86 15.86 0 0 0 16 32ZM6.1 6.1a14 14 0 0 1 19.8 0 14 14 0 1 1-19.8 0Z' />
                     <path d='M16 25.18a9.15 9.15 0 0 0 6.49-2.69 1 1 0 0 0-1.41-1.41 7.18 7.18 0 1 1 0-10.16 1 1 0 0 0 1.41-1.41 9.17 9.17 0 0 0-13 0A9.18 9.18 0 0 0 16 25.18Z' />
                  </g>
               </svg>

               <p>2023 Fashion Store. All rights reserved.</p>
            </Block>
            <div>
               <FacebookShareButton url='https://proyecto1-josedaniel-rivera.netlify.app'>
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
               <TwitterShareButton
                  url='https://proyecto1-josedaniel-rivera.netlify.app'
                  title={`FASHION STORE -- Your reliable clothes online shop for this season 🕶️👕.`}
                  hashtags={["trendyclothes,Vogue "]}
               >
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     width='25'
                     height='25'
                     fill='none'
                  >
                     <path
                        fill='#CACACA'
                        d='M25.053 2.623c-.9.395-1.866.667-2.882.79A5.055 5.055 0 0 0 24.38.633a10.5 10.5 0 0 1-3.195 1.209 5.023 5.023 0 0 0-8.558 4.573C8.452 6.22 4.751 4.214 2.276 1.183a4.944 4.944 0 0 0-.682 2.53c0 1.746.889 3.277 2.232 4.177a4.99 4.99 0 0 1-2.272-.625v.06a5.028 5.028 0 0 0 4.027 4.929 5.175 5.175 0 0 1-1.32.175c-.322 0-.63-.032-.937-.088a5.046 5.046 0 0 0 4.701 3.489 10.082 10.082 0 0 1-6.228 2.144c-.4 0-.797-.019-1.197-.067a14.283 14.283 0 0 0 7.717 2.257c9.238 0 14.287-7.653 14.287-14.28 0-.211 0-.426-.016-.642a10.056 10.056 0 0 0 2.512-2.6l-.047-.02Z'
                     />
                  </svg>
               </TwitterShareButton>
               <WhatsappShareButton
                  url='https://proyecto1-josedaniel-rivera.netlify.app'
                  title='FASHION STORE - Clothes and accesories for this current season'
                  separator='--'
               >
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     xmlSpace='preserve'
                     width='25'
                     height='25'
                     fill='#cacaca'
                     stroke='#cacaca'
                     viewBox='0 0 308 308'
                  >
                     <path d='M227.904 176.981c-.6-.288-23.054-11.345-27.044-12.781-1.629-.585-3.374-1.156-5.23-1.156-3.032 0-5.579 1.511-7.563 4.479-2.243 3.334-9.033 11.271-11.131 13.642-.274.313-.648.687-.872.687-.201 0-3.676-1.431-4.728-1.888-24.087-10.463-42.37-35.624-44.877-39.867-.358-.61-.373-.887-.376-.887.088-.323.898-1.135 1.316-1.554 1.223-1.21 2.548-2.805 3.83-4.348a140.77 140.77 0 0 1 1.812-2.153c1.86-2.164 2.688-3.844 3.648-5.79l.503-1.011c2.344-4.657.342-8.587-.305-9.856-.531-1.062-10.012-23.944-11.02-26.348-2.424-5.801-5.627-8.502-10.078-8.502-.413 0 0 0-1.732.073-2.109.089-13.594 1.601-18.672 4.802C90 87.918 80.89 98.74 80.89 117.772c0 17.129 10.87 33.302 15.537 39.453.116.155.329.47.638.922 17.873 26.102 40.154 45.446 62.741 54.469 21.745 8.686 32.042 9.69 37.896 9.69h.001c2.46 0 4.429-.193 6.166-.364l1.102-.105c7.512-.666 24.02-9.22 27.775-19.655 2.958-8.219 3.738-17.199 1.77-20.458-1.348-2.216-3.671-3.331-6.612-4.743z' />
                     <path d='M156.734 0C73.318 0 5.454 67.354 5.454 150.143c0 26.777 7.166 52.988 20.741 75.928L.212 302.716a3.998 3.998 0 0 0 4.999 5.096l79.92-25.396c21.87 11.685 46.588 17.853 71.604 17.853C240.143 300.27 308 232.923 308 150.143 308 67.354 240.143 0 156.734 0zm0 268.994c-23.539 0-46.338-6.797-65.936-19.657a3.996 3.996 0 0 0-3.406-.467l-40.035 12.726 12.924-38.129a4.002 4.002 0 0 0-.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 0-65.543 53.754-118.867 119.826-118.867 66.064 0 119.812 53.324 119.812 118.867.001 65.535-53.746 118.851-119.811 118.851z' />
                  </svg>
               </WhatsappShareButton>
            </div>
         </Block>
      </StyledFooter>
   )
}

export default FooterComponent

const StyledFooter = styled.footer`
   display: flex;

   flex-wrap: wrap;
   background-color: black;
   justify-content: space-between;
   height: 400px;
   width: 100%;
   color: white;
   padding: var(--jd-padding-l);
   > div.second-container {
      width: fit-content;
      flex-wrap: wrap;
   }
   > div {
      display: flex;
      gap: var(--jd-gap-m);
      min-width: 390px;
      justify-content: space-around;
      align-items: start;
      padding: var(--jd-padding-m) 0px;
      > ul {
         justify-content: start;

         li {
            width: 100%;
         }
         > li:first-child {
            text-decoration: underline;
            user-select: none;
            > a {
               cursor: default;
               user-select: none;
            }
         }
         > li:first-child ~ li {
            font-weight: 200;
         }
      }

      > ul:first-child {
         min-width: 170px;
      }
      > ul:last-child {
         min-width: 250px;
      }

      h3,
      p {
         width: 100%;
      }
      h3 {
         font-size: 48px;
         font-family: "Payfair Display", sans-serif;
         font-weight: bold;
      }
      p {
         /* font-size: 18px; */
         /* font-weight: 400; */
      }
      width: 40%;
      position: relative;
   }

   .last-container-footer {
      padding: var(--jd-padding-l);
      width: 100%;
      align-items: center;
      border-top: 1px solid white;
      justify-content: space-between;
      > div:first-child {
         gap: 5px;
         align-items: center;
      }

      > div:last-child {
         display: flex;
         flex-wrap: wrap;
         align-items: center;
         width: 20%;
         gap: var(--jd-gap-l);
         cursor: pointer;
         svg {
            transition: filter 1s ease;
         }
         svg:hover {
            filter: brightness(170%);
         }
      }
   }
   @media (width<1069px) {
      justify-content: center;
      height: fit-content;
      > div:first-child {
         h3 {
            text-align: center;
         }
         > p {
            margin-left: 15px;
         }
      }
      > div.second-container {
         justify-content: space-evenly;
         width: 100%;
         min-width: 0px;
         gap: var(--jd-gap-m);
         > ul {
            width: 32%;
            align-items: center;
            padding: var(--jd-padding-m) 0px;
            > li,
            p {
               width: 160px;
            }
         }
         > ul:last-child {
            > li {
               width: 180px;
            }
         }
      }
   }
   @media (width<818px) {
      > div.second-container {
         > ul {
            width: 208px;
            justify-content: space-around;
         }
      }
   }
   @media (width < 511px) {
      .last-container-footer {
         flex-wrap: wrap;
         min-width: 280px;
         padding: var(--jd-padding-l);
         width: 100%;
         align-items: center;
         border-top: 1px solid white;
         justify-content: center;
         > div:first-child {
            gap: 0px;
            align-items: start;
            justify-content: center;
            > p {
               width: 180px;
            }
         }
         > div:last-child {
            min-width: fit-content;
            width: 100%;
            justify-content: center;
         }
      }
   }
   @media (width< 471px) {
      > div:first-child {
         padding-inline: var(--jd-padding-xs);
         height: fit-content;
         min-width: fit-content;
         > h3 {
            font-size: 40px;
         }
         > p {
            font-size: 18px;
         }
      }
      > div.second-container {
         > ul {
            > p {
               align-items: center;
            }
            > li {
               position: relative;
               left: 20px;
            }
         }
         > ul:last-child {
            > li {
               left: 30px;
            }
         }
      }
   }
`
const Block = styled.div`
   display: flex;
   color: white;
`
