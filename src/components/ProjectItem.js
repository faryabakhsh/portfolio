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


//  const ProjectList = [
//   {
//       "id": 1,
//       name: "Food Order App",
//       image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
//   },
//   {
//       "id": 2,
//       name: "E-commerce App",
//       image: "https://i.pinimg.com/736x/aa/a6/f0/aaa6f0ac5501503db355ca97c1e6780b.jpg",
//   },
//   {
//       "id": 3,
//       name: "News Portal",
//       image: "https://www.dynamicpoint.com/wp-content/uploads/2019/06/PortalImage1.png",
//   },
// ];