import { useContext } from 'react'
import { LanguageContext } from '../../languages/languageContext'
import './Contact.css'

const Contact = () => {
  const { text } = useContext(LanguageContext)
  return (
    <div className="contact">
      <h2>{text.contact.title}</h2>
      <ul>
        <li>Barcelona</li>
        <li>hectorllorca7@gmail.com</li>
        <a href="http://github.com/Zoor7" target="_blank" rel="noreferrer">
          <li> github/zoor7</li>
        </a>
        <a href="https://www.linkedin.com/in/hector-llorca/" target="_blank" rel="noreferrer">
          <li>linkedin</li>
        </a>
      </ul>
    </div>
  )
}

export default Contact
