import React from "react";

const DownloadArea = () => {
  return (
    <section className="download-area pt-150 pb-140">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
            <div
              className="download-img text-center wow fadeInRight"
              data-wow-delay=".2s"
            >
              <img src={"/img/images/download_img.png"} alt="" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div
              className="download-content wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-20">
    <span className="sub-title">Télécharger l'application ICO</span>
    <h2 className="title">
      Vous pouvez faire du trading, contrôler, acheter et vendre depuis votre mobile
    </h2>
  </div>
  <p>
    La première plateforme ICO au monde qui offre des récompenses et facilite la vie des investisseurs
  </p>

              <div className="download-btn">
                <a href="#">
                  <img src={"/img/images/download_btn01.png"} alt="" />
                </a>
                <a href="#">
                  <img src={"/img/images/download_btn02.png"} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadArea;
