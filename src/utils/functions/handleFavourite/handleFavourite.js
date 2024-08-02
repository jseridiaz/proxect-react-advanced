export const handleFavourite = (el, setArray, array) => {
   setArray(
      array.map(item =>
         item.id == el.id ? { ...item, favourite: !item.favourite } : item,
      ),
   )
}
