import { useState } from 'react'
import Card from '../../Components/Card/Card'
import './projects.css'
import data from '../../utils/data.json'

const Projects = () => {
  const [project, setProject] = useState()

  const handleClick = (click) => {
    setProject(data[click.target.innerText])
  }

  const handleClose = () => {
    return setProject('')
  }
  return (
    <div className="projects">
      <div className="title">
        <p>PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS</p>
      </div>
      {project
        ? (
        <Card project={project} handleClose={handleClose}></Card>
          )
        : (
        <ul>
          <li onClick={handleClick}>BasketRank</li>
          <li onClick={handleClick}>aerolab-challenge-vite</li>
        </ul>
          )}
    </div>
  )
}

export default Projects
