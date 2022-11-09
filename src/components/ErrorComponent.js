import React from "react";
import { NavLink } from "react-router-dom";

function ErrorComponent() {
  return (
    <div className="error-page">
      <div className="error-div1">
        <h1>Désolé, cette page n'existe pas !</h1>
      </div>
      <div className="error-div2">
        <NavLink to={"/"}>
          <button>Accueil</button>
        </NavLink>
      </div>
    </div>
  );
}

export default ErrorComponent;
