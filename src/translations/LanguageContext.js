import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isPolish, setIsPolish] = useState(true);

  const toggleLanguage = () => setIsPolish((prev) => !prev);

  return (
    <LanguageContext.Provider value={{ isPolish, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => useContext(LanguageContext);
