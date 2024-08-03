import styled from "styled-components"

import useBoolean from "../../../utils/customHooks/useBoolean/useBoolean"
import Button from "../../atoms/button/button"
import SvgCart, { SvgCartRemove } from "../../atoms/Svg/SvgCart"

const DescriptionCard = ({ name, infoArticle, price, click }) => {
   const [newBoolean, setnewBoolean] = useBoolean(true)
   return (
      <ContainerDescription>
         {console.log(newBoolean)}
         <div>
            <h4>{name}</h4>
            <p>{infoArticle}</p>
            <p className='price'>{price}€</p>
         </div>
         <Button
            title='Add to cart'
            action={() => {
               click()
               setnewBoolean()
            }}
         >
            {newBoolean ? <SvgCart /> : <SvgCartRemove />}
         </Button>
      </ContainerDescription>
   )
}

export default DescriptionCard
const ContainerDescription = styled.div`
   position: absolute;
   display: flex;
   bottom: 0;
   background-color: aliceblue;
   width: 100%;
   height: 100px;
   justify-content: space-between;
   align-items: center;
   padding-inline: var(--jd-padding-l);
   border-radius: 0px 0px 20px 20px;
   * {
      font-family: "Inter", sans-serif;
   }
   > div {
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: var(--jd-gap-s);
   }
   button {
      position: relative;
      top: 10px;
      width: 45px;
      height: 45px;
      align-content: center;

      > svg {
         width: 100%;
         height: 100%;
      }
   }
`
