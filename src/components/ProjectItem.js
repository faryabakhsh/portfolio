import React from 'react'

function ProjectItem({image, name, skills}) {
  return (
    <div className='projectItem'>
      <div style = {{backgroundImage: `url(${image})`}} className="bgImage"/>
      <h1>{name}</h1>
      <p>{skills}</p>
    </div>
  )
}

export default ProjectItem
