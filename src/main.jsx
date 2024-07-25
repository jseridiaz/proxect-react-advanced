import "./index.css"

import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router-dom"

import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter basename='/'>
      <HelmetProvider>
         <App />
      </HelmetProvider>
   </BrowserRouter>,
)
