import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "../assets/img/images.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar
        expand="md"
        className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <div>
            <a
              className="d-flex gap-2 align-items-center text-decoration-none text-white nav-title me-4"
              href="."
            >
              <div style={{ width: "50px" }}>
                {/* <img
                  src={logo}
                  alt="logo"
                  className="nav-title-img"
                  style={{ width: "50%" }}
                /> */}
              </div>
              <h1>SK</h1>
            </a>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex gap-4 justify-content-around m-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About me
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="https://drive.google.com/file/d/1y3tVoNR2D9LBzVOzsngrBFjHmVb3tDWh/view?usp=drive_link"
                className={
                  activeLink === "https://drive.google.com/file/d/1y3tVoNR2D9LBzVOzsngrBFjHmVb3tDWh/view?usp=drive_link"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("https://drive.google.com/file/d/1at2jU5V5uR4aznuCCnM_i-yL0C7Z6Fz9/view?usp=drive_link")}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                href="#connect"
                className={
                  activeLink === "connect"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("connect")}
              >
                Contact
              </Nav.Link>
              
            </div>

            <div className="navbar-text d-flex justify-content-between align-items-center">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/sarankanth-k/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={navIcon1}
                    alt="navIcon1"
                    style={{ width: "16px", height: "16px" }}
                  />
                </a>
                <a
                  href="https://github.com/SARANKANTH-K"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={navIcon2}
                    alt="navIcon2"
                    style={{ width: "16px", height: "16px" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/saran.k_007/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={navIcon3}
                    alt="navIcon3"
                    style={{ width: "16px", height: "16px" }}
                  />
                </a>
              </div>
              {/* <HashLink to="#connect">
                <button className="text-nowrap">
                  <span>Let’s Connect</span>
                </button>
              </HashLink> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
