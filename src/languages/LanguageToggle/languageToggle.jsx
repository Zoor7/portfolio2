import { useContext, useState } from 'react'
import './languageToggle.css'
import { LanguageContext } from '../languageContext'

const LanguageToggle = () => {
  const [option, setOption] = useState('en')
  const { handleLanguage } = useContext(LanguageContext)
  const handleOption = (e) => {
    setOption(e.value)
    handleLanguage(e.value)
  }
  return (
    <div className="language-toggle">
      <select value={option} onChange={(e) => handleOption(e.target)}>
        <option value="en">en</option>
        <option value="es">es</option>
      </select>
    </div>
  )
}

export default LanguageToggle
