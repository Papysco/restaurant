import React from "react";
import "../style/socialMedia.css";
import whatsapp from "../images/whatsapp.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import icone from "../images/icone-table.svg";

const SocialMedia = () => {
  return (
    <div className="row social-media">
      <div className="col-sm">
        <button
          type="button"
          className="btn btn-outline-danger social-media-btn"
        >
          Reserver une table
          <img
            src={icone}
            alt="icone resto"
            style={{ width: "32px", paddingLeft: "10px" }}
          />
        </button>
      </div>
      <div className="col-sm" style={{ marginLeft: "0rem" }}>
        <span className="social-media-text">Réseaux sociaux :</span>
        <a href="/">
          <img src={whatsapp} alt="whatsapp" className="social-media-logo" />
        </a>
        <a href="">
          <img src={facebook} alt="facebook" className="social-media-logo" />
        </a>
        <a href="">
          <img src={instagram} alt="instagram" className="social-media-logo" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
