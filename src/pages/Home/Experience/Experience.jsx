import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faSchool,
  faStar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Experience.css";

const timelineItems = [
  {
    type: "work",
    date: "Sep 2024 – Present",
    title: "Lecturer (ICT)",
    subtitle: "Professor Shahjahan Ali School & College",
    location: "Mouchak, Gazipur",
    description:
      "Teaching ICT concepts and helping students build a strong foundation in computing and digital technologies.",
    tags: ["Teaching", "ICT", "Student Mentoring"],
  },
  {
    type: "education",
    date: "2019 – 2022",
    title: "Bachelor of Science in Computer Science and Engineering",
    subtitle: "Sheikh Fazilatunnesa Mujib University",
    location: "Jamalpur",
    description: "Undergraduate degree in Computer Science and Engineering.",
    tags: ["Computer Science", "Engineering"],
  },
  {
    type: "education",
    date: "2014 – 2016",
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "Royal Media College",
    location: "Mymensingh",
    tags: ["Higher Secondary"],
  },
  {
    type: "education",
    date: "2012 – 2014",
    title: "Secondary School Certificate (SSC)",
    subtitle: "Jamalpur Zilla School",
    location: "Jamalpur",
    tags: ["Secondary Education"],
  },
  {
    type: "education",
    date: "2003 – 2012",
    title: "Junior School Certificate (JSC)",
    subtitle: "Zeal Bangla Sugar Mills High School",
    location: "Dewanganj",
    tags: ["School Education"],
  },
];

const iconFor = (type) => {
  if (type === "work") return <FontAwesomeIcon icon={faBriefcase} />;
  return <FontAwesomeIcon icon={faSchool} />;
};

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-heading">
        <span className="experience-eyebrow">MY JOURNEY</span>
        <h2>
          Experience <span>&amp; Education</span>
        </h2>
        <p>
          A timeline of my professional experience and academic background.
        </p>
      </div>

      <VerticalTimeline className="experience-timeline">
        {timelineItems.map((item, index) => (
          <VerticalTimelineElement
            key={`${item.date}-${item.title}`}
            className="experience-timeline-element"
            date={item.date}
            dateClassName="experience-date"
            icon={iconFor(item.type)}
            iconClassName={`experience-icon experience-icon--${item.type}`}
            contentStyle={{}}
            contentArrowStyle={{}}
          >
            <article className="experience-card">
              <div className="experience-card-glow" aria-hidden="true" />
              <div className="experience-card-topline">
                <span className={`experience-type experience-type--${item.type}`}>
                  {item.type === "work" ? "PROFESSIONAL EXPERIENCE" : "EDUCATION"}
                </span>
                <span className="experience-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="vertical-timeline-element-title experience-card-title">
                {item.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle experience-card-subtitle">
                {item.subtitle}
              </h4>

              {item.location && (
                <p className="experience-location">
                  <FontAwesomeIcon icon={faLocationDot} /> {item.location}
                </p>
              )}
              {item.description && (
                <p className="experience-description">{item.description}</p>
              )}

              {item.tags?.length > 0 && (
                <div className="experience-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="experience-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          icon={<FontAwesomeIcon icon={faStar} />}
          iconClassName="experience-icon experience-icon--end"
          contentStyle={{ display: "none" }}
          contentArrowStyle={{ display: "none" }}
        />
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
