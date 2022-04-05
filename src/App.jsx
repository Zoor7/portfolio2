import useLocalStorage from 'use-local-storage'

import Sidebar from './sections/Sidebar/sidebar'
import Projects from './sections/ProjectsSection/Projects'
import Contact from './sections/Contact/Contact'
import Language from './sections/LanguagesSection/Language'

import './App.css'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>
      <Sidebar theme={theme} switchTheme={switchTheme}></Sidebar>
      <div className="main">
        <div className="about-me">
          <div className="title">
            <p>ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME</p>
          </div>
          <div>
            <p>
              Hi, I'm Héctor, I like to spend time clicking buttons and creating
              things.
            </p>
          </div>
        </div>
        <div className="studies">
          <div className="title">
            <p>
              STUDIES STUDIES STUDIES STUDIES STUDIES STUDIES STUDIES STUDIES{' '}
            </p>
          </div>
          <div>
            <h4>Web development (mobile focused)</h4>
            <p>-Institut tecnològic de Barcelona, (2019-2021).</p>
          </div>
          <div>
            <h4>FullStack Bootcamp</h4>
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
            <p>PROFESSIONAL EXPERIENCE PROFESSIONAL EXPERIENCE</p>
          </div>
          <div>
            <h4>Internship Front-end (React, React native)</h4>
            <p>-Grupo Hostienda, Barcelona (January, 2021 - May, 2021)</p>
          </div>
          <div>
            <h4>Looking for an opportunity</h4>
          </div>
        </div>
        <Projects></Projects>
        <div className="footer">
          <Contact></Contact>
          <Language></Language>
        </div>
      </div>
    </div>
  )
}

export default App
