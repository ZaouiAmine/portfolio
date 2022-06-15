import React from "react";
import MyImage from "../assets/me.jpg";
import HomeText from "../components/HomeText";
import Styles from "./Home.module.css";

function Home() {
  return (
    <div className={Styles.full}>
      <div className={Styles.left}>
        <img src={MyImage} alt="zaoui mohammed amine" />
      </div>
      <div className={Styles.right}>
        <HomeText text="ABOUT" link="/about" />
        <HomeText text="PORTFOLIO" link="/portfolio" />
        <HomeText text="HIRE ME." link="hire-me" />
      </div>
    </div>
  );
}
export default Home;
