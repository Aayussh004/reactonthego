import React, {useContext,createContext} from "react";

//phle hum do file banate the UserContext and UserContextProvider but ab dono ka kaam ek hi me krenge

export const ThemeContext = createContext(//iske andar me variables, methods kuch bhi pass kr skta hu jo bhi me storeroom me rkhna chahata hu
    {
      themeMode: "light",
      darktheme: ()=>{},
      lighttheme: ()=>{}
    }
)



// ab mujhe UserContextProvider wrapper banane ke liye dusri .jsx file na bna kr yhi pe ThemeProvider bna kr ThemeContext use kr lunga

export const ThemeProvider = ThemeContext.Provider;//wrapper in app.jsx

//custom hooks banake ThemeContext use krte hai ye ek standard process hai
export default function useTheme(){
    return useContext(ThemeContext);
}
