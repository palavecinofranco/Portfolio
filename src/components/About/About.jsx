import "./about.css"
import reactIcon from "../../assets/react-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.png";
import javaIcon from "../../assets/java-icon.svg";
import springIcon from "../../assets/spring-icon.svg";
import springBootIcon from "../../assets/springboot.png";
import gitIcon from "../../assets/git-icon.svg";
import firebaseIcon from "../../assets/firebase-icon.svg";
import hibernateIcon from "../../assets/hibernate_icon.png"
import Illustration from "../../assets/hero-ilustration.svg"

export function About(){

  return(
    <div id="sobre">
      <div className="about-text">
        <div data-aos="fade-left">
          <h2>Sobre mi</h2>
        </div>
        <div data-aos="fade-left" data-aos-delay="400">
          <p>Soy Desarrollador Full Stack con orientación al Backend con Java & Spring Framework. Además asisto a la universidad en la carrera de Técnicatura en Desarrollo Web</p>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <p>Desarrollo sitios y aplicaciones web full stack utilizando Java con Spring Boot en la parte del Back-End y React en el Front-end.</p>
        </div>
        <div data-aos="fade-left" data-aos-delay="600">
          <p>Me apasiona la programación y solucionar día a día los problemas a los que me enfrento en este rubro. Soy una persona dedicada, resiliente, que busca profesionalizarse cada día más a través de proyectos desafiantes.</p>
        </div>

        <div data-aos="fade-left" data-aos-delay="800">
          <h3>Estas son mis principales habilidades:</h3>
        </div>
        <div className="hard-skills">
          
        <div className="hability">
          <div data-aos="fade-up" data-aos-delay="1500"> 
            <img src={javaIcon} alt="Java" />
          </div>
          </div>

          <div className="hability">
          <div data-aos="fade-up" data-aos-delay="1600"> 
            <img src={springIcon} alt="Spring" />
          </div>
          </div>

          <div className="hability">
          <div data-aos="fade-up" data-aos-delay="1600"> 
            <img src={springBootIcon} alt="SpringBoot" />
          </div>
          </div>

          <div className="hability icon-small">
          <div data-aos="fade-up"data-aos-delay="1700">
            <img src={mysqlIcon} alt="MySQL" />
          </div>
          </div>

          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="1000">
              <img src={reactIcon} alt="React" />
            </div>
          </div>

          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="1300">
              <img src={firebaseIcon} alt="Firebase" />
            </div>
          </div>

          <div className="hability">
          <div data-aos="fade-up" data-aos-delay="1400">
            <img src={gitIcon} alt="Git" />
          </div>
          </div>
        </div>
      </div>
      <div className="about-image">
        <div data-aos="fade-left" data-aos-delay="600">
          <img src={Illustration} alt="Imagen de perfil" />
        </div>
      </div>
    </div>
  )
}
