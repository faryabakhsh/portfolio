import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import SchoolIcon from "@mui/icons-material/School";

function Education() {
  return (
    <div className="education">
      <h2>My Education/Work History</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="date"
          date="2019 - 2023"
          iconStyle={{
            backgroundImage:
              "linear-gradient(to right, #56317a 0%, #3d99be 31%, #56317a 100%)",
            color: "#fff",
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            National University of Science and Technology - NUST
          </h3>
          <p> BS in Governance and Public Policy</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="date"
          date="2020"
          iconStyle={{
            backgroundImage:
              "linear-gradient(to right, #56317a 0%, #3d99be 31%, #56317a 100%)",
            color: "#fff",
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Exploration Begins
          </h3>
          <p>
            {" "}
            I was introduced to tech for the first time, started exploring HTML,
            CSS and basic Javascript.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="date"
          date="2020-2021"
          iconStyle={{
            backgroundImage:
              "linear-gradient(to right, #56317a 0%, #3d99be 31%, #56317a 100%)",
            color: "#fff",
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Wild - Career Changing Decision
          </h3>
          <p>
            {" "}
            Enrolled myself into a minor course in web engineering at
            university, at the same time teaching myself the fundamentals of
            front-end technologies through online courses from udemy.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="date"
          date="JAN 2022"
          iconStyle={{
            backgroundImage:
              "linear-gradient(to right, #56317a 0%, #3d99be 31%, #56317a 100%)",
            color: "#fff",
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Built Personal Projects
          </h3>
          <p>
            {" "}
            Statrted buliding inspired projects in React.js. This made my dive
            deep into web development as I was exposed to many new libraries and
            their implementation.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="date"
          date="AUG 2022"
          iconStyle={{
            backgroundImage:
              "linear-gradient(to right, #56317a 0%, #3d99be 31%, #56317a 100%)",
            color: "#fff",
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Employment at AlfaBolt
          </h3>
          <p> Landed my first part-time tech job at Alfabolt. </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;
