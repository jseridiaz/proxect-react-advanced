import { useState } from "react"

const useFilter = (array, propToFilter, filtering) => {
   const [filter, setFilter] = useState(
      array.filter(e => e[propToFilter] == filtering),
   )

   return { filter, setFilter }
}

export default useFilter
