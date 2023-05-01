import "./about.css"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import javaIcon from "../../assets/java-icon.svg";
import springIcon from "../../assets/spring-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import firebaseIcon from "../../assets/firebase-icon.svg";

export function About(){

  return(
    <div id="sobre">
      <div className="about-text">
        <div data-aos="fade-left">
          <h2>Sobre mi</h2>
        </div>
        <div data-aos="fade-left" data-aos-delay="400">
          <p>Mi nombre es Franco Palavecino, soy estudiante universitario en Desarrollo Web y ademas Full Stack Developer. Me apasiona la programación y solucionar día a día los problemas a los que me enfrento en este lindo rubro.</p>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <p>Desarrollo sitios y aplicaciones web utilizando React en el Front-end y Java con Spring Boot en la parte del Back-End. Trato de aprender algo nuevo con cada proyecto en el que me desafío.</p>
        </div>
        <div data-aos="fade-left" data-aos-delay="600">
          <p>Soy una persona dedicada y autosuficiente, bastante resiliente, que busca profesionalizarse cada día más. Para lograr esto, estoy en constante busqueda de nuevos conocimientos, por lo cual realizo proyectos por cuenta propia y a su vez leo documentación.</p>
        </div>

        <div data-aos="fade-left" data-aos-delay="800">
          <h3>Estas son mis principales habilidades:</h3>
        </div>
        <div className="hard-skills">

          <div className="hability">
          <div data-aos="fade-up" data-aos-delay="900"> 
            <img src={jsIcon} alt="JavaScript" />
          </div>
          </div>

          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="1000">
              <img src={reactIcon} alt="React" />
            </div>
          </div>
          

          <div className="hability">
          <div data-aos="fade-up" data-aos-delay="1100"> 
            <img src={htmlIcon} alt="Html" />
          </div>
          </div>

          <div className="hability">
          <div data-aos="fade-up" data-aos-delay="1200"> 
            <img src={cssIcon} alt="Css" />
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
          <div data-aos="fade-up"data-aos-delay="1700">
            <img src={mysqlIcon} alt="MySQL" />
          </div>
          </div>
        </div>
      </div>
      <div className="about-image">
        <div data-aos="fade-left" data-aos-delay="600">
          <img src="https://files.fm/thumb_show.php?i=asphq3qt3" alt="Imagen de perfil" />
        </div>
      </div>
    </div>
  )
}
