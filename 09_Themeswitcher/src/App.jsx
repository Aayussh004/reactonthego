import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Cards'

function App() {

  const [themeMode, setThemeMode] = useState("light")//yha pe mene themeMode theme.js context wali file ka variable use kiya hu directly

  const lighttheme = ()=>{//ye whi method h to ThemeProvider ki values de rkhi hai
    setThemeMode("light")
  }
  
  const darktheme = ()=>{
    setThemeMode("dark")
  }
  
  // ab actually me theme to javascript se hi change hogi
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark");
    const mode = document.querySelector('html').classList;
    mode.add(themeMode);//jo usestate ka thememode hai wo dedo
  }, [themeMode])//dependency to themMode hi hogi kyuki whi change ho rha hai
  

  return (
    <ThemeProvider value={{themeMode,lighttheme, darktheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

    </ThemeProvider>
    
  )
}

export default App
