import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState } from "react";
import projImg1 from "../assets/img/img1.jpg";
import projImg2 from "../assets/img/img.jpg";
import projImg3 from "../assets/img/img2.jpg";
import projImg4 from "../assets/img/Illustrations/TBBT.png";
import projImg5 from "../assets/img/Illustrations/Mandala.png";
import projImg6 from "../assets/img/Illustrations/Neko.png";
import cinephile from "../assets/img/Websites/cinephile.png";
import pokedex from "../assets/img/Websites/pokedex.png";
import gallery from "../assets/img/Websites/gallery.png";
import './Project.css';


import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
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

  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="project" id="projects">
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
                  <h2>Projects</h2>
                  <p>
                    {" "}
                    I am passionate about web development and design. As a developer, I have honed my skills in creating unique and functional web applications. My goal is to build projects that are both user-friendly and visually appealing. Check out my recent work, and feel free to contact me for collaborations or projects.


                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">My works</Nav.Link>
                      </Nav.Item> */}
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">Skills</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      // id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                        <div>
      <div className="container">
        {/* <h1 className="sub-title">My Work</h1> */}
        <div className="work-list">
        <div className="work">
            <img src={projImg1} alt="Event Management System" />
            <div className="layer">
              <h3><b>Event Management System</b></h3>
              <p>This project is done using HTML, CSS, JS for frontend and Flask for backend.By this Track and manage events organized inside KEC.</p>
              <button className="button"><a href="" style={{textDecoration:"none",color:"white"}}>View</a></button>
            </div>
          </div>
          <div className="work">
            <img src={projImg2} alt="Event Management System" />
            <div className="layer">
              <h3><b>Restaurant website</b></h3>
              <p>This project is done using MERN stack.By this effortlessly manage reservations for seamless
              dining experiences.</p>
              <button className="button"><a href="https://github.com/SARANKANTH-K/consultancy_client.git" style={{textDecoration:"none",color:"white"}}>View</a></button>
              
            </div>
          </div>
          <div className="work">
            <img src={projImg4} alt="Employee Management System" />
            <div className="layer">
              <h3><b>Employee Management System</b></h3>
              <p>This project is done by Python. It shows the employee details like name, dob, gender, etc. The admin can add, update, delete, and modify the details of the employee.</p>
              <button className="button"><a href="https://github.com/SARANKANTH-K/Employee-management-system.git" style={{textDecoration:"none",color:"white"}}>View</a></button>
            </div>
          </div>
          
          
      
          {showMore && (
            <div className="work-list">
            <div className="work">
            <img src={projImg3} alt="UI/UX Designs" />
            <div className="layer">
              <h3><b>Online book store</b></h3>
              <p>This project is done using ReactJs,MySQL.It shows the book details. The admin can add, update, delete, and modify the details of the books.</p>
              <button className="button"><a href="https://github.com/SARANKANTH-K/Bookstore.git" style={{textDecoration:"none",color:"white"}}>View</a></button>
            </div>
          </div>
          <div className="work">
            <img src={projImg6} alt="UI/UX Designs" />
            <div className="layer">
              <h3><b>Simple NotesApp</b></h3>
              <p>This project is done using ReactJs.Using this we can take notes at anywhere at anytime frequently.</p>
              <button className="button"><a href="https://sarankanthk-notesapp-react-616z.onrender.com" style={{textDecoration:"none",color:"white"}}>View</a></button>
            </div>
          </div>
            <div className="work">
              <img src={projImg4} alt="UI/UX Designs" />
              <div className="layer">
                <h3><b>UI/UX Designs</b></h3>
                <p>These designs were completed during my internship periods at Codsoft.</p>
                <button className="button"><a href="https://github.com/SARANKANTH-K/CODSOFT.git" style={{textDecoration:"none",color:"white"}}>View</a></button>
              </div>
            </div>
            </div>
          )}
        </div>
        <button className="btn" onClick={toggleContent}>
          {showMore ? 'Show Less' : 'See more'}
        </button>
      </div>
    </div>
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                        <Row>
                          {websites.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h1>
                          {"</>"}
                          <br />
                          Work in Progress
                        </h1>
                      </Tab.Pane> */}
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
