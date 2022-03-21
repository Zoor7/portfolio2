import { useState } from 'react'
import Card from "../../Components/Card/Card"
import "./projects.css"
import data from "../../utils/data.json"



const Projects = () => {

    const [project, setProject] = useState();

    const handleClick = (click) => {
        setProject(data[click.target.innerText])
    }

    const handleClose = () => {
        return (
            setProject('')
        )
    }
    return (
        <div className='projects'>
            <h2>PROJECTS</h2>
            {project ?
                <div>
                    <Card project={project} handleClose={handleClose}></Card>
                </div>
                : <ul>
                    <li onClick={handleClick}>BasketRank</li>
                </ul>
            }

        </div>
    );
}

export default Projects;
