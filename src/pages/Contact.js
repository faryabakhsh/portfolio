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
        <h1 className="heading1">Let's Connect</h1>
        <form onSubmit={sendEmail}>
          <label className="label">Name</label>
          <br />
          <input className="input" type="text" name="name" required />
          <br />
          <label className="label">Email</label>
          <br />
          <input className="input" type="email" name="user_email" required />
          <br />

          <label className="label">Message</label>
          <br />
          <textarea className="message" name="message" required />

          <br />
          <input className="contactbutton" type="submit" value="send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
