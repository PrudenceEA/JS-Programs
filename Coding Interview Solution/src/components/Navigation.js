import React from "react";
import { Nav, Link } from "react-router-dom";

function Navigation () {
  return (
    <div>
      <Nav>
        <Link to="/"></Link>
        <Link to="/compte"></Link>
        <Link to="/inscription"></Link>
        <Link to="/connexion"></Link>
        <Link to="/proposition"></Link>
        <Link to="/site"></Link>
        <Link to="/message"></Link>
        <Link to="/promotion"></Link>
        <Link to="/statistique"></Link>
        <Link to="/gain"></Link>
        <Link to="/parrainage"></Link>
        <Link to="/amelioration"></Link>
        <Link to="/mode emploi"></Link>
      </Nav>
    </div>
  );
};

export default Navigation;
