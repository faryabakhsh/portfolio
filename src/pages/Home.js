import React from "react";
import "./Home.css";
import ProjectItem from "../components/ProjectItem";

function home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm <span>Farya Bakhsh</span></h2>
        <div className="prompt">
          <p>
            A passionate web developer with a keen interest in front-end
            technologies
            <br />
            who loves bringing ideas to life through coding, design, and
            accessibility.
          </p>
          
          {/* <div className="resume"><p>Download my <a href = "">resume</a></p></div> */}
        </div>
      </div>

      <div className="aboutme">
        <h1>More about me</h1>
        <p className="p">
          {" "}
          Hello there! I am Farya Bakhsh, a front-end developer currently living
          in Pakistan. As a career changer, I am looking to establish myself as
          a professional developer.
          <br />
          <br />
          As an active member of #Udemy and #FrontendMaster community, I
          completed frontend development path. Moreover, to hone my skills
          further, I am taking Minor Courses of Computer Science from the
          university I am currently studying. <br />
          <br />
          I am a passionate front-end developer that focuses on writing
          idiomatic, scalable and accessible code while prioritizing teamwork
          and collaboration with others as a part of my workflow. <br /> <br />
          When I am not coding, I'm spending time with my family. I am a huge
          fan of John Green's writings, so there is a good chance either I am
          reading one of his pieces or chatting about his work with my friends.
        </p>
      </div>
      <button>Lets connect</button>

      <br />
      <br />
      <br />
      <br />

      <div className="skills">
        <h1>Skills</h1>

        <ul>
        <li className="languages">
          
          HTML, CSS, Bootstrap, JavaScript, JQuery, React.js, Git, Node
          
        </li>

        </ul>
        <br />
        <br />
        
      </div>

      <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        <ProjectItem name ="Food Order App" image ="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" skills="React.js, material Ui, redux, Html, Css"/>
        <ProjectItem name ="Ecommerce Web App" image ="https://i.pinimg.com/736x/aa/a6/f0/aaa6f0ac5501503db355ca97c1e6780b.jpg" skills="Angular, Bootstrap, Html, Css"/>
        <ProjectItem name ="News Portal" image ="https://www.dynamicpoint.com/wp-content/uploads/2019/06/PortalImage1.png" skills="Angular, Bootstrap, Html, Css, API's"/>
        <br/>
        <br/>
      </div>
    </div>
    </div>
  );
}

export default home;

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
