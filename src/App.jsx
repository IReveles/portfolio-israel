
import NavBar from './components/NavBar';
import profileImage from './assets/img.JPEG';

function App() {

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <section>
        <h2>printf("Hello World, I'm Israel!");</h2>
        <div className='profile'>
          <picture>
            <img src={profileImage} alt='Profile'></img>
          </picture>
        </div>
        <p></p>
      </section>    
    </>
  )
}

export default App
