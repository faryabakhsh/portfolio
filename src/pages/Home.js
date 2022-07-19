import React from 'react';
import './Home.css';

function home() {
  return (
    <div className='home'>
      <div className='about'>
        <h1> Hi, I'm Farya Bakhsh</h1>
        <div className='prompt'>
          <p>A passionate web developer with a keen interest in front-end technologies.<br />
           I love to bring ideas to life through coding, design, and accessibility</p>
        </div>
      </div>

      <div className='aboutme'>
        <h1>More about me</h1>
        <p className='p'> Hello there! I am Farya Bakhsh, a front-end developer currently living in Pakistan. As a career changer, I am looking to establish myself as a professional developer.<br /><br/>
        As an active member of #Udemy and #FrontendMaster community, I completed frontend development path. Moreover, to hone my skills further, I am taking Minor Courses of Computer Science from the university I am currently studying. <br /><br/>
        I am a passionate front-end developer that focuses on writing idiomatic, scalable and
         accessible code while prioritizing teamwork and collaboration with others as a part of
           my workflow. <br /> <br />
           When I am not coding, I'm spending time with my family. I am a huge fan of John Green's writings, so there is a good chance either I am reading one of his pieces or chatting about his work with my friends.
         </p>
      </div>
      <button>Lets connect</button>
      
      <br/><br/><br/><br/>

      <div className='skills'>
        <h1>Skills</h1>
        <li className='languages'>
          <span>HTML, CSS, Bootstrap, JavaScript, JQuery, React.js, Git, Node</span>
        </li>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  )
}

export default home
