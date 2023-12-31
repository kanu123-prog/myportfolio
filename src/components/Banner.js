import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import kappu from "../assets/images/kappu.jpg";
import kappublack from "../assets/images/kappu-black.jpg";
import kappuwhite from "../assets/images/kappu-white.jpg";
import linkedin from "../assets/images/linkedinfinal.png";
import github from "../assets/images/github.svg";
import insta from "../assets/images/instagram.png";
import { Contacts } from "./Contacts";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Student", "Web Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio!</span>
            <h1>
              {`Hi there,`} <br />
              {`I'm Kanupriya Agarwal`}
              <div className="wrap"> {text}</div>
            </h1>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
           
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={kappublack} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
