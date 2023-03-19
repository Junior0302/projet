import React from "react";
import WhyChooseUsTwoItem from "./WhyChooseUsTwoItem";

const WhyChooseUsTwo = () => {
  const items = [
    {
      src: "/img/icon/h2_choose_icon01.svg",
      title: "Facilité de paiement mobile",
      desc: "Ajoutez des œuvres d'art nouvelles, tendances et rares à votre collection.",
      url: "/home-two",
    },
    {
      src: "/img/icon/h2_choose_icon02.svg",
      title: "Transactions gratuites à vie",
      desc: "Ajoutez des œuvres d'art nouvelles, tendances et rares à votre collection.",
      url: "/home-two",
    },
    {
      src: "/img/icon/h2_choose_icon03.svg",
      title: "Protéger l'identité",
      desc: "Ajoutez des œuvres d'art nouvelles, tendances et rares à votre collection.",
      url: "/home-two",
    },
    {
      src: "/img/icon/h2_choose_icon04.svg",
      title: "Sécurité et contrôle sur l'argent",
      desc: "Ajoutez des œuvres d'art nouvelles, tendances et rares à votre collection.",
      url: "/home-two",
    },
  ];
  

  return (
    <section className="choose-area-two choose-bg pb-130">
      <div className="container custom-container-four">
        <div className="row justify-content-center">
          <div className="col-lg-6">
          <div className="section-title text-center mb-70">
          <span className="sub-title">Pourquoi nous choisir</span>
          <h2 className="title">Pourquoi choisir notre jeton bigtech</h2>
        </div>

          </div>
        </div>

        <div className="row">
          {items.map((x, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <WhyChooseUsTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsTwo;
