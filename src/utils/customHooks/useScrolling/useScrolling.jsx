import { useEffect, useState } from "react"

const useScrolling = () => {
   const [scroll, setScroll] = useState({ scrollY: window.scrollY })

   const getScroll = () => {
      setScroll({ scrollY: window.scrollY })
   }

   useEffect(() => {
      addEventListener("scroll", getScroll)

      return () => {
         removeEventListener("scroll", getScroll)
      }
   }, [])

   return { scroll }
}

export default useScrolling
