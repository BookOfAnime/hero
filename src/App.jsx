import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import gsap from "gsap";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";

function App() {
  const [count, setCount] = useState(0);
  gsap.registerPlugin(useGSAP);

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(".s", { x: "120%", duration: 1,scale:1 }).to(".s", { x: "50%", duration: 1 }).to('.fire',{duration:2,x:"100%", y: "-34vh"}).to('.s',{x:'120%',duration:1}).to('.water',{duration:1,y:"-300px",x:'-350%',scale:3})

    
  //  .to('.s',{duration:1,x:"120%"})
   

    gsap.to(".f", { x: "-120%", duration: 1,scale:1.1 });
    gsap.to(".g", { x: "0", duration: 1 });
    

    gsap.to(".title", { y: "100px", duration: 3, color: "white" });
    gsap.to('.water',{duration:1,x:"300px"})
  }, []);

  return (
    <div className="page">
      <Navbar />
      <h1 className="title">hero pepe</h1>
      <div className="container">
        <img className="s" src="./b.png" alt="Image S" />
        <img className="f" src="./fil.png" alt="Image F" />
        <img className="fire" src="./fire.png" alt="" />
        <img className="fire" src="./fire.png" alt="" />
        <img className="water" src="./wave.png" alt="" />


      </div>
    </div>
  );
}

export default App;
