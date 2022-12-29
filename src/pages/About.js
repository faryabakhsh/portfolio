import React from "react";
import imgfarya from "../images/farya.jpeg";
import "./Home.css";

function about() {
  return (
    <div>
      <div className="section-black">
        <section className="projects">
          <h2>About Farya</h2>
          <article>
            <div className="text">
              <h3>Just the highlights</h3>
              <p className="blackbox">
                Hello there! I am Farya Bakhsh, a front-end developer currently
                living in Pakistan. As a career changer, I am looking to
                establish myself as a professional developer.
                <br />
                <br />
                As an active member of Udemy community, I completed frontend
                development path. Moreover, to hone my skills further, I am
                taking Minor Courses of Computer Science at the university I am
                currently studying. <br />
                <br />I am a passionate front-end developer that focuses on
                writing idiomatic, scalable and accessible code while
                prioritizing teamwork and collaboration with others as a part of
                my workflow. <br /> <br />
                When I am not coding, I'm spending time with my family. I am a
                huge fan of John Green's writings, so there is a good chance
                either I am reading one of his pieces or chatting about his work
                with my friends.
              </p>
              <h4>My favorite technologies include:</h4>
              <ul>
                <li>Typescript</li>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Storybook</li>

                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </div>
            <img src={imgfarya} alt="farya bakhsh at Pexels." />
          </article>
        </section>
      </div>
    </div>
  );
}

export default about;
