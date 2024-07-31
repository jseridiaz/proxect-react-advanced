export const INITIAL_STATE = {
   errorName: "",
   errorSurname: "",
   errorEmail: "",
   errorPassword: "",
}
const useReducerLogin = (state, action) => {
   switch (action.type) {
      case "ADD_ERROR_NAME":
         console.log(action)
         return {
            ...state,
            errorName: action.payload == "clear" ? "" : "*Name is required",
         }
      case "ADD_ERROR_SURNAME":
         console.log(action)
         return {
            ...state,
            errorSurname: action.payload === "clear" ? "" : "*Surname is required",
         }
      case "ADD_ERROR_EMAIL":
         console.log(action)

         return {
            ...state,
            errorEmail: action.payload === "clear" ? "" : "*Insert a valid email",
         }
      case "ADD_ERROR_PASSWORD":
         console.log(action)

         return {
            ...state,
            errorPassword:
               action.payload === "clear"
                  ? ""
                  : "*The password must contain a Uppercase, Lowercase, a Number and a Special character",
         }
      default:
         return state
   }
}

export default useReducerLogin
