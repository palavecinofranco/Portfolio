import githubIcon from "../../assets/github-icon.svg"
import app from "../../assets/app1.png"
import app2 from "../../assets/app2.png"
import app3 from "../../assets/app3.png"
import app4 from "../../assets/app4.png"
import app5 from "../../assets/app5.png"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import "./portfolio.css";


export function Portfolio(){
  return(
    <div id="portfolio">
      <h2 className="h2Portfolio">Portafolio</h2>
      <div className="projects">

      <div data-aos="flip-up">
        <div className="project">
          <header className="proyect-header">
            <h3 className="proyecth3">Cinos Automotores</h3>
          </header>
          <div className="body">
            <img src={app} alt="app" width={220}></img>
            <img src={app2} alt="app" width={220}></img>
          </div>
        </div>
      </div>
      <div data-aos="flip-up">
        <div className="project">
          <header className="proyect-header">
            <h3 className="proyecth3">Menú Digital</h3>
          </header>
          <div className="body">
            <img src={app3} alt="app" width={220}></img>
            <img src={app4} alt="app" width={220}></img>
            <img src={app5} alt="app" width={220}></img>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}