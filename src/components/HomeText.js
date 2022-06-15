import React from "react";
import { Link } from "react-router-dom";
import Styles from "./HomeText.module.css";

function HomeText(props) {
  return (
    <Link className={Styles.title} to={props.link}>
      <h1>{props.text}</h1>
    </Link>
  );
}

export default HomeText;
