import "./contact.css"
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

export function Contact(){

  return(
    <div id="contact">
      <header>
        <h2>Contáctame</h2>
        <p>Si quieres hablar conmigo, no dudes en mandarme un mensaje!</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:francopalavecinoagus@gmail.com">francopalavecinoagus@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+5531981213843">(+54 9 11) 68320193</a>
        </div>  
      </div>
    </div>
  )
}