import React from "react";
import RoadmapTwoItem from "./RoadmapTwoItem";

const RoadmapTwo = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Milieu du T4 2021",
      title: "Concept",
      info: <>Support EVM pour les parachains, SubQuery Academy, Preuve d'indexation</>,
    },
    {
      roadmapTitle: "Milieu du T4 2021",
      title: "Test bêta de l'application",
      info: (
        <>
          {" "}
          Lancement du testnet public <br />
          Explorateur de réseau SubQuery et dApp <br />
          Indexation à un moment précis
        </>
      ),
    },
    {
      roadmapTitle: "Milieu du T4 2021",
      title: "Test Alpha",
      info: (
        <>
          Lancement de la Fondation SubQuery, finalisation des recherches pour les autres chaînes de couche 1,
          programme de minage de liquidités
        </>
      ),
    },
    {
      roadmapTitle: "Milieu du T4 2021",
      title: "Opérationnel",
      info: <>SubQuery lance sa propre parachain, Fondation SubQuery</>,
    },
  ];

  return (
    <section id="roadmap" className="roadmap-area-two pt-130 pb-100">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
        <div className="col-xl-6">
  <div className="section-title section-title-two text-center mb-65">
    <span className="sub-title">feuille de route</span>
    <h2 className="title">
      Stratégie Bigtech et <br />
      Plan de Projet
    </h2>
  </div>
</div>

        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="roadmap-wrap-two">
              {roadmap_items.map((x, index) => (
                <RoadmapTwoItem key={index} item={x} />
              ))}
            </div>

            <div className="roadmap-wrap-two bottom">
              {roadmap_items.map((x, index) => (
                <RoadmapTwoItem key={index} item={x} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTwo;
