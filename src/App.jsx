
import NavBar from './components/NavBar';
import Project from './components/Project';
import profileImage from './assets/img.JPEG';
import posImg from './assets/POS.PNG';
import rBuilder from './assets/rBuilder.PNG';
import flightPlanImg from './assets/flightPlan.PNG'
import arcadiaImg from './assets/arcadia.jpg';
import mineImg from './assets/minecode.PNG';
import { SiLinkedin } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import resume from './assets/resume.pdf';
function App() {

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <section id='about'>
        <h2>printf("Hello World, I'm Israel!");</h2>
        <div className='profile'>
          <picture>
            <img src={profileImage} alt='Profile'></img>
          </picture>
        </div>
        <div className='aboutP'>
          <p>I'm Israel Reveles, a recent graduate from Oklahoma Christian University with a degree in Computer Science with Gaming and Animation.
            I'm passionate about software development and always eager to learn new things.
          </p>
          <br />
          <p>I'm looking forward to starting my career in software development and continuing to grow both personally and professionally.</p>
          <br />
          <p>Outside of tech, I enjoy talking and playing sports and video games, listening to music, and watching films.</p>
        </div>
        <div className='socials'>
          <a href={resume} target="_blank" rel="noopener noreferrer">
          <IoDocumentText size={42}/>
          </a>
          <a href="https://www.linkedin.com/in/israelreveles" target="_blank" rel="noopener noreferrer">
          <SiLinkedin size={40}/>
          </a>
          <a href="https://github.com/IReveles" target='_blank' rel='noopener noreferrer'>
            <SiGithub size={40}/>
          </a>
        </div>
        
      </section>    
      <section id='project'>
        <h2 className='header'>Projects</h2>
        <div className='container'>
        <div className='projects'>
          <div className='pCard'>
          <Project
            projectImg={flightPlanImg}
            title="Career Services Website"
            description="A website that encourages students to engage with career services by earning points for completing tasks, which they can exchange for rewards."
            techStack={['JavaScript', 'Vue.js', 'Vuetify', 'HTML', 'CSS','Node.js', 'Sequelize', 'MySQL']}
            frontend="https://github.com/danielndayegamiye/SEV-Frontend"
            backend="https://github.com/ExequielRodriguezBarri/SEV-Backend"
          />
          </div>
          <div className='pCard'>
          <Project
            projectImg={rBuilder}
            title="Resume Builder Website"
            description="A resume builder that lets students create and manage resumes with editable, dynamic data."
            techStack={['JavaScript', 'Vue.js', 'Vuetify', 'HTML', 'CSS','Node.js', 'Sequelize', 'MySQL']}
            frontend="https://github.com/danielndayegamiye/PROJECT3-SE4-frontend"
            backend="https://github.com/ExequielRodriguezBarri/PROJECT3-SE4-backend"
          />
          </div>
          <div className='pCard'>
          <Project
            projectImg={arcadiaImg}
            title="Arcadia"
            description="Developed core gameplay features (movement, combat, health) in a 3D arcade game using OOP; contributed to UI design and team-based collaboraton via GitHub."
            techStack={['C#', 'Unity']}
            repo="https://github.com/JennaStilling/arcadia"
          />
          </div>
          <div className='pCard'>
          <Project
            projectImg={posImg}
            title="Point of Sale System"
            description="A desktop-based POS system that simulates a retail checkout process with product management, worker login, inventory tracking, sales operations, and session summaries."
            techStack={['Java', 'Eclipse IDE', 'Java Swing']}
            repo="https://github.com/IReveles/POS-System-Java"
          />
          </div>
          <div className='pCard'>
          <Project
            projectImg={mineImg}
            title="MineCode"
            description='A simple "programming language" that uses a set of minecraft keywords as basic syntax.'
            techStack={['Java']}
            repo="https://github.com/IReveles/MineCode"
          />
          </div>
        </div>
        </div>
      </section>

      <section id='skills'>

    <h2>Skills</h2>



      </section>
    </>
  )
}

export default App
