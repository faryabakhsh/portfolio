import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Education.css";
import SchoolIcon from '@mui/icons-material/School';

function Education() {
  return (
    <div className='education'>
      <h2>My Education History</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2010 - 2014"
        iconStyle={{ backgroundImage: "linear-gradient(to right, #56317a 0%, #3d99be 31%, #56317a 100%)", color: "#fff" }}
        icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
            My Random High School, Random Place, Random State
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2010 - 2014"
        iconStyle={{ backgroundImage: "linear-gradient(to right, #56317a 0%, #3d99be 31%, #56317a 100%)", color: "#fff" }}
        icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
            My Random High School, Random Place, Random State
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2010 - 2014"
        iconStyle={{ backgroundImage: "linear-gradient(to right, #56317a 0%, #3d99be 31%, #56317a 100%)", color: "#fff" }}
        icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
            My Random High School, Random Place, Random State
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2010 - 2014"
        iconStyle={{ backgroundImage: "linear-gradient(to right, #56317a 0%, #3d99be 31%, #56317a 100%)", color: "#fff" }}
        icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
            My Random High School, Random Place, Random State
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2010 - 2014"
        iconStyle={{ backgroundImage: "linear-gradient(to right, #56317a 0%, #3d99be 31%, #56317a 100%)", color: "#fff" }}
        icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
            My Random High School, Random Place, Random State
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Education
