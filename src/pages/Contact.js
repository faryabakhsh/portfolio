import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k6mw6ur",
        "template_qn6my0p",
        e.target,
        "iDX8dmLxhtHzH6ppM"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="contact">
      <div className="container">
        <h1 className="heading1">Lets Connect</h1>
        <form onSubmit={sendEmail}>
          <label className="label">Name</label>
          <br />
          <input className="input" type="text" name="name" />
          <br />
          <label className="label">Email</label>
          <br />
          <input className="input" type="email" name="user_email" />
          <br />

          <label className="label">Message</label>
          <br />
          <textarea className="input" name="message" />

          <br />
          <input className="button" type="submit" value="send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
