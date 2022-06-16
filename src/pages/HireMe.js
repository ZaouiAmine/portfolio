import React from "react";
import HomeButton from "../components/HomeButton";
import Styles from "./HireMe.module.css";

import GmailImg from "../assets/gmail.png";
import FiverrImg from "../assets/fiverr.png";

function HireMe() {
  return (
    <div className={Styles.full}>
      <HomeButton />
      <div className={Styles.links}>
        <a href="mailto:aminedazaoui@gmail.com">
          <img src={GmailImg} alt="gmail" />
        </a>
        <a href="https://www.fiverr.com">
          <img src={FiverrImg} alt="fiverr" />
        </a>
      </div>
    </div>
  );
}

export default HireMe;
