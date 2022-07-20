import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "./Projects.css";

function projects() {
  return (
    <div className='projects'>
      <h1>my personal projects</h1>
      <div className='projectList'>
        <ProjectItem name ="Food Order App" image ="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"/>
        <ProjectItem name ="Ecommerce Web App" image ="https://i.pinimg.com/736x/aa/a6/f0/aaa6f0ac5501503db355ca97c1e6780b.jpg"/>
        <ProjectItem name ="News Portal" image ="https://www.dynamicpoint.com/wp-content/uploads/2019/06/PortalImage1.png"/>
        <br/>
        <br/>
      </div>
    </div>
  )
}

export default projects
