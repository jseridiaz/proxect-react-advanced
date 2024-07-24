import styled from "styled-components"

import { icons } from "../../../data/iconsSvg/iconSvg"

const Icon = () => {
   return <DivIcon>{icons[0].heart.transparent}</DivIcon>
}

export default Icon
const DivIcon = styled.div`
   background-color: red;
`
export const Img = styled.img`
   width: 150px;
   height: 190px;
`
