export const calcTotal = array => {
   console.log("render")

   return array.reduce((acc, el) => el.quantity * el.price + acc, 0).toFixed(2)
}
