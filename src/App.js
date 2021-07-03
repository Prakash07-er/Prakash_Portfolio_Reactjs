import './App.css';
import Navbar from "./components/navbar"
import Header from "./components/header"
import Particles from "react-particles-js"
import About from './components/about';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
    
    <div className="App">
      <Particles 
      className="Particle_class"
          params= { {
            particles: {
              number: {
                value:26,
                density:{
                  enable:true,
                  value_area:500
                }
              },
              shape:{
                type: "circle",
                stroke: {
                  width: 5,
                  color: "#f9ab00"
                }
              }
            }
          }}
      />
      <Navbar />
      <Header />
      <div className="content">
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
    <Footer />
  </Router>
  );
}

export default App;
