import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Illustrations/Emma.png";
import projImg2 from "../assets/img/Illustrations/LaLaLand.png";
import projImg3 from "../assets/img/Illustrations/Wanda.png";
import projImg4 from "../assets/img/Illustrations/TBBT.png";
import projImg5 from "../assets/img/Illustrations/Mandala.png";
import projImg6 from "../assets/img/Illustrations/Neko.png";
import cinephile from "../assets/img/Websites/cinephile.png";
import pokedex from "../assets/img/Websites/pokedex.png";
import gallery from "../assets/img/Websites/gallery.png";
import './About.css';
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const About = () => {
  const websites = [
    {
      title: "Cinephile",
      isWebsite: true,
      description:
        "Site that can get detailed information about movies and TV shows.",
      imgUrl: cinephile,
      Url: "https://lazyjinchuriki.github.io/cinephile/",
      githubUrl: "https://github.com/lazyjinchuriki/cinephile/",
    },
    {
      title: "Pokedex",
      isWebsite: true,
      description: "Everything you need to know about any pokemon out there.",
      imgUrl: pokedex,
      Url: "https://lazyjinchuriki.github.io/pokedex/",
      githubUrl: "https://github.com/lazyjinchuriki/pokdex/",
    },
    {
      title: "Gallery",
      isWebsite: true,
      description: "A Gallery to store your images with a login system.",
      imgUrl: gallery,
      Url: "https://lazyjinchuriki.github.io/gallery/",
      githubUrl: "https://github.com/lazyjinchuriki/gallery/",
    },
  ];
  const illustrations = [
    {
      title: "Emma Watson",
      description: "Character Illustration",
      imgUrl: projImg1,
    },
    {
      title: "La La Land",
      description: "Spotify Cover Art",
      imgUrl: projImg2,
    },
    {
      title: "Wanda",
      description: "Character Illustration",
      imgUrl: projImg3,
    },
    {
      title: "The Big Bang Theory",
      description: "Simple Illustrations",
      imgUrl: projImg4,
    },
    {
      title: "Mandala",
      description: "Geometric Design",
      imgUrl: projImg5,
    },
    {
      title: "Neko",
      description: "Animal Art",
      imgUrl: projImg6,
    },
  ];
  const skills = [
    { name: 'HTML', percentage: '90%', className: 'html' },
    { name: 'CSS', percentage: '70%', className: 'css' },
    { name: 'JavaScript', percentage: '60%', className: 'js' },
    { name: 'React', percentage: '60%', className: 'react' },
    { name: 'SQL', percentage: '70%', className: 'sql' },
    { name: 'Git', percentage: '60%', className: 'git' },
    { name: 'Figma', percentage: '80%', className: 'figma' },
  ];


  return (
    <section className="project" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About me</h2>
                  <p>
                    {" "}
                    I'm a final-year Computer Science and Engineering student. I have a passion for coding and problem-solving.
                              Currently, I'm focused on expanding my skills through coursework and personal projects. I enjoy exploring new technologies and look forward to applying my knowledge to real-world challenges.
                             Outside of academics, I like engaging with coding communities and contributing to projects.My goal is to continue learning and make a meaningful impact in the field of technology.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Skills</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {/* {illustrations.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })} */}
                        <ul className="education-list">
      <li className="education-item">
        <span className="education-year">2023 current</span><br />
        <b>BE-Computer Science and Engineering, Kongu Engineering College.</b><br />
        <b>(CGPA - 8.39%)</b>
      </li>
      <li className="education-item">
        <span className="education-year">2021 HSC</span><br />
        <b>Government Higher Secondary School, Kasipalayam.</b><br />
        <b>(86.07%)</b>
      </li>
      <li className="education-item">
        <span className="education-year">2019 SSLC</span><br />
        <b>Government Higher Secondary School, Kasipalayam.</b><br/>
        <b>(75.6%)</b>
      </li>
    </ul>        </Row>
                        
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                        <div>
      {skills.map((skill, index) => (
        <div className="skill_container">
        <div className="skill_bar" key={index}>
          <div className="info">
            <p>{skill.name}</p>
            <p>{skill.percentage}</p>
          </div>
          <div className="bar">
            <span className={skill.className} style={{ width: skill.percentage }}></span>
          </div>
        </div>
        </div>
      ))}
    </div>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                     
                      <ul className="internship-list">
      <li className="internship-item">
        <span className="internship-year">2024</span> <span className="internship-current">current</span><br />
        <b className="internship-title">Internship - Octanet Services and Pvt Ltd</b><br />
        During my one-month internship at Octanet Services Pvt Ltd, I gained valuable insights and hands-on skills related to web development.
      </li>
      <li className="internship-item">
        <span className="internship-year">2023</span><br />
        <b className="internship-title">Internship - CODSOFT</b><br />
        Completed One month intern at codsoft technologies as a UI/UX designer! This experience likely provided valuable insights and hands-on skills in the dynamic field of user interface and user experience design.
      </li>
    </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
