import React from "react"
import styled from "styled-components"

import Button from "../../atoms/button/button"
import Parraf from "../../atoms/Parraf/Parraf"

const Toast = ({ nameItem, onClose }) => {
   return (
      <ToastContainer id='toast-container'>
         <div className='info-toast-container'>
            <svg
               xmlns='http://www.w3.org/2000/svg'
               width='35'
               height='35'
               fill='none'
               viewBox='0 0 24 24'
            >
               <rect
                  width='24'
                  height='24'
                  fill='#fff'
                  strokeWidth='0'
                  rx='12'
                  transform='matrix(.74 0 0 .74 3.12 3.12)'
               />
               <g stroke='#55b938' strokeWidth='2.064'>
                  <circle cx='12' cy='12' r='10' />
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='m8.5 12.5 2 2 5-5'
                  />
               </g>
            </svg>
            <Parraf> {nameItem} has been added to your cart</Parraf>
         </div>
         <Button className='close-toast' action={onClose}>
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
      position: fixed;
      left: 50%;
      z-index: 2;
      bottom: 1%;
      transform: translate(-50%);
      border-radius: var(--jd-br-s);
      background-color: #55b938;
      align-content: center;
      width: 40%;
      height: 70px;
      padding: var(--jd-padding-s) var(--jd-padding-l);
      justify-content: center;
      align-items: start;
      animation: show 1s forwards;
   }
   svg {
      min-width: 35px;
      min-height: 35px;
   }
   .info-toast-container {
      display: flex;
      gap: var(--jd-gap-s);
      align-items: center;
   }
   .close-toast {
      position: absolute;
      width: 15px;
      height: 15px;
      top: 7%;
      right: 0.8%;
      &:hover {
         transform: scale(1.1);
      }
   }
   @keyframes show {
      0% {
         bottom: -20%;
      }
      100% {
         bottom: 2%;
      }
   }
   @media (width<958px) {
      &[id="toast-container"] {
         width: 60%;
      }
   }
   @media (width<583px) {
      &[id="toast-container"] {
         .info-toast-container {
            > P {
               font-size: 1rem;
            }
         }
         width: 80%;
      }
   }
   @media (width<583px) {
      &[id="toast-container"] {
         .info-toast-container {
            > P {
               font-size: 1rem;
            }
         }
         width: 90%;
      }
   }
`
