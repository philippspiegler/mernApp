import { useState, useContext, createContext } from "react"

const StyleContext = createContext()

// custom hook
function useStyle() {
  useContext(StyleContext)
}

// setting up the style itself
function StyleProvider({ children }) {
  const styleTheme = {
    backgroundColor: "#ff9d5c",
  }

  return (
    <StyleContext.Provider value={styleTheme}>{children}</StyleContext.Provider>
  )
}
