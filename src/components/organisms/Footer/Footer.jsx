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
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='21'
                  fill='none'
               >
                  <path
                     fill='#CACACA'
                     d='M25.053 2.623c-.9.395-1.866.667-2.882.79A5.055 5.055 0 0 0 24.38.633a10.5 10.5 0 0 1-3.195 1.209 5.023 5.023 0 0 0-8.558 4.573C8.452 6.22 4.751 4.214 2.276 1.183a4.944 4.944 0 0 0-.682 2.53c0 1.746.889 3.277 2.232 4.177a4.99 4.99 0 0 1-2.272-.625v.06a5.028 5.028 0 0 0 4.027 4.929 5.175 5.175 0 0 1-1.32.175c-.322 0-.63-.032-.937-.088a5.046 5.046 0 0 0 4.701 3.489 10.082 10.082 0 0 1-6.228 2.144c-.4 0-.797-.019-1.197-.067a14.283 14.283 0 0 0 7.717 2.257c9.238 0 14.287-7.653 14.287-14.28 0-.211 0-.426-.016-.642a10.056 10.056 0 0 0 2.512-2.6l-.047-.02Z'
                  />
               </svg>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='25'
                  fill='none'
               >
                  <path
                     fill='#CACACA'
                     fillRule='evenodd'
                     d='M3.133 12.5a9.916 9.916 0 1 1 6.502 9.313 259.637 259.637 0 0 0 1.959-5.435c.67.479 1.534.788 2.623.788 2.257 0 4.637-1.488 5.226-4.438C20.186 9.024 17.22 5.5 13.05 5.5c-1.754 0-3.478.704-4.768 1.822-1.293 1.121-2.232 2.736-2.232 4.594 0 .904.273 1.911.923 2.574a1.178 1.178 0 0 0 1.652 0 1.167 1.167 0 0 0 .025-1.623c-.917-1.143.292-3.029 1.16-3.781.902-.782 2.093-1.253 3.24-1.253 2.831 0 4.531 2.309 4.107 4.438-.355 1.766-1.7 2.562-2.94 2.562-.955 0-1.468-.403-1.797-.924.18-.565.332-1.078.442-1.496.224-.86.36-1.897-.414-2.542-.575-.478-1.254-.373-1.67-.164-.773.384-1.228 1.287-1.228 2.21 0 .514.08 1.312.37 2.136a199.816 199.816 0 0 1-2.378 6.694A9.907 9.907 0 0 1 3.133 12.5ZM13.05.25C6.284.25.8 5.734.8 12.5c0 6.765 5.484 12.249 12.25 12.249 6.765 0 12.25-5.484 12.25-12.25C25.3 5.734 19.815.25 13.05.25Z'
                     clipRule='evenodd'
                  />
               </svg>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  fill='none'
               >
                  <path
                     fill='#F9F9F9'
                     fillRule='evenodd'
                     d='M7.2.324C8.506.264 8.923.25 12.25.25c3.328 0 3.744.014 5.05.074 1.304.059 2.195.266 2.974.57.818.307 1.558.789 2.17 1.412a6.005 6.005 0 0 1 1.413 2.17c.303.779.51 1.67.57 2.974.06 1.306.073 1.723.073 5.05s-.014 3.744-.073 5.05c-.06 1.304-.267 2.195-.57 2.974a6.007 6.007 0 0 1-1.413 2.17 6.005 6.005 0 0 1-2.17 1.413c-.779.303-1.67.51-2.973.57-1.307.06-1.724.073-5.05.073-3.328 0-3.745-.014-5.051-.073-1.304-.06-2.195-.267-2.974-.57a6.011 6.011 0 0 1-2.17-1.413 6.004 6.004 0 0 1-1.413-2.17c-.303-.779-.51-1.67-.57-2.974C.014 16.244 0 15.829 0 12.5s.014-3.744.074-5.05c.059-1.304.266-2.195.57-2.974a6.01 6.01 0 0 1 1.412-2.17A6.005 6.005 0 0 1 4.226.893C5.005.59 5.896.383 7.2.323Zm10 2.204c-1.291-.058-1.68-.071-4.95-.071-3.27 0-3.659.013-4.95.072-1.195.054-1.843.253-2.275.421-.571.222-.98.488-1.408.916a3.8 3.8 0 0 0-.916 1.41c-.169.43-.368 1.08-.422 2.274-.059 1.291-.072 1.68-.072 4.95 0 3.27.013 3.659.072 4.95.054 1.195.253 1.843.422 2.275.196.532.509 1.013.916 1.409.395.406.876.72 1.408.915.432.169 1.08.368 2.275.422 1.291.06 1.679.072 4.95.072s3.659-.013 4.95-.072c1.195-.054 1.843-.253 2.275-.422.572-.221.98-.487 1.409-.915.406-.396.72-.877.916-1.41.168-.43.367-1.08.422-2.274.058-1.291.071-1.68.071-4.95 0-3.27-.013-3.659-.071-4.95-.055-1.195-.254-1.843-.422-2.275a3.793 3.793 0 0 0-.916-1.409 3.8 3.8 0 0 0-1.41-.916c-.43-.168-1.08-.367-2.273-.421Zm-6.514 13.748a4.085 4.085 0 0 0 5.652-3.776 4.087 4.087 0 1 0-5.652 3.776ZM7.798 8.048a6.296 6.296 0 1 1 8.904 8.904 6.296 6.296 0 0 1-8.904-8.904Zm12.145-.906a1.488 1.488 0 1 0-2.105-2.105 1.488 1.488 0 0 0 2.105 2.105Z'
                     clipRule='evenodd'
                  />
               </svg>
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
      }
   }
   @media (width<1069px) {
      justify-content: center;
      height: fit-content;
      > div.second-container {
         justify-content: space-around;
         min-width: 0px;
         px > ul {
            width: 46%;
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
         justify-content: space-between;
         > div:first-child {
            gap: 5px;
            align-items: start;
         }
         > div:last-child {
            min-width: fit-content;
            width: 100%;
            justify-content: center;
         }
      }
   }
   @media (width< 393px) {
      > div.second-container {
         > ul {
            align-items: center;
            width: 100%;
            > p {
               display: flex;
               flex-direction: row;
               justify-content: center;
            }
            > li {
               display: flex;
               flex-direction: row;

               justify-content: center;
            }
         }
      }
   }
`
const Block = styled.div`
   display: flex;
   color: white;
`
