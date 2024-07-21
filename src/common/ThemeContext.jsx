// import React, {useContext, createContext, useEffect, useState} from "react";

// const themeContext = createContext();

// export const useTheme = ()=> useContext(themeContext);

// const ThemeProvider = ({children}) => {

//     const [theme, setTheme] = useState(()=>localStorage.getItem('theme')||'light');

//     useEffect(
//         ()=>{
//             document.body.setAttribute("theme-data", theme);
//             localStorage.setItem('theme',theme);
//         }, [theme]
//     );

//     const toggleTheme = ()=>{
//         console.log("DONE");
//         setTheme((prevTheme) => (prevTheme === 'light'?'dark':'light'))
//     };
//   return (
//     <div>
//       <ThemeProvider value={{theme,toggleTheme}}>
//         {children}
//       </ThemeProvider>
//     </div>
//   )
// }

// export default ThemeProvider;
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
