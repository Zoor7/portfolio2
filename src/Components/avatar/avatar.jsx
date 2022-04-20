import { useState } from 'react'
import './avatar.css'

const Avatar = () => {
  const [role, setRole] = useState('Frontend')

  const handleArrow = (arrow, target) => {
    const scrollDiv = document.getElementsByClassName('avatar-filter')[0]
    if (arrow === '>') {
      scrollDiv.scrollLeft += 150
    }
    if (arrow === '<') {
      scrollDiv.scrollLeft -= 150
    }
  }
  const isActive = (e) => {
    if (e === role) return 'active'
    return ''
  }
  const handleRole = (e) => {
    console.log(e.innerText)
    setRole(e.innerText)
  }

  return (
    <div className="avatar">
      <div className="avatar-filter">
        <span onClick={() => handleArrow('<')}>{'<'}</span>
        <p className={isActive('Frontend')} onClick={(e) => handleRole(e.target)}>
          Frontend
        </p>
        <p className={isActive('Backend')} onClick={(e) => handleRole(e.target)}>
          Backend
        </p>
        <p className={isActive('Tools')} onClick={(e) => handleRole(e.target)}>
          Tools
        </p>
        <p className={isActive('Learning')} onClick={(e) => handleRole(e.target)}>
          Learning
        </p>
        <span onClick={() => handleArrow('>')}>{'>'}</span>
      </div>
      {role === 'Frontend' && (
        <div className="avatar-images">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        </div>
      )}
      {role === 'Backend' && (
        <div className="avatar-images">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
        </div>
      )}
      {role === 'Tools' && (
        <div className="avatar-images">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
        </div>
      )}
      {role === 'Learning' && (
        <div className="avatar-images">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
          <img src="https://www.svgrepo.com/show/306098/githubactions.svg" />
          <img src="https://www.svgrepo.com/show/339568/systems-devops-cicd-pipeline.svg" />
        </div>
      )}
    </div>
  )
}

export default Avatar
