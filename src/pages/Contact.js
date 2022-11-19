import React from 'react';
import "./Contact.css";
import emailjs from "emailjs-com"


function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_k6mw6ur", "template_qn6my0p", e.target, "iDX8dmLxhtHzH6ppM").then(res=>{console.log(res)}).catch(err=>console.log(err));
    }
  return (
    <div className='contact'>
      <h1>Lets Connect</h1>
      <form onSubmit={sendEmail}>
        <label>name</label><br/>
        <input type="text" name="name"/>
<br/>
        <label>Email</label><br/>
        <input type="email" name="user_email" /><br/>

        <label>Message</label><br/>
        <textarea name="message" rows="4" /><br/>
        <input type="submit" value="send" />
      </form>
    </div>
  )
}

export default Contact