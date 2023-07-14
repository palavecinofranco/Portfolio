import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import "./portfolio.css";


export function Portfolio(){
  return(
    <div id="portfolio">
      <h2 className="h2Portfolio">Portafolio</h2>
      <h3 className="h3Portfolio">Estos son algunos de mis proyectos</h3>

      <div className="projects">

      <div data-aos="flip-up">
        <div className="project">
          <header className="proyect-header">
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a className="proyect-links-a" href="https://github.com/palavecinofranco/springboot-microservices" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3 className="proyecth3">Microservices Spring Boot - Ecommerce</h3>
            <p className="proyectp">Aplicación escalable con Arquitectura de Microservicios. Se utilizó Spring Boot, Spring Cloud, Spring Security, Spring Data JPA, Docker & Eureka Netflix</p>
          </div>
          <footer className="proyect-footer">
            <ul className="tech-list">
              <li>Java</li>
              <li>Spring</li>
              <li>Docker</li>
              <li>Eureka</li>
              <li>Keycloak</li>
              <li>Resilience4j</li>
            </ul>
          </footer>
        </div>
      </div>

      <div data-aos="flip-up">
        <div className="project">
          <header className="proyect-header">
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a className="proyect-links-a" href="https://github.com/palavecinofranco/market-api" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3 className="proyecth3">Market API REST</h3>
            <p className="proyectp">API REST donde se gestiona un supermercado. Creado con Spring Boot, Spring Data JPA y MYSQL. Proyecto documentado con Swagger y desplegado en Google Cloud GCP.</p>
          </div>
          <footer className="proyect-footer">
            <ul className="tech-list">
              <li>Java</li>
              <li>Spring</li>
              <li>Hibernate</li>
              <li>GCP</li>
              <li>MySql</li>
            </ul>
          </footer>
        </div>
      </div>

      <div data-aos="flip-up">
        <div className="project">
          <header className="proyect-header">
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a className="proyect-links-a" href="https://github.com/palavecinofranco/user-management-app" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3 className="proyecth3">User Management API REST</h3>
            <p className="proyectp">Aplicación Web Full Stack realizada con Spring Boot, Hibernate, JWT & Bootstrap. Gestión de usuarios a través de CRUD.</p>
          </div>
          <footer className="proyect-footer">
            <ul className="tech-list">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Hibernate</li>
              <li>JWT</li>
              <li>MySql</li>
            </ul>
          </footer>
        </div>
      </div>

        <div data-aos="flip-up" data-aos-delay="200">
          <div className="project">
            <header className="proyect-header">
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
                <a className="proyect-links-a" href="https://react-nike-ecommerce.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              <a className="proyect-links-a" href="https://github.com/palavecinofranco/react-ecommerce" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3 className="proyecth3">Ecommerce Nike</h3>
              <p className="proyectp">Recreación de Ecommerce de Nike mediante una SPA creada con React. Uso de hooks, React Router, Material UI & Firebase.</p>
            </div>
            <footer className="proyect-footer">
              <ul className="tech-list">
                <li>React</li>
                <li>Firebase</li>
                <li>Material UI</li>
              </ul>
            </footer>
          </div>
        </div>

        <div data-aos="flip-up" data-aos-delay="300">
          <div className="project">
            <header className="proyect-header">
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a className="proyect-links-a" href="https://github.com/palavecinofranco/java-petshop-app" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3 className="proyecth3">CRUD Peluqueria Canina</h3>
              <p className="proyectp">CRUD con Java & JPA. Simulación de gestion de Peluqueria Canina mediante interfaz gráfica hecha con Java Swing.</p>
            </div>
            <footer className="proyect-footer">
              <ul className="tech-list">
                <li>Java</li>
                <li>JPA</li>
                <li>Java Swing</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </div>

        <div data-aos="flip-up" data-aos-delay="400">
          <div className="project">
            <header className="proyect-header">
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a className="proyect-links-a" href="https://github.com/palavecinofranco/Proyecto-Landing-Page" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
              <a className="proyect-links-a" href="https://palavecinofranco.github.io/Proyecto-Landing-Page/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3 className="proyecth3">Landing Page</h3>
              <p className="proyectp">Lading page utilizando HTML, CSS & Javascrip "puro".</p>
            </div>
            <footer className="proyect-footer">
              <ul className="tech-list">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}