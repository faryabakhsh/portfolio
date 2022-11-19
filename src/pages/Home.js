import React from "react";
import "./Home.css";

function home() {
  return (
    <div>
      <div className="home">
        <div className="about">
          <h2>
            {" "}
            <span>Farya Bakhsh</span>
          </h2>
          <br />
          <div className="prompt">
            <p>
              A passionate web developer with a keen interest in front-end
              technologies
              <br />
              who loves bringing ideas to life through coding, design, and
              accessibility.
            </p>
            <div className="icons">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-html5"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                  <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                </svg>
              </p>

              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-css3"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                  <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-bootstrap"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" />
                  <path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" />
                  <path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-javascript"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                  <path d="M7.5 8h3v8l-2 -1" />
                  <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-react-native"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
                  <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
                  <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
                  <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
                  <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
                  <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
                  <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a0.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-storybook"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 4l.5 16.5l13.5 .5v-18z"></path>
                  <path d="M9 15c.6 1.5 1.639 2 3.283 2h-.283c1.8 0 3 -.974 3 -2.435c0 -1.194 -.831 -1.799 -2.147 -2.333l-1.975 -.802c-1.15 -.467 -1.878 -1.422 -1.878 -2.467c0 -.97 .899 -1.786 2.087 -1.893l.613 -.055c1.528 -.138 2.999 .762 3.3 1.985"></path>
                  <path d="M16 3.5v1"></path>
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-nextjs"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                  <path d="M15 12v-3"></path>
                </svg>
              </p>
            </div>
            {/* <div className="resume"><p>Download my <a href = "">resume</a></p></div> */}
          </div>
        </div>
      </div>

      <div className="section-black">
        <section className="projects">
          <h2>Projects I'm proud of :</h2>
          <article>
            <div className="text">
              {/* <h4>Latest Project</h4> */}
              <h3>Food Delivery App (ongoing)</h3>

              <p className="blackbox">
                Frontend made from react.js and redux in which customer can
                place an order to a registered restaurant, he can also track the
                rider. Restaurants can be registered, and riders can apply for
                the riders’ careers from the app. There is also a backend made
                from firebase. Working on different components to make a
                user-interactive interface. Added functionality using states,
                props, portal, and refs. See the project code
                <a
                  href="https://github.com/faryabakhsh/React_food-delivery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  here
                </a>
                {/* , and multiple links look <a href="#">like this</a> and
                <a href="#">like this</a>. */}
              </p>
              <h5>Technologies used include:</h5>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
                <li>Material UI</li>
                <li>React.js</li>
                <li>Redux</li>
                <li>Firebase</li>
              </ul>
            </div>
            <img
              src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
              alt="Screenshot of food delivery app ui."
            />
          </article>
          <article className="reverse">
            <div className="text">
              {/* <h4>Bootcamp Project</h4> */}
              <h3>Ecommerce Web App</h3>
              <p className="blackbox">
                An app designed in angular that retrieves data from the backend
                server – express through HTTP request that sends a JSON
                response. Routing was added that enables Single Page
                applications with multiple views. See the project code
                <a
                  href="https://github.com/faryabakhsh/angular_ecommerce_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  here
                </a>
              </p>
              <h5>Technologies used include:</h5>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>

                <li>Angular.js</li>
                <li>Express</li>
              </ul>
            </div>
            <img
              src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-5.png"
              alt="Screenshot of the ecommerce web app."
            />
          </article>
          <article>
            <div className="text">
              {/* <h4>Photography Project</h4> */}
              <h3>News Portal</h3>
              <p className="blackbox">
                Generated an React Service for the News API and used it
                dynamically to populate the different sections of the news
                portal. Data binding was used to dynamically bind article data
                received as a JSON object to the News Article component views.
                See the project code
                <a
                  href="https://github.com/faryabakhsh/angular_newsportal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  here
                </a>
              </p>
              <h5>Technologies used include:</h5>
              <ul>
                <li>HTML</li>
                <li>CSS Grid</li>
                <li>Bootstrap</li>
                <li>React.js</li>
                <li>API's</li>
              </ul>
            </div>
            <img
              src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-4.png"
              alt="Screenshot of the Wall of Wonder Collections."
            />
          </article>
        </section>
      </div>

      {/* <div className="projects">
        <h1>My Personal Projects</h1> */}

      {/* <div className="projectList">
          <ProjectItem
            name="Food Order App"
            image="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            skills="React.js, material Ui, redux, Html, Css"
          />
          <ProjectItem
            name="Ecommerce Web App"
            image="https://i.pinimg.com/736x/aa/a6/f0/aaa6f0ac5501503db355ca97c1e6780b.jpg"
            skills="Angular, Bootstrap, Html, Css"
          />
          <ProjectItem
            name="News Portal"
            image="https://www.dynamicpoint.com/wp-content/uploads/2019/06/PortalImage1.png"
            skills="Angular, Bootstrap, Html, Css, API's"
          />
          <br />
          <br />
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default home;
