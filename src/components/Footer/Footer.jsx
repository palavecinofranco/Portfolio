import "./footer.css"
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'

export function Footer() {
  return (
    <div className="footer">
      <a href="/" className="logo">
        <span>P</span>
        <span>Fran</span>
      </a>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/franco-palavecino-a9b567240/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/palavecinofranco"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </div>
  )
}
