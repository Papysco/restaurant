import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

const Panier = ({ foods }) => {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(foods);

  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      // total += item.prix * item.quantite;
      total += item.prix * 1;
      // total += item.prix;
    });
    setTotal(total);
  };

  useEffect(() => {
    calculateTotal();
  }, [items]);

  const removeItem = (item) => {
    const updatedItems = items.filter((food) => food !== item);
    setItems(updatedItems);
  };

  return (
    <div className="panier container my-5">
      <h2 className="mb-4">Votre panier</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Prix unitaire</th>
            <th>Quantité</th>
            <th>Prix total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.titre}</td>
              <td>{item.prix} CFA</td>
              <td>{item.quantite}1</td>
              {/* <td>{item.prix * item.quantite} CFA</td> */}
              <td>{item.prix * 1} FCFA</td>
              <td>
                <Button
                  variant="danger"
                  onClick={(e) => {
                    e.preventDefault();
                    removeItem(item);
                  }}
                >
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="panier-total d-flex justify-content-end align-items-center">
        <h5 className="mb-0 mr-3">Total : </h5>
        <h4 className="mb-0">{total} FCFA </h4>
        <Link to="/commander">
          <Button variant="success" className="ml-3">
            Commander
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Panier;
