import React from "react";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#198754",
        color: "white",
        paddingTop: "2rem",
        fontFamily: "Segoe Print",
        bottom: "0px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>Horaires d'ouverture</h3>
            <p>Lundi-Vendredi: 11h - 22h</p>
            <p>Samedi-Dimanche: 9h - 23h</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>Contactez-nous</h3>
            <p>Téléphone: (221) 77 392 13 77</p>
            <p>Email: info@monrestaurant.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <p>
                &copy; {new Date().getFullYear()} MonRestaurant. Tous droits
                réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
