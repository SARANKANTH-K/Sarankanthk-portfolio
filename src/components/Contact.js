import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const [mouseOver, setMouseOver] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_z6fwwi9",
        "template_bj3ukqs",
        form.current,
        "0HS6oaOqTx8Sl43jF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Sent");
          toast.success("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          setButtonText("Send");
          toast.error("Message Failed to Send!");
        }
      );
  };

  return (
    <section
      className="contact"
      id="connect"
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      style={{
        width: `${mouseOver ? "100%" : "90%"}`,
        margin: "auto",
        borderRadius: `${mouseOver ? "0" : "50px"}`,
        transition: "all 1s ",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* <Col size={12} md={6}>
           
                <img
                  // src={contactImg}
                  alt="Contact Us"
                  style={{ width: "500px", height: "400px" }}
                />
          </Col> */}
          <Col size={12} md={6} style={{alignItems:"center",justifyContent:"center",marginLeft:320}}>
              <div>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="tel"
                        name="user_phone"
                        placeholder="Phone No."
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name="message" placeholder="Message" required />
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
