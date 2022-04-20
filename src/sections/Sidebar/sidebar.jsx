import Avatar from '../../Components/avatar/avatar'
import CvDownload from '../../Components/cvDownload/cvDownload'
import ThemeSwitch from '../../Components/ThemeSwitch/ThemeSwitch'
import LanguageToggle from '../../languages/LanguageToggle/languageToggle'
import Contact from '../Contact/Contact'
import Language from '../LanguagesSection/Language'
import './sidebar.css'

const Sidebar = ({ switchTheme, theme }) => {
  return (
    <div className="sidebar">
      <Avatar />
      <div className="name-role">
        <p className="name">Héctor LLorca</p>
        <p className="role">Junior FullStack</p>
        <div className="themeCv">
          <ThemeSwitch theme={theme} switchTheme={switchTheme}></ThemeSwitch>
          <LanguageToggle />
          <CvDownload />
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
