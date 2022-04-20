import useLocalStorage from 'use-local-storage'

import Sidebar from './sections/Sidebar/sidebar'

import './App.css'
import { LanguageProvider, LanguageContext } from './languages/languageContext'
import { useContext, useEffect } from 'react'
import Main from './sections/Main/main'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <LanguageProvider>
      <div className="App" data-theme={theme}>
        <Sidebar theme={theme} switchTheme={switchTheme}></Sidebar>
        <Main></Main>
      </div>
    </LanguageProvider>
  )
}

export default App
