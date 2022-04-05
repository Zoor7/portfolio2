import React from 'react'
import './card.css'

const Card = ({ project, handleClose }) => {
  return (
    <div className="card">
      <div className="close">
        <span onClick={handleClose}>X</span>
      </div>
      <div className="card-image">
        <a href={project.link} target="_blank" rel="noreferrer">
          <img src={project.img} alt="" />
        </a>
      </div>
      <div className="description">{project.descripcion}</div>
    </div>
  )
}

export default Card
