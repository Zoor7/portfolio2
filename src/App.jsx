import useLocalStorage from 'use-local-storage'

import Sidebar from './sections/Sidebar/sidebar'
import Projects from './sections/ProjectsSection/Projects'
import Contact from './sections/Contact/Contact'
import Language from './sections/LanguagesSection/Language'

import './App.css'



function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme =()=>{
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>
      <Sidebar theme={theme} switchTheme={switchTheme}></Sidebar>
      <div className="main">
        <div className="main-container">

          <div className="about-me">
            <h2>ABOUT ME</h2>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, cumque maiores perspiciatis accusantium porro numquam? Numquam ipsum, non dolores, at nostrum, sequi et obcaecati incidunt commodi asperiores accusantium optio laudantium? Amet natus perspiciatis doloremque optio voluptatum. Labore molestiae in obcaecati rem? Aut dolores impedit, autem non deleniti quam animi ex illo a eius similique blanditiis odio error provident voluptas dolorum facilis distinctio suscipit, recusandae ipsum. Repudiandae tenetur ullam cumque autem ea eius totam pariatur, perspiciatis possimus ut repellat minus animi quis natus doloremque corporis nobis nulla consequuntur dicta mollitia perferendis aspernatur! Tempora aliquam quibusdam possimus, perferendis animi iste provident ex!</div>
          </div>
          <div className="studies">
            <h2>STUDIES</h2>
            <div>
              <h4>Web development (mobile focused)</h4>
              <p>-Institut tecnològic de Barcelona, (2019-2021).</p>
            </div>
            <div>
              <h4>FullStack Bootcamp</h4>
              <p>-<a className='link' href='https://www.fullstackopen.com/en' target="_blank" rel='noopener noreferrer'  >fullstackopen.com/en</a></p>
            </div>
          </div>
          <div className="experience">
            <h2>PROFESSIONAL EXPERIENCE</h2>
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

    </div>
  )
}

export default App
