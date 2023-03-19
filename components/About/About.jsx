import React from "react";

const About = () => {
  return (
    <section id="about" className="about-area-two">
  <div className="container custom-container-four">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div
          className="about-img-two text-center wow fadeInLeft"
          data-wow-delay=".2s"
        >
          <img src={"/img/images/h2_about_img.png"} alt="" />
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="about-content-two wow fadeInRight"
          data-wow-delay=".2s"
        >
          <div className="section-title section-title-two mb-15">
            <span className="sub-title">À PROPOS DE Crypto ICO</span>
            <h2 className="title">
              Le thème Bigtech est le meilleur pour votre ICO
            </h2>
          </div>
          <p>
            La 1ère plateforme ICO au monde qui offre des récompenses et aide
            les investisseurs à investir facilement
          </p>
          <div className="about-list">
            <ul>
              <li>
                <i className="fas fa-check"></i>Une formule alléchante et
                réelle
              </li>
              <li>
                <i className="fas fa-check"></i>Des pensées solides comme la
                montagne
              </li>
            </ul>
          </div>

          <a
            href={""}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-two"
          >
            Télécharger le document
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="about-shape-wrap">
    <img
      src={"/img/images/about_shape01.png"}
      alt=""
      className="shape-one"
    />
    <img
      src={"/img/images/about_shape02.png"}
      alt=""
      className="shape-two rotateme"
    />
  </div>
</section>

  );
};

export default About;
