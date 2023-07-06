import React from "react";
import linkedin from "../assets/images/linkedinfinal.png";
import github from "../assets/images/github.svg";
import insta from "../assets/images/instagram.png";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>
                <span>Kanupriya's</span> Portfolio
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum ea quo ex ullam laboriosam magni totam, facere eos iure
                voluptate.
              </p>
              <div className="social-icon footer-icon">
                <a href="https://www.linkedin.com/in/kanupriya-agarwal-794b1921b/">
                  <img src={linkedin} alt="" />
                </a>
                <a href="https://github.com/kanu123-prog">
                  <img src={github} alt="" />
                </a>
                <a href="https://www.instagram.com/kxnupriya/">
                  <img src={insta} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="#home">
                    🔗 Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="#about">
                    🔗 About me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="#skills">
                    🔗 Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="#projects">
                    🔗 Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="#qualifications">
                    🔗 Qualifications
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact Information</h5>
              <p>☎️ +91 8076749334</p>
              <p>📨 kanu0311@gmail.com</p>
              <p>📍 Noida, India.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>Designed with 🧡 By Kanupriya Agarwal</p>
      </div>
    </>
  );
};

export default Footer;
