import React from "react"
import styled from "styled-components"

import Button from "../../atoms/button/button"
import Parraf from "../../atoms/Parraf/Parraf"

const Toast = () => {
   return (
      <ToastContainer id='toast-container'>
         <div className='info-toast-container'>
            <svg
               xmlns='http://www.w3.org/2000/svg'
               width='21'
               height='21'
               fill='none'
            >
               <g filter='url(#a)'>
                  <path
                     fill='#fff'
                     d='M19.799 10.111c0 5.35-4.337 9.688-9.688 9.688-5.35 0-9.687-4.338-9.687-9.688C.424 4.761 4.76.424 10.11.424S19.8 4.76 19.8 10.11ZM8.99 15.241l7.187-7.188a.625.625 0 0 0 0-.884l-.884-.884a.625.625 0 0 0-.883 0l-5.862 5.862L5.812 9.41a.625.625 0 0 0-.884 0l-.884.884a.625.625 0 0 0 0 .884l4.063 4.063c.244.244.64.244.884 0Z'
                  />
               </g>
               <defs>
                  <filter
                     id='a'
                     width='27.375'
                     height='27.375'
                     x='-3.576'
                     y='.424'
                     colorInterpolationFilters='sRGB'
                     filterUnits='userSpaceOnUse'
                  >
                     <feFlood floodOpacity='0' result='BackgroundImageFix' />
                     <feColorMatrix
                        in='SourceAlpha'
                        result='hardAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                     />
                     <feOffset dy='4' />
                     <feGaussianBlur stdDeviation='2' />
                     <feComposite in2='hardAlpha' operator='out' />
                     <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                     <feBlend
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_102_59'
                     />
                     <feBlend
                        in='SourceGraphic'
                        in2='effect1_dropShadow_102_59'
                        result='shape'
                     />
                  </filter>
               </defs>
            </svg>
            <Parraf>This article has been added to your cart</Parraf>
         </div>
         <Button className='close-toast'>
            <svg
               xmlns='http://www.w3.org/2000/svg'
               width='12'
               height='12'
               fill='none'
            >
               <path
                  stroke='#CCEAC4'
                  strokeWidth='2'
                  d='m1 1 5 5m5 5L6 6m0 0 5-5L1 11'
               />
            </svg>
         </Button>
      </ToastContainer>
   )
}

export default Toast

const ToastContainer = styled.div`
   &[id="toast-container"] {
      height: fit-content;
      position: relative;
      border-radius: var(--jd-br-s);
      background-color: #55b938;
      align-content: center;
      width: 40%;
      padding: var(--jd-padding-s);
      justify-content: center;
      align-items: start;
   }

   .info-toast-container {
      display: flex;
      gap: var(--jd-gap-s);
      align-items: center;
   }
   .close-toast {
      position: absolute;
      top: 7%;
      right: 0.8%;
   }
`
