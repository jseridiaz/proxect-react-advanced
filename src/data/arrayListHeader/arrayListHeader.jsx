import { TypeHeart } from "../iconsSvgHeart/iconSvg"
import IconSvgCart from "../iconSvgCart/IconSvgCart"
import IconSvgUser from "../iconUser/IconUser"

export const arrayListHeader = [
   "New & Features",
   "Men",
   "Women",
   "Kids",
   "Accesories",
]

export const arraySvgHeader = [
   {
      svg: IconSvgUser(),

      alt: "register-login-icon",
   },
   { svg: TypeHeart("#ffffff"), alt: "heart" },
   {
      svg: IconSvgCart(),
      alt: "shopping-cart",
   },
]
