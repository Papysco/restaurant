import React, { Component } from "react";
import "../style/header.css";
import logo from "../logofood.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class Header extends Component {
  state = { data: "" };
  render() {
    return (
      <header className="header bg-body-tertiary navbar navbar-expand-lg bg-body-tertiary">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>

        <ul className="header-container-link navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link" to="/#Menu">
              Menu
            </HashLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/panier">
              Mon panier
            </Link>
          </li>
        </ul>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Recherche..."
            aria-label="Rechercher"
          />
          <button className="btn btn-outline-success" type="submit">
            Rechercher
          </button>
        </form>
      </header>
    );
  }
}

// Header.defaultProps = {
//   data: "my data",
// };

export default Header;
