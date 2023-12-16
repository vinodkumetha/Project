import React from "react";
import "./Accadamicmca.css";

const processData = [
  {
    serialNumber: "01",
    title: "ON BOARDING",
    description: "A simple form to fill in and get into the success path",
  },
  {
    serialNumber: "02",
    title: "ASSESSMENTS",
    description: "With our orientation tools we assess the student and set the path",
  },
  {
    serialNumber: "03",
    title: "PLAN",
    description: "Details orientation plan on how the student is going to take the sessions",
  },
  {
    serialNumber: "04",
    title: "EXECUTION",
    description: "With real-time projects, students will be executing the work they are learning",
  },
  {
    serialNumber: "05",
    title: "SUCCESSFUL",
    description: "Plan execution will be successful students at the end of their course plan",
  },
  {
    serialNumber: "06",
    title: "CERTIFICATION",
    description: "Interested students will go through the certification programs to build the solid path",
  },
];

const Accadamicmca = () => {
  return (
    <div className="container">
      <h1 className="heading text-dark">OUR <strong className="">PROCESS</strong></h1>
      <div className="row">
        {processData.map((process, index) => (
          <div key={index} className="col-lg-4 mb-3">
            <div className="p-3 border shadow">
              <h1 className="serialNumber">{process.serialNumber}</h1>
              <h5 className="card-title">{process.title}</h5>
              <p className="card-text">{process.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Accadamicmca;
