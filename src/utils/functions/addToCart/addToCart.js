const addToCart = (el, arrayToFind, setArray) => {
   if (arrayToFind.find(item => item.id == el.id)) {
      return
   } else {
      setArray([...arrayToFind, el])
   }
}
export default addToCart
