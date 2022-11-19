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
            enrolled myself into a minor course of web engineering at
            university, at the same time teaching myself the fundamentals of
            front-end technologies through online courses of udemy
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
          <h3 className="vertical-timeline-element-title">REACT.js</h3>
          <p>
            {" "}
            Took a professional course from udemy of React - The Complete Guide
            (incl Hooks, React Router, Redux) - 48 hours long. Made many smaller
            project along the course and at the end programmed my own personal
            project in React.{" "}
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
          <p> landed my first part time tech job at Alfabolt. </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;
