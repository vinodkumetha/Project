import React from "react";
import "./Pricing.css";
import PricingSingle from "./TechnologySingle.js";

const pricingArr = [
  "ACADEMIC PROJECT",
  "REACTJS/ANGULAR",
  "PYTHON DJANGO",
  "MERN",
  "JAVA",
  "TESTING",
  ".NET",
  "ML DL R",
  "UI",
  "PEGA",
];

const Pricing = () => {
  return (
    <div className="container text-center mt-5">
    <p className="lead shadow fw-bold  p-3 mb-5 bg-white rounded border border-primary animated fadeIn">
    Implement various academic projects related to web technologies and services using the technologies you've mentioned, including <strong>Python with Django</strong>, <strong>Java</strong>, <strong>React</strong>, <strong>Angular</strong>, <strong>.NET</strong>, <strong>R</strong>, <strong>Machine Learning (ML)</strong>, <strong>Deep Learning (DL)</strong>, <strong>Data Science (DS)</strong>, and <strong>User Interface (UI)</strong> development. Here are some project ideas:
  </p>
  
      <h3 className="mb-4">
        Academic{" "}
        <a href="#" className="text-success">
          <strong>projects</strong>
        </a>
      </h3>
      <div className="row mt-5">
        {pricingArr.map((item, index) => (
          <PricingSingle key={index} item={item} index={index} />
        ))}
      </div>
    </div>   
  );
  
};

export default Pricing;
