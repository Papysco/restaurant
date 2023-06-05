import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Info from "./components/Info";
import SocialMedia from "./components/SocialMedia";
import Menu from "./components/Menu";
import Review from "./components/review";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Album from "./components/Album";
import Footer from "./components/Footer";
import Paniers from "./components/Paniers";
import "../src/index.css";

function App() {
  const [panier, setPanier] = useState([]);

  const ajouterPanier = (listePanier) => {
    const panierTmp = [...panier];
    panierTmp.push(listePanier);
    setPanier(panierTmp);
  };

  useEffect(() => {
    console.log(panier);
  });

  return (
    <div style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Info />
                <SocialMedia />
                <Menu ajouterPanier={ajouterPanier} />
                <Review />
                <Album />
              </div>
            }
          />
          <Route exact path="/panier" element={<Paniers foods={panier} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
