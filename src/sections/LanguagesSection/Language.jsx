import { useContext } from 'react'
import { LanguageContext } from '../../languages/languageContext'
import './Language.css'

const Language = () => {
  const { text } = useContext(LanguageContext)
  return (
    <div className="languages">
      <h2>{text.language.title}</h2>
      <ul>
        <li>{text.language.lang1}</li>
        <li>{text.language.lang2}</li>
        <li>{text.language.lang3}</li>
      </ul>
    </div>
  )
}

export default Language
