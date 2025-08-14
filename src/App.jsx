import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Message from "./components/Message";
import profileImage from "./assets/img.JPEG";
import posImg from "./assets/POS.PNG";
import rBuilder from "./assets/rBuilder.PNG";
import flightPlanImg from "./assets/flightPlan.PNG";
import arcadiaImg from "./assets/arcadia.jpg";
import mineImg from "./assets/minecode.PNG";
import { SiLinkedin } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { SiVuetify } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPostman } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import resume from "./assets/Israel.pdf";
function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section id="about">
        <h2>printf("Hello World, I'm Israel!");</h2>
        <div className="profile">
          <picture>
            <img src={profileImage} alt="Profile"></img>
          </picture>
        </div>
        <div className="aboutP">
          <p>
            I'm Israel Reveles, a recent graduate from Oklahoma Christian
            University with a degree in Computer Science with Gaming and
            Animation. I'm passionate about software development and always
            eager to learn new things.
          </p>
          <br />
          <p>
            I'm looking forward to starting my career in software development
            and continuing to grow both personally and professionally.
          </p>
          <br />
          <p>
            Outside of tech, I enjoy talking and playing sports and video games,
            listening to music, and watching films.
          </p>
        </div>
        <div className="socials">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <IoDocumentText size={42} />
          </a>
          <a
            href="https://www.linkedin.com/in/israelreveles"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin size={40} />
          </a>
          <a
            href="https://github.com/IReveles"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub size={40} />
          </a>
        </div>
      </section>
      <section id="project">
        <h2 className="header">Projects</h2>
        <div className="container">
          <div className="projects">
            <div className="pCard">
              <Project
                projectImg={flightPlanImg}
                title="Career Services Website"
                description="A website that encourages students to engage with career services by earning points for completing tasks, which they can exchange for rewards."
                techStack={[
                  "JavaScript",
                  "Vue.js",
                  "Vuetify",
                  "HTML",
                  "CSS",
                  "Node.js",
                  "Sequelize",
                  "MySQL",
                ]}
                frontend="https://github.com/danielndayegamiye/SEV-Frontend"
                backend="https://github.com/ExequielRodriguezBarri/SEV-Backend"
              />
            </div>
            <div className="pCard">
              <Project
                projectImg={rBuilder}
                title="Resume Builder Website"
                description="A resume builder that lets students create and manage resumes with editable, dynamic data."
                techStack={[
                  "JavaScript",
                  "Vue.js",
                  "Vuetify",
                  "HTML",
                  "CSS",
                  "Node.js",
                  "Sequelize",
                  "MySQL",
                ]}
                frontend="https://github.com/danielndayegamiye/PROJECT3-SE4-frontend"
                backend="https://github.com/ExequielRodriguezBarri/PROJECT3-SE4-backend"
              />
            </div>
            <div className="pCard">
              <Project
                projectImg={arcadiaImg}
                title="Arcadia"
                description="Developed core gameplay features (movement, combat, health) in a 3D arcade game using OOP; contributed to UI design and team-based collaboraton via GitHub."
                techStack={["C#", "Unity"]}
                repo="https://github.com/JennaStilling/arcadia"
              />
            </div>
            <div className="pCard">
              <Project
                projectImg={posImg}
                title="Point of Sale System"
                description="A desktop-based POS system that simulates a retail checkout process with product management, worker login, inventory tracking, sales operations, and session summaries."
                techStack={["Java", "Eclipse IDE", "Java Swing"]}
                repo="https://github.com/IReveles/POS-System-Java"
              />
            </div>
            <div className="pCard">
              <Project
                projectImg={mineImg}
                title="MineCode"
                description='A simple "programming language" that uses a set of minecraft keywords as basic syntax.'
                techStack={["Java"]}
                repo="https://github.com/IReveles/MineCode"
              />
            </div>
          </div>
          
        </div>
        <p className="swipe">&lt;~ Swipe ~&gt;</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>

        <h3>Programming</h3>
        <div className="skills-container">
          <span className="tooltip">
            <SiJavascript className="skill" />
            <span className="tooltiptext">JavaScript</span>
          </span>

          <span className="tooltip">
            <FaJava className="skill" size={60} />
            <span className="tooltiptext">Java</span>
          </span>

          <span className="tooltip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="skill-img"
            >
              <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
            </svg>
            <span className="tooltiptext">C++</span>
          </span>
          <span className="tooltip">
            <svg viewBox="0 0 128 128" className="skill-img">
              <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zM115 62h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6H94v-5h3.5l.9-4H94v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zm-12.7 4h3.8l.9-4h-3.8z"></path>
            </svg>
            <span className="tooltiptext">C#</span>
          </span>
          <span className="tooltip">
            <SiHtml5 className="skill" />
            <span className="tooltiptext">HTML</span>
          </span>
          <span className="tooltip">
            <SiCss3 className="skill" />
            <span className="tooltiptext">CSS</span>
          </span>
        </div>
        <h3 className="skill-section">Frameworks & Libraries</h3>
        <div className="skills-container">
          <span className="tooltip">
            <SiVuedotjs className="skill" />
            <span className="tooltiptext">Vue</span>
          </span>
          <span className="tooltip">
            <SiVuetify className="skill" />
            <span className="tooltiptext">Vuetify</span>
          </span>
          <span className="tooltip">
            <svg
              className="skill-img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
            </svg>
            <span className="tooltiptext">Node.js</span>
          </span>
          <span className="tooltip">
            <SiExpress className="skill" />
            <span className="tooltiptext">Express</span>
          </span>
          <span className="tooltip">
            <SiSequelize className="skill" />
            <span className="tooltiptext">Sequelize</span>
          </span>
        </div>
        <h3>Tools & Technologies</h3>
        <div className="skills-container">
          <span className="tooltip">
            <FaGitAlt className="skill" />
            <span className="tooltiptext">Git</span>
          </span>
          <span className="tooltip">
            <GrMysql className="skill" />
            <span className="tooltiptext">MySQL</span>
          </span>
          <span className="tooltip">
            <SiPostman className="skill" />
            <span className="tooltiptext">Postman</span>
          </span>
          <span className="tooltip">
            <SiFigma className="skill" />
            <span className="tooltiptext">Figma</span>
          </span>
        </div>
      </section>

      <section id="message">
        <h2>Leave a Message</h2>

        <Message />
      </section>
    </>
  );
}

export default App;
