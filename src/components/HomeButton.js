import React from "react";
import Styles from "./HomeButton.module.css";
import { Link } from "react-router-dom";

function home() {
  return (
    <Link to="/" className={Styles.btn}>
      home.
    </Link>
  );
}

export default home;
