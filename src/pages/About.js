import React from "react";
import HomeButton from "../components/HomeButton";
import Styles from "./About.module.css";
function About() {
  return (
    <div className={Styles.full}>
      <HomeButton />
      <div className={Styles.content}>
        <div className={Styles.hero}>
          <h1>
            I Design & <br />
            And <span className={Styles.span}>Build</span> web apps
          </h1>
        </div>
        <div className={Styles.text}>
          <h2>About</h2>
          <a href="https://www.google.com">resume (download)</a>
          <p>
            Hi, I’m Moh. a 21 years old multi-talented human with a master’s
            degree in information systems based in Oran,Algeria .<br />
            <br />
            Since i was a little kid , i was always fascinated by how computers
            and over all electronics work . I fell in love with games , that led
            me to what coding meant , and then found my passion which got me
            right where i am now.
            <br />
            <br />
            I like designing and building web application the most , but i
            dabble in other technologies concerning mobile and desktop .
            <br />
            <br />
            The MERN stack is my go to , i had some little experience with PHP ,
            LARAVEL8 and wordpress during my 5 years in college. I like getting
            into things i don’t understand , it leads to self development under
            stress which i manage very well .
            <br />
            <br />I pay attention to details, what the clients need and try
            build up on it, to acheive what they want perfectly during the
            design and the development process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
