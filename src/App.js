import { useState, useEffect , useRef} from "react";
import "./App.css";
import Experience from "./Experience";
import Getaway from "./Getaway";
import Hero from "./Hero";
import Inspiration from "./Inspiration";
import Modal from "./Modal";
function App() {
  
  return (
    <div className="app">
      <Hero/>
      <Modal/>
      <Inspiration/>
      <Experience/>
      <Getaway/>
      <Footer/>
    </div>
  );
}

export default App;
