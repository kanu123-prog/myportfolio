import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import secrets from "../assets/images/secret_site.png";
import blogs from "../assets/images/blog_site.png";
import kpfoods from "../assets/images/food_site.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Stay Anonymous",
      description: "you can share all your secrets on this site anonymously",
      imgUrl: secrets,
      github: "https://github.com/kanu123-prog/secrets-googleOauth"
    },
    {
      title: "kpFoods",
      description: "A food-ordering website, made using MERN stack",
      imgUrl: kpfoods,
      github: "https://github.com/kanu123-prog/kpFoods"
    },
    {
      title: "Blog Website",
      description: "a website where you can compose and publish all your day to day blogs",
      imgUrl: blogs,
      github: "https://github.com/kanu123-prog/my-blog"
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to my portfolio's projects section! I specialize in using the MERN stack and libraries like Bootstrap and Tailwind CSS to create dynamic and responsive web applications. Explore my diverse range of projects, showcasing scalable, performant, and user-friendly solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}