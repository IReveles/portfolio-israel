
import NavBar from './components/NavBar';
import profileImage from './assets/img.JPEG';
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
        <h2>Projects</h2>

      </section>
    </>
  )
}

export default App
