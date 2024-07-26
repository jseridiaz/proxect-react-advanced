import styled from "styled-components"

import { Flex } from "../../../App"
import {
   arrayListHeader,
   arraySvgHeader,
} from "../../../data/arrayListHeader/arrayListHeader"
import Li from "../../atoms/Li/Li"
import LogoTitle from "../../atoms/LogoTitle/LogoTitle"
import List from "../../molecules/List/List"

const Header1 = () => {
   return (
      <>
         <Flex id='shadow-header' />
         <Header>
            <LogoTitle>
               <Li text='LinkFashion Store' />
            </LogoTitle>
            <List arrayList={arrayListHeader} idName='container-li-clothes' />
            <List
               arrayList={arraySvgHeader}
               button={true}
               idName='container-icons'
            />
         </Header>
      </>
   )
}

export default Header1

const Header = styled.header`
   position: relative;
   z-index: 10;
   display: flex;
   width: 100%;
   justify-content: space-between;
   height: 99px;
   align-items: center;
   gap: 100px;
   background-color: white;
`
