import "./about.css"
import reactIcon from "../../assets/react-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.png";
import javaIcon from "../../assets/java-icon.svg";
import springIcon from "../../assets/spring-icon.svg";
import springBootIcon from "../../assets/springboot.png";
import gitIcon from "../../assets/git-icon.svg";
import firebaseIcon from "../../assets/firebase-icon.svg";
import Illustration from "../../assets/hero-ilustration.svg"

export function About(){

  return(
    <div id="sobre">
      <div className="about-text">
        <div data-aos="fade-left">
          <h2>Sobre Mi</h2>
        </div>
        <div data-aos="fade-left" data-aos-delay="400">
          <p>Con mi experiencia en grandes empresas, busco ayudarte a hacer crecer tu negocio a través de soluciones móviles eficientes, intuitivas y adaptadas a tus necesidades.</p>
          <p className="text-2">Me especializo en crear aplicaciones que no solo funcionan bien, sino que también aportan valor real a tus procesos y mejoran la experiencia de tus clientes. Ya sea que estés lanzando un nuevo producto o digitalizando tu empresa, puedo ayudarte a llevar tu idea al siguiente nivel.</p>
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
