import "./contact.css";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const notifySuccess = () =>
    toast.success("Email enviado! Te contestaré a la brevedad", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  const notifyError = () =>
    toast.error("Error al enviar el mail!", {
      position: toast.POSITION.TOP_LEFT,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b79qv9d",
        "template_ik16u6u",
        form.current,
        "hjRrj8_1Tt1id6zCb"
      )
      .then(
        (result) => {
          notifySuccess();
          setEmail("");
          setName("");
          setMessage("");
        },
        (error) => {
          notifyError();
        }
      );
  };

  return (
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
          value={email}
          name="user_email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Nombre / Compañía"
          id="name"
          type="text"
          value={name}
          name="user_name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Deje su mensaje"
          id="message"
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
