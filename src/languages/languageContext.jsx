import { createContext, useState } from 'react'
import en from './en.json'
import es from './es.json'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [text, setText] = useState(en)
  const handleLanguage = (lang) => {
    if (lang === 'en') {
      setText(en)
    }
    if (lang === 'es') {
      setText(es)
    }
  }
  return (
    <LanguageContext.Provider value={{ text, handleLanguage }}>{children}</LanguageContext.Provider>
  )
}
