import "./contact.css"
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

export function Contact(){

  return(
    <div id="contact">
      <header>
        <h2>Contáctame</h2>
        <p>Si quieres hablar conmigo, no dudes en mandarme un mail!</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:francopalavecinoagus@gmail.com"><img src={emailIcon} alt="Email" /></a>
        </div>
      </div>
    </div>
  )
}