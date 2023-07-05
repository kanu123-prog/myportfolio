import React from "react";
import kappu from "../assets/images/kappu.jpg";
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto atque
          nostrum consequatur modi vel cum perspiciatis, amet consectetur odio
          accusantium repellat quia maxime reiciendis deserunt quod tempora fuga
          quidem dolorem mollitia ratione sequi earum temporibus debitis in.
          Quaerat, provident illo inventore aspernatur cupiditate pariatur, et
          harum aperiam, ad saepe totam delectus accusamus neque iure fugit
          dicta eligendi impedit distinctio dolores.
        </p>
        <a download="" href={resume} className="resume"><span>Download Resume <ArrowDownCircle/></span></a>
      </div>
    </section>
  );
}
