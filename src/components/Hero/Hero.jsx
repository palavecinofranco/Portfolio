
import "./hero.css"
import Illustration from "../../assets/illustration.svg"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export function Hero(){
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])

  return(
    <div id="home">
      <div className="hero-text">
        <div data-aos="fade-up">
          <p>Hola 👋, soy</p>
        </div>
        <div data-aos="fade-up">
          <h1>Franco Palavecino</h1>
        </div>
        <div data-aos="fade-up">
          <h3>Desarrollador Full Stack</h3>
        </div>
        <div data-aos="fade-up">
          <p className="small-resume">Desarrollador web con enfoque en Java (Spring Boot) & React</p>
        </div>
          <div data-aos="fade-up">
              <a href="#contact" className="button">Contacto</a>
          </div>
      </div>
      <div className="hero-image">
        <div data-aos="fade-left">
          <img src={Illustration} alt="Ilustracino"/>
        </div>
      </div>
    </div>
  )
}