import { useCallback, useState } from "react"

const useCounter = () => {
   const [counter, setCounter] = useState(1)

   const sum = () => {
      setCounter(counter + 1)
   }

   const res = useCallback(() => {
      counter >= 1 && setCounter(counter - 1)
   }, [counter])
   const clear = useCallback(() => {
      console.log("ok")
   }, [])

   return { counter, sum, res, clear }
}

export default useCounter
