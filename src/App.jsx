import React from "react";
import "./App.css";
import MiApi from "./components/MiApi";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main">
      <img className="img-portrait" src="/portada.jpg" alt="Imagen de portada" />
      <MiApi />
      <Footer />
    </div>
  );
}

export default App;
