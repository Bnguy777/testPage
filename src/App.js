import './App.css';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Extracirricular from './components/Extracirricular';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <header>
        <nav className='navbar'>
          <a href="#Hero" class="tab">Hero</a>
          <a href="#About" class="tab">About</a>
          <a href="#Education" class="tab">Education</a>
          <a href="#Experience" class="tab">Experience</a>
          <a href="#Extracirricular" class="tab">Extracirricular</a>
          <a href="#Footer" class="tab">Footer</a>
        </nav>
      </header>
      <div className="main">
        <div class="image-layer1"></div>  <div class="image-layer2"> <div class="image-layer3"></div></div>
        <section id="Hero">
          <Hero />
        </section>

        <section id="About">
          <About />
        </section>

        <section id="Education">
          <Education />
        </section>

        <section id="Experience">
          <Experience />
        </section>

        <section id="Extracirricular">
          <Extracirricular />
        </section>

        <section id="Footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}

const parallaxImage1 = document.querySelector('.image-layer1');
const parallaxImage2 = document.querySelector('.image-layer2');


window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  parallaxImage1.style.transform = `translateY(${scrollY / 5}px)`;  // Adjust division factor for slower movement
  parallaxImage2.style.transform = `translateY(${scrollY / 3}px)`;  // Adjust division factor for medium speed

});

export default App;
