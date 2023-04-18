import { Outlet, NavLink } from "react-router-dom";
import "../assets/css/Header.css";
import DisplayLottie from "../pages/DisplayLottie";
import logoAnimation from "../assets/lottie/logo.json";

// Component for Header menu
export default function Header() {
  // Function for mobile nav menu
  function showMenu() {
    let menu = document.getElementsByClassName("menu-mobile")[0];

    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  return (
    <div>
      <header className=" header">
        <div>
          <a href="/" className="logo">
            {/* <img src={require("../assets/images/logo.png")} /> */}
            <DisplayLottie animationData={logoAnimation} />
          </a>
          <ul className="menu">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <button class="navbar-toggler btn-menu" onClick={() => showMenu()}>
          <i class="bi bi-list fs-2"></i>
        </button>
      </header>
      {/* Menu for mobile layout */}
      <ul className="menu-mobile">
        <li>
          <NavLink onClick={() => showMenu()} to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => showMenu()} to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => showMenu()} to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => showMenu()} to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
