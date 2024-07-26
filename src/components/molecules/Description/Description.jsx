import Button from "../../atoms/button/button"
import H3 from "../../atoms/H3/H3"
import ImgHero from "../../atoms/Img/Img"
import Parraf from "../../atoms/Parraf/Parraf"

const Description = ({ h3, p, btn, img, children }) => {
   return (
      <div>
         {h3 && <H3></H3>}
         {p && <Parraf>{p}</Parraf>}
         {btn && <Button></Button>}
         {children}
         {img && <ImgHero />}
      </div>
   )
}

export default Description
