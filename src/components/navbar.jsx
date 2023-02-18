import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import {SiApplepodcasts } from "react-icons";


export const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0;
  return (
    <div className="navbar">
      <h3> Apple Store  </h3>
      <div className="links">
        <Link to="/"> Shop </Link>

        <Link to="/contact"> Contact </Link>

        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        {isAuthenticated ? (
          <li>
            <button onClick={() => loginWithRedirect()}>Log In</button>
          </li>
        ) : (
          <li>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Sign In
            </button>
          </li>
        )}
      </div>
    </div>
  );
};
