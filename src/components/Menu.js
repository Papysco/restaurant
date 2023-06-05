import React from "react";
import "../style/menu.css";
import img from "../images/pizza.png";
import Paniers from "./Paniers";

class Menu extends React.Component {
  state = {
    plat: [
      {
        image: "url",
        titre: "pizza bolognese",
        description: "Velit sunt veniam exercitation sint cupidatat sint.",
        prix: 3000,
      },
      {
        image: "url",
        titre: "pizza poulet",
        description: "Velit sunt veniam exercitation sint cupidatat sint.",
        prix: 5000,
      },
      {
        image: "url",
        titre: "pizza viande",
        description: "Velit sunt veniam exercitation sint cupidatat sint.",
        prix: 2500,
      },
      {
        image: "url",
        titre: "pizza viande1",
        description: "Velit sunt veniam exercitation sint cupidatat sint.",
        prix: 2500,
      },
    ],
    panier: [],
  };

  handlePanier = (food) => {
    // this.setState({ panier: [...this.state.panier, food] });
    this.props.ajouterPanier(food);
  };

  render() {
    return (
      <section className="menu" id="Menu">
        <div className="row menu-title">
          <div className="col-sm">
            <h2 className="col-sm">Notre Menu du jour</h2>
          </div>
          <div className="col-sm">
            <ul className="menu-title-list">
              <li className="menu-title-list-item">Pizza</li>
              <li className="menu-title-list-item">Jus</li>
              <li className="menu-title-list-item">Burger</li>
              <li className="menu-title-list-item">Frites</li>
            </ul>
          </div>
        </div>
        <div className="menu-food">
          {this.state.plat.map((food) => {
            return (
              <div
                className="card food-card"
                key={food.titre}
                style={{ width: "18rem" }}
              >
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{food.titre}</h5>
                  <p className="card-text">{food.description}</p>
                  <a
                    href="/"
                    className="btn btn-success"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handlePanier(food);
                    }}
                  >
                    Acheter {food.prix} FCFA
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <br />
      </section>
    );
  }
}

export default Menu;
