import React from "react";
import kappu from "../assets/images/kappu2.jpg";
import resume from "../assets/images/Rezume.pdf";
import { ArrowDownCircle } from "react-bootstrap-icons";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={kappu} alt="" />
      </div>

      <div className="about-content">
        <h2 className="heading">About Me</h2>
        <h3>Get to know about me!</h3>
        <p>
          Hello, I'm Kanupriya Agarwal, currently pursuing a B.Tech in Computer
          Science from Banasthali Vidyapith, Rajasthan. I'm in my third year of
          studies and have developed a strong passion for web development and
          design. Always eager to learn and grow, I actively seek opportunities
          to expand my knowledge and skill set. I'm also drawn to the exciting
          field of AI/ML and have plans to delve into it further. With my
          confidence, dedication, and perseverance, I believe I can make a
          valuable contribution to any team or project. Let's connect and create
          something remarkable together!
        </p>
        <a download="" href={resume} className="resume">
          <span>
            Download Resume <ArrowDownCircle />
          </span>
        </a>
      </div>
    </section>
  );
}
