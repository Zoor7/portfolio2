import { useContext } from 'react'
import { LanguageContext } from '../../languages/languageContext'
import Contact from '../Contact/Contact'
import Language from '../LanguagesSection/Language'
import Projects from '../ProjectsSection/Projects'
import './main.css'

const Main = () => {
  const { text } = useContext(LanguageContext)
  return (
    <div className="main">
      <div className="about-me">
        <div className="title">
          <p>{text.about.title}</p>
        </div>
        <div>
          <p>{text.about.desc}</p>
        </div>
      </div>
      <div className="studies">
        <div className="title">
          <p>{text.studies.title}</p>
        </div>
        <div>
          <h4>{text.studies.study1.title}</h4>
          <p>{text.studies.study1.desc}</p>
        </div>
        <div>
          <h4>{text.studies.study2.title}</h4>
          <p>
            -
            <a
              className="link"
              href="https://www.fullstackopen.com/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              fullstackopen.com/en
            </a>
          </p>
        </div>
      </div>
      <div className="experience">
        <div className="title">
          <p>{text.pex.title}</p>
        </div>
        <div>
          <h4>{text.pex.job1.title}</h4>
          <p>{text.pex.job1.desc}</p>
        </div>
        <div>
          <h4>{text.pex.job2.title}</h4>
        </div>
      </div>
      <Projects></Projects>
      <div className="footer">
        <Contact></Contact>
        <Language></Language>
      </div>
    </div>
  )
}

export default Main
