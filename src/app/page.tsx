"use client";
import Terminal from "@/components/Terminal";
import Sidebar from "@/components/Sidebar";
import { FaBars } from "react-icons/fa";
import * as winbox from "winbox";
import { useState } from "react";
import styles from "./terminal/terminal.module.css";

const WinBox = winbox.WinBox || window.WinBox;

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const projects = [
    {
      title: "August Robotics",
      skills:
        "TypeScript | Vue.js | Veutify | Python | Django | Docker | CI/CD | PostgreSQL | Redux",
      shortDescription:
        "As a Full-Stack developer, I drove the development of a comprehensive software system for managing and preserving critical operational data generated by the floor-marking robots of August Robotics.",
      fullDescription: `
        <p>‣ As a Full-Stack developer, I drove the development of a comprehensive software system for managing and preserving critical operational data generated by the floor-marking robots of August Robotics.</p>
        <p>‣ I used TypeScript, Vue.js and Redux to develop the Front-end and I used Python for the back end, and Django to develop REST APIs to facilitate seamless communication between the front-end user interface and the back-end data repository, enabling efficient data exchange.</p>
        <p>‣ Additionally, I was responsible for creating an interactive dashboard. This dashboard contained dynamic and interactive charts (developed using the vue-chart.js library) along with other required features, which served as a visual representation of the robot's performance and operational data.</p>
        <p>‣ In parallel, I assumed responsibility for establishing a robust CI/CD pipeline, utilizing Docker for seamless production-level deployment.</p>
        <p>‣ Furthermore, I harnessed PostgreSQL for efficient data storage, ensuring the system's stability and reliability, aligning with August Robotics' mission to deliver cutting-edge solutions to their clients.</p>
      `,
      imageUrl: "/augustrobotics.png",
      viewLink:"https://github.com/pgd1998/August-Robotics-UNIMELB"
    },
    {
      title: "Music Events System Project",
      skills:
        "Java | JavaServer Pages (JSP)| Servlet | Json Web-Token (JWT) | Render | CI/CD | REST API",
      shortDescription:
        "Developed a comprehensive online platform for managing and promoting live music events across Australia, encompassing robust data management, secure user authentication, and a user-friendly interface.",
      fullDescription: `
        <p>‣ Developed a comprehensive online platform for managing and promoting live music events across Australia, encompassing robust data management, secure user authentication, and a user-friendly interface.</p>
        <p>‣ Designed the user interface using Java Server Pages (JSP) for rendering web pages. Servlets are being used to handle user requests, form submissions, and communicate with the backend through RESTful API calls.</p>
        <p>‣ Designed the database (PostgreSQL) schema to store user data, event details, venues, sections, bookings, and pricing information.</p>
        <p>‣ Developed a set of RESTful APIs to handle user registration, login, event creation, ticket booking, and event modification. Implemented JWT-based authentication for securing the API endpoints.</p>
        <p>‣ The application was hosted on the cloud platform Render for scalability and reliability. I was also involved in setting up Continuous Integration and deployment (CI/CD) pipelines for automatic updates.</p>
      `,
      imageUrl: "/musicevents.png",
      viewLink:""
    },
    {
      title: "Resource Monitoring and Alerting System",
      skills:
        "Bash Scripting | Linux Server Administration | Resource Monitoring | Alerting Mechanisms | Automation | Customization | Logging and Debugging",
      shortDescription:
        "Developed and implemented a comprehensive server resource monitoring and alerting system for a medium-sized e-commerce website hosted on Linux servers.",
      fullDescription: `
        <p>‣ Developed and implemented a comprehensive server resource monitoring and alerting system for a medium-sized e-commerce website hosted on Linux servers.</p>
        <p>‣ Implemented an alerting mechanism within the Bash scripts. When resource usage exceeded predefined thresholds, the scripts would trigger email notifications to the system administrators, providing them with detailed information about the issue.</p>
        <p>‣ Developed a suite of Bash scripts to monitor server resources, including CPU usage, memory consumption, disk space, and network activity. These scripts utilized Linux commands such as top, df, and netstat to gather real-time data.</p>
        <p>‣ The system's focus on proactive monitoring, automation, and detailed logging significantly enhanced the e-commerce platform's reliability, uptime, and performance by at least 35%.</p>
      `,
      imageUrl: "/resourcemanagement.png",
      viewLink:"https://github.com/pgd1998/Resource-Management"
    },
  ];
  const skillsData = {
    programming: [
      { name: "TypeScript"},
      { name: "JavaScript"},
      { name: "Python"},
      { name: "Java"},
      { name: "C"},
    ],
    webDev: [
      { name: "React"},
      { name: "Node.js"},
      { name: "Tailwind"},
      { name: "Vue.js"},
      { name: "Next.js"},
      { name: "HTML"},
      { name: "CSS"},
      { name: "jQuery"},
      { name: "Vuetify"},
    ],
    frameworks: [
      { name: "Flask"},
      { name: "Django"},
      { name: "Maven"},
      { name: "Heroku"},
      { name: "Plotly Dash"},
    ],
    tools: [
      { name: "Confluence/Jira"},
      { name: "Git"},
      { name: "Jenkins"},
    ],
    cloud: [
      { name: "AWS"},
      { name: "Azure"},
      { name: "GCP"},
      { name: "Heroku"},
    ],
  };

  const contactInfo = [
    
    {
      type: "Phone",
      value: "04108760",
      icon: "📱",
      action: "tel:04108760",
    },
    {
      type: "LinkedIn",
      value: "poorvith-gowda",
      icon: "🔗",
      action: "https://www.linkedin.com/in/poorvith-gowda/",
    },
    {
      type: "GitHub",
      value: "pgd1998",
      icon: "💻",
      action: "https://github.com/pgd1998",
    },
    {
      type: "Email",
      value: "poorvithgowda10@gmail.com",
      icon: "✉️",
      action: "mailto:poorvithgowda10@gmail.com",
    },
  ];

  const educationData = [
    {
      degree: "Master of Software Engineering",
      university: "University of Melbourne",
      location: "Melbourne, VIC",
      period: "2022 - 2024",
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      university: "Malnad College of Engineering",
      location: "India",
      period: "2016 - 2020",
    },
  ];

  const experienceData = [
    {
      position: "Research Assistant (Software Developer)",
      company: "University of Melbourne",
      period: "2023 - Present",
      skills: "Python | Flask | JavaScript | Tailwind CSS | Plotly Dash | REST API | Firebase | Nodemailer",
      link:"Rephrame",
      description: [
        "Developed Rephrame, a software tool for building designers to assess embodied carbon, energy, and water, increasing assessment efficiency by 50%.",
        "Created an intuitive UI with JavaScript/Tailwind and implemented interactive data visualizations with Plotly Dash.",
        "Engineered a Python/Flask backend with optimized REST APIs and Firebase authentication."
      ]
    },
    {
      position: "Software Engineer",
      company: "Accenture Solutions",
      period: "2020 - 2022",
      skills: "JavaScript | React | Node | Express | AWS | Tailwind | MongoDB | Gulp | Polyfills",
      description: [
        "Developed a Restaurant Booking Service frontend and led full-stack development of a Customer Care Software System.",
        "Built complex UI features with React/Tailwind and implemented backend systems with Node.js/Express/MongoDB.",
        "Ensured 99% cross-browser compatibility and deployed applications on AWS with CI/CD pipelines."
      ]
    },
    {
      position: "Application Developer Intern",
      company: "InflaMed Pty Ltd",
      period: "2023 - 2024",
      skills: "TypeScript | React | Next.js | Firebase | Material UI | 100ms | Terraform",
      description: [
        "Designed a clinician-side web application with TypeScript/React/Next.js improving patient monitoring by 40%.",
        "Implemented secure data management with Firestore/Realtime Database and integrated real-time communication using 100ms SDK.",
        "Developed live transcription features for accurate capture of patient-clinician interactions."
      ]
    }
  ];

  const handleCommand = (cmd: string) => {
    let title = "";
    let description = "";

    switch (cmd) {
      case "about":
        title = "About Me";
        description = `
    <div class="about-container">
      <div class="about-header">
        <img src="/api/placeholder/150/150" alt="Poorvith Gowda" class="profile-image" />
        <div class="about-title">
          <h2>Poorvith Gowda</h2>
          <h3>Software Engineer</h3>
        </div>
      </div>
      
      <div class="about-content">
        <p>Accomplished Software Engineer with a Master of Software Engineering degree from the University of Melbourne, possessing 2+ years of full-time experience designing, developing, testing, and maintaining enterprise web applications and software solutions for a globally recognised professional services firm serving diverse industries.</p>
        
        <p>I specialize in full-stack development with expertise in TypeScript, React, Node.js, and cloud technologies. My passion lies in creating efficient, scalable, and user-friendly applications that solve real-world problems.</p>
        
        <p>When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously expanding my knowledge in the ever-evolving tech landscape.</p>
        
        <div class="about-cta">
          <button onclick="window.openCommand('contact')" class="cta-btn">Contact Me</button>
          <button onclick="window.openCommand('projects')" class="cta-btn secondary">View Projects</button>
        </div>
      </div>
    </div>
  `;
        break;

      case "projects":
        title = "Projects";
        description = `
    <div class="projects-container">
      ${projects
        .map(
          (project) => `
        <div class="project-card">
          <div class="project-preview">
            <img src="${project.imageUrl}" alt="${
            project.title
          }" class="project-image" />
          </div>
          <div class="project-info">
            <h3>${project.title}</h3>
            <div class="skills-tags">
              ${project.skills
                .split("|")
                .map(
                  (skill) => `<span class="skill-tag">${skill.trim()}</span>`
                )
                .join("")}
            </div>
            <p class="project-description">${project.shortDescription}</p>
            <div class="project-actions">
              <button onclick="window.viewFull('${project.title}')" class="view-full-btn">View Full</button>

<button onclick="window.open('${project.viewLink}', '_blank')" class="view-project-btn">View Project</button>            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
        break;

      // Add this structured skills data to your page.tsx file

      // Update the skills case in handleCommand
      case "skills":
        title = "Skills";
        description = `
    <div class="skills-container">
      <div class="skills-category">
        <h3 class="category-title">Programming Languages</h3>
        <div class="skills-grid">
          ${skillsData.programming
            .map(
              (skill) => `
            <div class="skill-widget">
              <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      
      <div class="skills-category">
        <h3 class="category-title">Web Development</h3>
        <div class="skills-grid">
          ${skillsData.webDev
            .map(
              (skill) => `
            <div class="skill-widget">
              <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                
              </div>
              
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      
      <div class="skills-category">
        <h3 class="category-title">Frameworks</h3>
        <div class="skills-grid">
          ${skillsData.frameworks
            .map(
              (skill) => `
            <div class="skill-widget">
              <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      
      <div class="skills-category">
        <h3 class="category-title">Tools</h3>
        <div class="skills-grid">
          ${skillsData.tools
            .map(
              (skill) => `
            <div class="skill-widget">
              <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      
      <div class="skills-category">
        <h3 class="category-title">Cloud Services</h3>
        <div class="skills-grid">
          ${skillsData.cloud
            .map(
              (skill) => `
            <div class="skill-widget">
              <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
        break;

      // Add this to your page.tsx file

      // Update the contact case in handleCommand
      case "contact":
        title = "Contact Me";
        description = `
    <div class="contact-container">
      <div class="contact-intro">
        <h3>Let's Connect!</h3>
        <p>Feel free to reach out through any of these channels:</p>
      </div>
      <div class="contact-widgets">
        ${contactInfo
          .map(
            (contact) => `
          <a href="${contact.action}" target="_blank" class="contact-widget">
            <div class="contact-icon">${contact.icon}</div>
            <div class="contact-details">
              <h4>${contact.type}</h4>
              <p>${contact.value}</p>
            </div>
          </a>
        `
          )
          .join("")}
      </div>
    </div>
  `;
        break;

      case "resume":
        title = "Resume";
        description = `
            <div class="resume-container">
              <div class="resume-actions">
                <a href="/resume.pdf" target="_blank" class="resume-btn view-btn">
                  <span class="icon">📄</span> View Resume
                </a>
                <a href="/resume.pdf" download="Poorvith_Gowda_Resume.pdf" class="resume-btn download-btn">
                  <span class="icon">⬇️</span> Download Resume
                </a>
              </div>
              <div class="resume-preview">
                <iframe src="/resume.pdf" width="100%" height="500px" style="border: none;"></iframe>
              </div>
            </div>
          `;
        break;

      // Add this to your page.tsx file

      // Update the education case in handleCommand
      case "education":
        title = "Education";
        description = `
        <div class="education-container">
          ${educationData
            .map(
              (edu) => `
            <div class="education-card">
              <h3>${edu.degree}</h3>
              <h4>${edu.university}</h4>
              <p>${edu.location}</p>
              <span class="education-period">${edu.period}</span>
            </div>
          `
            )
            .join("")}
        </div>`;
            break;

        // TODO: add work experience
        case 'experience':
      title = "Work Experience";
      description = `
        <div class="experience-container">
          ${experienceData.map(exp => `
            <div class="experience-card">
              <div class="experience-header">
                <div>
                  <h3>${exp.position}</h3>
                  <h4>${exp.company}</h4>
                  <span class="experience-period">${exp.period}</span>
                  ${ exp.link && `<h4><a style="text-decoration: underline; color:rgb(74, 221, 138)" href="https://www.rephrame.com/" target="_blank">${exp.link}</a></h4>`}
                </div>
              </div>
              
              <div class="skills-section">
                <h4>Skills:</h4>
                <div class="skills-tags">
                  ${exp.skills.split('|').map(skill => 
                    `<span class="skill-tag">${skill.trim()}</span>`
                  ).join('')}
                </div>
              </div>
              
              <div class="experience-description">
                <ul>
                  ${exp.description.map(item => 
                    `<li>‣ ${item}</li>`
                  ).join('')}
                </ul>
              </div>
              
            </div>
          `).join('')}
        </div>
      `;
      break;
      default:
        return "Unknown command";
    }
    
    // Attach viewFull and viewProject functions to the window object
window.openCommand = (cmd) => {
  handleCommand(cmd);
};
if (typeof window !== "undefined") {
  window.viewFull = (title) => {
    const project = projects.find((p) => p.title === title);
    if (project) {
      new WinBox({
        title: `${project.title} - Full Description`,
        html: `
          <div class="winbox-content project-detail">
            <div class="project-header">
              <img src="${project.imageUrl}" alt="${project.title}" class="project-detail-image" />
              <h2>${project.title}</h2>
            </div>
            <div class="skills-section">
              <h4>Technologies Used:</h4>
              <div class="skills-tags">
                ${project.skills
                  .split("|")
                  .map(
                    (skill) =>
                      `<span class="skill-tag">${skill.trim()}</span>`
                  )
                  .join("")}
              </div>
            </div>
            <div class="project-body">
              ${project.fullDescription}
            </div>
          </div>
        `,
        x: "center",
        y: "center",
        width: "60%",
        height: "60%",
        border: 2,
        class: ["modern"],
        onfocus: function () {
          this.setBackground("#2a2a2a");
        },
        onblur: function () {
          this.setBackground("#2a2a2a");
        },
      });
    }
  };

  window.viewProject = (title) => {
    const project = projects.find((p) => p.title === title);
    if (project){

    }
  };

      new WinBox({
        title,
        html: `<div class="winbox-content">${description}</div>`,
        x: "center",
        y: "center",
        width: "50%",
        height: "65%",
        border: 0,
        class: ["modern"],
        onfocus: function () {
          this.setBackground("#2a2a2a");
        },
        onblur: function () {
          this.setBackground("#2a2a2a");
        },
      });
    }
  };

  return (
    <div>
      <Terminal onCommand={handleCommand} />
      {/* <button className={styles.mobileToggle}
      onClick={()=>{setIsSidebarOpen(!isSidebarOpen); console.log('clicked')}}>
        <FaBars/>
      </button>
      <div className={`${styles.sidebarWrapper} ${isSidebarOpen ? styles.open : ''}`}>
      <Sidebar onCommand={handleCommand} />
      </div>*/}
    </div>
  );
}

