import changeObjectValue from "../changeObjectValue/changeObjectValue"

const addToCart = (el, arrayToFind, setArray) => {
   if (arrayToFind.find(item => item.id == el.id)) {
      const products = changeObjectValue(arrayToFind, el)
      setArray(products)
   } else {
      setArray([...arrayToFind, el])
   }
}
export default addToCart
