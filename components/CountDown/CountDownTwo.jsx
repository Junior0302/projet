import React from "react";
import Countdown from "react-countdown";

const CountDownTwo = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <>
          <div className="time-count day">
            <span>{"00"}</span>Jours
          </div>
          <div className="time-count hour">
            <span>{"00"}</span>heure
          </div>
          <div className="time-count min">
            <span>{"00"}</span>minute
          </div>
          <div className="time-count sec">
            <span>{"00"}</span>seconde
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="time-count day">
            <span>{days < 10 ? "0" + days : days}</span>Jours
          </div>
          <div className="time-count hour">
            <span>{hours < 10 ? "0" + hours : hours}</span>heure
          </div>
          <div className="time-count min">
            <span>{minutes < 10 ? "0" + minutes : minutes}</span>minute
          </div>
          <div className="time-count sec">
            <span>{seconds < 10 ? "0" + seconds : seconds}</span>seconde
          </div>
        </>
      );
    }
  };
  

  return (
    <section id="countdown" className="countdown-area-two">
      <div className="container custom-container-four">
        <div className="row">
          <div className="col-lg-12">
            <div className="countdown-wrap">
            <h2 className="title">L'ICO commencera dans...</h2>
              <div id="countdown-gampang"></div>

              <div className="custom-countdown-two">
                <Countdown date={Date.now() + 5000000} renderer={renderer} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDownTwo;
