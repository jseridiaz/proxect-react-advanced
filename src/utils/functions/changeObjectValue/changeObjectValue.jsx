const changeObjectValue = (cart, el) => {
   return cart.map(element =>
      el.id == element.id
         ? { ...element, quantity: element.quantity + 1 }
         : { ...element },
   )
}
export default changeObjectValue
