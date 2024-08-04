import { useState } from "react"

const useBoolean = initialValue => {
   const [useBoolean, setBoolean] = useState(initialValue)

   const changeBoolean = valueTochange => setBoolean(valueTochange || !useBoolean)

   return [useBoolean, changeBoolean, setBoolean]
}

export default useBoolean
