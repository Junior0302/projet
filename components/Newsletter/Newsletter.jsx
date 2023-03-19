import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter-area">
      <div className="container custom-container-four">
        <div className="row">
          <div className="col-lg-12">
          <div className="newsletter-wrap">
  <div className="newsletter-content">
    <h2 className="title">S'abonner à la newsletter</h2>
  </div>
  <div className="newsletter-form">
    <form action="#">
      <input type="text" placeholder="Entrez votre e-mail" required />
      <button type="submit" className="btn btn-two">
        S'abonner
      </button>
    </form>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
