import { createContext, useState } from "react";

export const StateContext = createContext();

const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false);
  return (
    <StateContext.Provider value={{activeMenu, setActiveMenu}}>
        {children}
    </StateContext.Provider>
  )
}

export default ContextProvider;
