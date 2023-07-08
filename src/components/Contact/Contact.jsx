import "./contact.css"
import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

export function Contact(){

  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };
  const handleInputChange3 = (e) => {
    setInputValue3(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
  };

  const form = useRef();
  const notifySuccess = () => toast.success("Email enviado! Te contestaré a la brevedad", {
    position: toast.POSITION.BOTTOM_RIGHT
  });;

  const notifyError = () => toast.error("Error al enviar el mail !", {
    position: toast.POSITION.TOP_LEFT
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j9uje3c', 'template_ik16u6u', form.current, 'hjRrj8_1Tt1id6zCb')
      .then((result) => {
        notifySuccess()
        setInputValue('');
        setInputValue2('')
        setInputValue3('')
      }, (error) => {
        notifyError();
      });
  };
  
  return(
    <div id="contact">
        <header>
          <h2>Contáctame</h2>
          <p>Si quieres hablar conmigo, no dudes en mandarme un mail!</p>
        </header>
      <form ref={form} onSubmit={handleSubmit}>
        <input
          placeholder="Tu email"
          id="email"
          type="email"
          value={inputValue}
          name="user_email"
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Nombre / Companía"
          id="name"
          type="text"
          onChange={handleInputChange2}
          value={inputValue2}
          name="user_name"
          required
        />
        <textarea
          value={inputValue3}
          required
          placeholder="Deje su mensaje"
          id="message"
          onChange={handleInputChange3}
          name="message"
        />
        <button
          type="submit"
          value="Send"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}