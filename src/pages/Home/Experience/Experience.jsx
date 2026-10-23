import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faSchool,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

const Experience = () => {
  const timeline = [
    {
      icon: workIcon,
      date: 'Sep,2024 - present',
      title: 'Lecturer(ICT)',
      subtitle: 'Professor Shahjahan Ali School & College',
      desc: 'Mouchak, Gazipur',
    },
    {
      icon: schoolIcon,
      date: '2019 - 2022',
      title: 'Bachelor of Science in Computer Science and Engineering',
      subtitle: 'Sheikh Fazilatunnesa Mujib University',
      desc: 'Jamalpur',
    },
    {
      icon: schoolIcon,
      date: '2014 - 2016',
      title: 'Higher Secondary School Certificate (HSC)',
      subtitle: 'Royal Media College',
      desc: 'Mymensingh',
    },
    {
      icon: schoolIcon,
      date: '2012-2014',
      title: 'Secondary School Certificate(SSC)',
      subtitle: 'Jamalpur Zilla School',
      desc: 'Jamalpur',
    },
    {
      icon: schoolIcon,
      date: '2003-2012',
      title: 'Junior School Certificate(JSC)',
      subtitle: 'Zeal Bangla Sugar Mills High School',
      desc: 'Dewanganj',
    },
    { icon: starIcon },
  ];


    return (
      <div className="App">
      
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const contentStyle =
            i === 0
              ? { background: 'rgb(33, 150, 243)', color: '#fff' }
              : undefined;
          const arrowStyle =
            i === 0
              ? { borderRight: '10px solid  rgb(33, 150, 243)' }
              : undefined;

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {t.title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <br />
      <br />
    </div>
    );
  }



export default Experience;
