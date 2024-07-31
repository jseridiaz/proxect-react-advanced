import { useState } from "react"

const useBoolean = (initialValue, valueToChange) => {
   const [useBoolean, setBoolean] = useState(initialValue)

   const changeBoolean = () => setBoolean(valueToChange || !useBoolean)

   return [useBoolean, changeBoolean]
}

export default useBoolean
