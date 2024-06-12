import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/06.jpg";
import Typed from "typed.js"; // Import Typed.js library
import { BrowserRouter as Router } from "react-router-dom";
import './Banner.css';

export const Banner = () => {
  // Create a ref for the text element that you want to animate
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js once the component is mounted
    const toRotate = ["Full Stack Developer", "UI/UX Designer"];
    const options = {
      strings: toRotate,
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      startDelay: 1000, // delay before typing starts in milliseconds
      backDelay: 1000, // delay before backspacing starts in milliseconds
      loop: true, // loop the animation indefinitely
      showCursor: false,
    };

    const typed = new Typed(textRef.current, options);

    // Cleanup function
    return () => {
      typed.destroy(); // destroy Typed.js instance when the component unmounts
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row >
            <Col xs={12} md={6} xl={7}>
            <h2>{"Hii👋 I'm"}</h2>
            <h1>{"Sarankanth"}</h1>
              <span className="wrap">
               
                <span ref={textRef}></span> {/* Use the textRef for Typed.js */}
               
              </span>
              <Row className="button-row">
        <Col xs="auto">
          <button className="button"><a href="https://drive.google.com/file/d/1at2jU5V5uR4aznuCCnM_i-yL0C7Z6Fz9/view?usp=drive_link" style={{textDecoration:"none",color:"white"}}>Resume</a></button>
        </Col>
        <Col xs="auto">
          <button className="buttonn"><a href="#connect" style={{textDecoration:"none",color:"white"}}>Hire me</a></button>
        </Col>
      </Row>
                   
              {/* <p>
                As a beginner Web Developer and Illustrator, I have a passion
                for creating visually appealing and functional digital content.
                I am constantly seeking to improve my skills and expand my
                knowledge, experimenting with different tools and techniques to
                create engaging designs and user-friendly websites. With a
                combination of creativity and technical know-how, I am eager to
                bring my ideas to life and make a meaningful impact in the
                digital world.
              </p> */}
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header" style={{ width: "310px", height: "310px" }} />
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
