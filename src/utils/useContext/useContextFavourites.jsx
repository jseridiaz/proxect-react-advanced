import { createContext, useState } from "react"

import arrayCards from "../../data/Home/sectionCategories/arrayCards/arrayCards"

export const FavouriteContext = createContext()

const FavoriteContextProvider = ({ children }) => {
   const [arrayToChange, setArrayToChange] = useState(arrayCards)

   return (
      <FavouriteContext.Provider value={{ arrayToChange, setArrayToChange }}>
         {children}
      </FavouriteContext.Provider>
   )
}

export default FavoriteContextProvider
