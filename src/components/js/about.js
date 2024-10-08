import React from 'react';
import '../css/about.css'; // Import the specific stylesheet for the About page

// Import all skill icons
import jsIcon from '../images/js.svg';
import pyIcon from '../images/python.svg';
import javaIcon from '../images/java.svg';
import sqlIcon from '../images/sql.svg';
import htmlIcon from '../images/html.svg';
import dockerIcon from '../images/docker.svg';
import jenkinsIcon from '../images/jenkins.svg';
import gitIcon from '../images/git.svg';
import reactIcon from '../images/react.svg';
import awsIcon from '../images/aws.svg';
import kubIcon from '../images/kubernetes.svg';
import redisIcon from '../images/redis.svg';
import djangoIcon from '../images/django.svg';
import springIcon from '../images/springboot.svg';
import ngnixIcon from '../images/ngnix.svg';
import kafkaIcon from '../images/kafka.svg';

// Create a mapping of skills to icons
const skillIcons = {
  JavaScript: jsIcon,
  Python: pyIcon,
  Java: javaIcon,
  HTML: htmlIcon,
  SQL: sqlIcon,
  React: reactIcon,
  AWS: awsIcon,
  Docker: dockerIcon,
  Jenkins: jenkinsIcon,
  Git: gitIcon,
  Kubernetes: kubIcon,
  Redis: redisIcon,
  Kafka: kafkaIcon,
  NGINX: ngnixIcon,
  Django: djangoIcon,
  SpringBoot: springIcon
};

function About() {
  const timelineItems = [
    {
      title: "Stony Brook University",
      period: "Aug. 2023 – May 2025",
      details: [
        "Masters in Computer Science",
        "Coursework: Distributed Systems, Database Systems, Advanced Algorithms, Visualization",
      ],
    },
    {
      title: "Software Engineer 1 - Loconav",
      period: "June 2022 – July 2023",
      details: [
        "Developed an autonomous command management system for dashcams using Celery-beat, WebSockets, Redis, and Kafka.",
        "Developed an Over-the-Air (OTA) update system with a UI for managing package versions.",
        "Contributed to a live streaming system with React and backend integration with Nginx and HLS.",
        "Developed a version-based configuration management system using React, Celery, and Kafka.",
      ],
    },
    {
      title: "Backend Software Intern - Loconav",
      period: "Dec 2021 – June 2022",
      details: [
        "Built APIs and web applications for real-time vehicle data tracking.",
        "Developed a Traffic Sign Detector using MobileNetV2 and Python.",
        "Integrated applications with monitoring tools such as Elastic APM, Bugsnag, and SonarQube.",
      ],
    },
    {
      title: "Vellore Institute of Technology",
      period: "July 2018 – May 2022",
      details: [
        "Bachelor’s in Computer Science",
        "Coursework: Operating Systems, Data Structures, Object-Oriented Programming, Java, Computer Networks, AI",
      ],
    },
  ];

  return (
    <section id="about">
      <div className="timeline-container">
        <div className="timeline-heading-container">
          <h2 className="about-heading">Education and Experience Timeline</h2>
        </div>
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.period}</p>
              </div>
              <div className="timeline-details">
                <ul>
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="content-container">
        <h2 className="about-heading">Ambitions & Abilities</h2>
        <p className="about-text">
        During my time as a software engineer at LocoNav, I worked on developing and maintaining web applications and microservices using Ruby on Rails, Django, and gRPC. I joined LocoNav as a trainee in January 2022, after completing my bachelor's degree in computer science from Vellore Institute of Technology, and became a full-time engineer in June 2022. I have over two years of work experience in the software industry, and I am passionate about creating innovative and scalable solutions. I am currently pursuing my master's degree in computer science from Stony Brook University, where I am learning Systems, data science, and cloud computing. My goal is to enhance my skills and knowledge in these fields. I am a team player, a problem solver, and a lifelong learner, and I value quality, efficiency, and customer satisfaction in my work.
        </p>
        <div className="skill-icons">
          {Object.entries(skillIcons).map(([skill, icon], index) => (
            <div className="skill-icon" key={index}>
              <img src={icon} alt={skill} />
              <div className="skill-tooltip">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
