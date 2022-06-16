import React from "react";
import { Routes, Route } from "react-router-dom";
import Styles from "./App.module.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import HireMe from "./pages/HireMe";

function App() {
  return (
    <div className={Styles.container}>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hire-me" element={<HireMe />} />
      </Routes>
    </div>
  );
}

export default App;
