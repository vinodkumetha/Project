import React from "react";
import "./Domains.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const domainItems = [
  {
    key: 1,
    img: "https://img.freepik.com/free-photo/growth-bar-graph-arrow-marketing-online-shopping-icon-sign-symbol-ecommerce-concept-blue-background-3d-illustration_56104-1787.jpg",
    title: "System Analysis and Structuring",
    desc: "We determine the project requirements proposed by IEEE papers. Afterwards, we calculate the limitations of the existing systems. Further, research the proposed system that is required for project development.",
  },
  {
    key: 2,
    img: "https://img.freepik.com/free-vector/data-analysis-isometric-infographics-layout_1284-25277.jpg?size=626&ext=jpg&ga=GA1.1.2064017703.1699422426&semt=ais",
    title: "Software/Hardware Analysis",
    desc: "In this case, we analyze the programming nature to be built and finalize the hardware and software requirements. Test cases and system-level requirements are finalized. In the final, the list is submitted for review purposes.",
  },
  {
    key: 3,
    img: "https://img.freepik.com/free-vector/creative-web-homepage-illustration_52683-79847.jpg?size=626&ext=jpg&ga=GA1.1.2064017703.1699422426&semt=ais",
    title: "Software Projects",
    desc: "The flowchart of the software design that is implemented has been created. It determines the specifics of the software to be written with an object model, C/S technology needed for the architecture, and database design.",
  },
  {
    key: 4,
    img: "https://img.freepik.com/free-vector/programmers-during-coding-debugging-maintenance-software-testing-isometric-flowchart-blue_1284-29043.jpg?size=626&ext=jpg&ga=GA1.1.2064017703.1699422426&semt=ais",
    title: "Code Generation",
    desc: "The design has been translated into machine language. The growth phase includes the coding of an application. Some programming tools such as compilers and interpreters are useful to write programming languages like C, C++, PHP, and Java. These programming languages help to write the codings.",
  },
  {
    key: 5,
    img: "https://img.freepik.com/free-vector/semiconductor-isometric-illustration-imitated-printed-circuit-board-with-different-electronic-components-electric-scheme_1284-33001.jpg?size=626&ext=jpg&ga=GA1.1.2064017703.1699422426&semt=ais",
    title: "Electronics Projects",
    desc: "At ElysiumPro, we handle students via fabrication, PCB design, and controllers using the compilers to develop the final year projects. We hold years of experience and essential expertise in providing global support to students for their academic Final Year Projects.",
  },
  {
    key: 6,
    img: "https://img.freepik.com/free-vector/logistics-with-online-delivery-service-3d-isometric-illustration_1284-28124.jpg?size=626&ext=jpg&ga=GA1.1.2064017703.1699422426&semt=ais",
    title: "Testing & Delivery",
    desc: "Afterwards, code generation, the testing process begins. There are many ways to find errors in coding. For this purpose, there are many tools available. The project will be ready for delivery to the students after testing. Our final year projects are tested from request to delivery",
  },
];

function Domains() {
  const domainCard = domainItems.map((eachItem) => {
    return (
      <div className="col-md-4 mb-4 p-2">
        <div
          className="card"
          style={{
            border: "none",
            borderRight: "gray solid 1px",
            backgroundColor: "whitesmoke",
          }}
        >
          <div className="d-flex flex-row">
            <img
              src={eachItem.img}
              alt={eachItem.title}
              className="domain-images"
            />
            <div className="card-desc">
              <h6 className="card-heading">{eachItem.title}</h6>
              <p className="card-paragraph">{eachItem.desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="domain-page-container">
      <div className="rocket-container">
        <FontAwesomeIcon icon={faRocket} className="rocket-icon" />
        <h2>27+ Domains</h2>
        <p className="spl-dom">Specialized Domains</p>
      </div>
      <div className="container card-background">
        <hr className="heading-underline" />
        <div className="row domain-container">{domainCard}</div>
      </div>
    </div>
  );
}

export default Domains;
