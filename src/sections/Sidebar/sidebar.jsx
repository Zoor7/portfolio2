import React from 'react'
import CvDownload from '../../Components/cvDownload/cvDownload'
import ThemeSwitch from '../../Components/ThemeSwitch/ThemeSwitch'
import Contact from '../Contact/Contact'
import Language from '../LanguagesSection/Language'
import './sidebar.css'

const Sidebar = ({ switchTheme, theme }) => {
  return (
    <div className="sidebar">
      <div className="avatar">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
      </div>
      <div className="name-role">
        <p className="name">Héctor LLorca</p>
        <p className="role">Junior FullStack</p>
      <div className='themeCv'>
          <ThemeSwitch theme={theme} switchTheme={switchTheme}></ThemeSwitch>
          <CvDownload/>
        </div>
      </div>
      <hr />
      <div className="lan-contact">
        <Language></Language>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default Sidebar
