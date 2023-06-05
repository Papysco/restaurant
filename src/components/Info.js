import React from "react";
import { HashLink } from "react-router-hash-link";
import "../style/Info.css";
// import pizza from "../images/pizza.png";

const Info = () => {
  return (
    <section className="info">
      <div className="image"></div>
      <div className="container info-container">
        <div className="row">
          <div className="col-sm">
            <h1 className="info-titre">Le restaurant Italien</h1>
            <br />
            <p className="info-text">
              Bienvenue dans notre restaurant italien passionné de cuisine
              authentique. Notre menu varié et frais saura ravir vos papilles.
              Rejoignez-nous pour une expérience culinaire inoubliable dans une
              atmosphère chaleureuse et conviviale. Réservez dès maintenant et
              laissez-nous vous transporter en Italie.
            </p>
            <br />

            <HashLink to="#Menu">
              <button
                type="button"
                className="btn btn-danger info-btn"
                data-bs-toggle="button"
              >
                Commander
              </button>
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
