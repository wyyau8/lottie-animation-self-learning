import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/Main.css";
import Animation from "./Animation";


const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
  useState(true);

  useEffect(() => {
    if (true) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        2200
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      

      {isShowingSplashAnimation ? (
          <Animation />
        ) : (
          <div className="main-container">
            <Header/>
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
        
        )}

        
      
    </div>
  );
}
export default Main;