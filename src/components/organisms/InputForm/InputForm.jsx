import React from "react"
import styled from "styled-components"

import Parraf from "../../atoms/Parraf/Parraf"

const InputForm = ({
   idInput,
   idName,
   typeInput = "text",
   reference,
   error,
   action,
}) => {
   return (
      <FieldSet $infoerror={error}>
         <label htmlFor={idInput}>{idName}</label>
         <input
            id={idInput}
            onChange={action}
            autoComplete='true'
            type={typeInput}
            ref={reference}
         />
         <Parraf id='error-msn'>{error}</Parraf>
      </FieldSet>
   )
}

export default InputForm

const FieldSet = styled.fieldset`
   display: flex;
   margin-inline: auto;
   border: none;
   width: 40%;
   flex-direction: column;
   align-items: center;
   > label {
      width: 100%;
      text-align: left;
   }
   > input {
      padding: var(--jd-padding-m) calc(var(--jd-padding-xs) + 2px);
      border-radius: var(--jd-br-s);
      text-align: left;
      width: 100%;
      font-size: 16px;
      font-weight: 500;
      border: none;
      outline: ${({ $infoerror }) =>
         $infoerror ? "2px solid crimson" : "var(--jd-color-br-primary)"};
      /* var(--jd-color-br-primary); */

      &:hover {
         outline: var(--jd-color-br-hover);
      }
      &:focus {
         outline: ${({ $infoerror }) =>
            $infoerror ? "2px solid crimson" : " var(--jd-color-br-focus)"};
      }
   }
   > p {
      color: crimson;
      font-weight: 600;
   }
   @media (width<864px) {
      width: 60%;
   }
   @media (width<400px) {
      width: 85%;
   }
`
