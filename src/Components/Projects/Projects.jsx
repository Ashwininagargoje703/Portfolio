import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { AiFillGithub } from "react-icons/ai";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiNodeDotJs, SiRedux, SiHeroku } from "react-icons/si";
// import { SiExpress, SiMaterialui } from 'react-icons/si/SiExpress';

import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  const projects = [
    {
      id: 1,
      project_name: "Meshoo Clone",
      image: "https://i.ibb.co/mcpKr1N/meeshoo.png",
      project_desc:
        "Meesho is a online Shopping & Reselling site in India - Buy & Sell best quality Fashion, Electronics, Home & Kitchen products at lowest prices.",
      features:
        "Merchant /User Login, Add a product section, Add to Cart feature",
      deploy_link: "https://meesho-clone-gold.vercel.app/",
      repo_link: "https://github.com/mangeshniras/meesho_fw_13.git",
      tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    },
    {
      id: 2,
      project_name: "TheBowlCompany Clone",
      image: "https://i.ibb.co/RpHJXfj/TheBowl.png",
      project_desc:
        "This is a clone if The Bowl Company Which is about Dishes offered by Swiggys new platform that offers food in a special Bowl.",
      features:
        "Custom API and Database, Add to Cart and Payment Page, User authentication with token,Sort products by name, colour, category, and price",

      deploy_link: "https://the-bowl-company.vercel.app/",
      repo_link: "https://github.com/MadhanM282/the-bowl-company",
      tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaNodeJs />],
    },

    {
      id: 6,
      project_name: "Urboni-Clone",
      image:
        "https://raw.githubusercontent.com/Ashwininagargoje703/Urbonic/master/uboric.png",
      project_desc: "An e-commerce website for users to buy and sell products.",
      features:
        "Product details | Add a product section | Add to Cart feature | Sort by price",
      deploy_link: "https://urbonic.vercel.app/",
      repo_link: "https://github.com/Ashwininagargoje703/Urbonic",
      tech_stack: [<FaJs />, <FaHtml5 />, <FaCss3 />],
    },

    {
      id: 5,
      project_name: "Hiring Farm",
      image:
        "https://i.ibb.co/XsGpDzw/Whats-App-Image-2023-10-26-at-1-56-40-PM.jpg",
      project_desc:
        "Hirning Farm is a comprehensive job platform catering toboth job seekers and employers, offering the ability to postand apply for positions.",
      features: "Create job Post, Save Jobs, Apply Jobs",
      deploy_link: "https://hiringfarm.online/",
      repo_link: "https://github.com/Ashwininagargoje703/Vampire-coders",
      tech_stack: [
        <FaJs />,
        <FaHtml5 />,
        <FaCss3 />,
        <FaNodeJs />,
        <FaReact />,
      ],
    },
    {
      id: 3,
      project_name: "Weather-App Google map",
      image: "https://i.ibb.co/txpKKTc/weather.png",
      project_desc:
        "A simple App which is used for Seven Day forcasting  weather and location.Also add tempterature and  wind Speed.",
      features:
        "This feature displays the current temperature, humidity, wind speed, and other relevant weather conditions for a users current location or a location of their choice.",
      deploy_link: "https://elegant-jones-1248a2.netlify.app/",
      repo_link: "https://github.com/Ashwininagargoje703/Weather.git",
      tech_stack: [
        // <SiRedux />,
        // <SiMaterialui />,
        // <SiMongodb />,
        // <SiExpress />,
        // <AiFillGithub />,
        <FaNodeJs />,
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
      ],
    },
    {
      id: 4,
      project_name: "McDonald-App",
      image: "https://i.ibb.co/sRVqwqW/mc-donald.png",
      project_desc:
        "A food app here you can search and add foods this page build using html css advace js",
      features:
        "The McDonalds app allows users to place their orders, this is web design page ",
      deploy_link: "https://epic-poitras-86ac89.netlify.app/",
      repo_link: "https://github.com/Ashwininagargoje703/MCdonals.git",
      tech_stack: [
        // <FaNodeJs />,
        // <SiMongodb />,
        <FaJs />,
        <SiHeroku />,
        <FaHtml5 />,
        <FaCss3 />,
      ],
    },
  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={uuidv4()}>
              <ServiceBox>
                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                <div style={{ margin: "25px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  <strong>Features</strong>
                  <ServiceBoxP>{item.features}</ServiceBoxP>
                  {/* <a href="">Read more</a> */}
                  <div
                    style={{
                      margin: "20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div key={uuidv4()} className="iconsTechStack">
                        {item}
                      </div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> Demo
                  </A>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
