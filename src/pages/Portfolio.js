import React, { useEffect } from "react";
import HomeButton from "../components/HomeButton";
import "./Portfolio.css";

import arrowImg from "../assets/arrow.png";

function Portfolio() {
  useEffect(() => {
    let sliderImagesBox = document.querySelectorAll(".cards-box");
    sliderImagesBox.forEach((el) => {
      let imageNodes = el.querySelectorAll(".card:not(.hide)");
      let arrIndexes = []; // Index array
      (() => {
        // The loop that added values to the arrIndexes array for the first time
        let start = 0;
        while (imageNodes.length > start) {
          arrIndexes.push(start++);
        }
      })();

      let setIndex = (arr) => {
        for (let i = 0; i < imageNodes.length; i++) {
          imageNodes[i].dataset.slide = arr[i]; // Set indexes
        }
      };
      // imageNodes.forEach((imgnode) => {
      //   imgnode.addEventListener("click", () => {
      //     arrIndexes.unshift(arrIndexes.pop());
      //     setIndex(arrIndexes);
      //   });
      // });
      let arrow = document.querySelectorAll(".arrow");
      arrow[0].addEventListener("click", () => {
        arrIndexes.unshift(arrIndexes.pop());
        setIndex(arrIndexes);
      });
      setIndex(arrIndexes); // The first indexes addition
    });
  });
  return (
    <>
      <HomeButton />
      <div className="full">
        <img className="arrow" src={arrowImg} />
        <div className="cards-box">
          <div className="card hide"></div>
          <div className="card card-one"></div>
          <div className="card card-two"></div>
          <div className="card card-three"></div>
          <div className="card card-four"></div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
