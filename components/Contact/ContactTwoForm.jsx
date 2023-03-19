import React from "react";

const ContactTwoForm = () => {
  return (
    <div className="contact-form-wrap-two wow fadeInRight" data-wow-delay=".2s">
      <h2 className="title">Restons en contact avec nous</h2>
      <form action="#">
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Adresse e-mail" required />
        <textarea name="massage" placeholder="Message" required></textarea>
        <button type="submit" className="btn btn-two">
          Envoyer le message
        </button>
      </form>
    </div>
  );

};

export default ContactTwoForm;
