import React from "react";
import "./Coursepage.css"
import Course from "../courses/Courses";

const Data = [
  {
    id: 1,
    title: "React Js",
    imageSrc:
      "https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149236239.jpg?size=626&ext=jpg&ga=GA1.1.1478565589.1699087102&semt=sph",
    description:
      "Build professional work-like projects to master React, Node JS, MongoDB, Javascript, and more to land a top career as a full-stack developer with guaranteed .",
  },
  {
    id: 2,
    title: "Java",
    imageSrc:
      "https://img.freepik.com/free-vector/app-development-concept-with-programming-languages_23-2148688949.jpg?size=626&ext=jpg&ga=GA1.1.1478565589.1699087102&semt=sph",
    description:
      "Software development with this introduction to Java—one of the most in-demand programming languages ",
  },
  {
    id: 3,
    title: "Angular",
    imageSrc: "https://t4.ftcdn.net/jpg/00/73/01/33/240_F_73013357_eDyPWw1tmiYMuGQW4BW71FKEdQG8MF3r.jpg",
    description: "Learn Angular, a popular JavaScript framework for building web applications.",
  },
  {
    id: 4,
    title: "Deep Learning (DL)",
    imageSrc: "https://t4.ftcdn.net/jpg/06/26/95/19/240_F_626951963_1jKvDDqZm8lRZap457s8InAodoCMHHTf.jpg",
    description: "Explore the field of Deep Learning for machine learning and data analysis.",
  },
  {
    id: 5,
    title: "Machine Learning (ML)",
    imageSrc:"https://img.freepik.com/free-vector/digital-technology-face-artificial-intelligence_1017-21770.jpg?w=1380&t=st=1698473607~exp=1698474207~hmac=d95151f03434165a642b1f9432c9ccc19c7d7cfd2f9ac0a1fab6482c6849350a",
    description: "Master Machine Learning techniques and algorithms for data analysis and prediction.",
  },
  {
    id: 6,
    title: "Artificial Intelligence (AI)",
    imageSrc:"https://img.freepik.com/free-photo/ai-chip-artificial-intelligence-future-technology-innovation_53876-129780.jpg?size=626&ext=jpg&ga=GA1.1.1401409355.1698466385&semt=ais",
    description: "Delve into the world of Artificial Intelligence and its applications.",
  },
  {
    id: 7,
    title: "Python Django",
    imageSrc: "https://t4.ftcdn.net/jpg/05/05/41/39/240_F_505413960_r4BUfFKXvzMkSCrXUl0HnMK8Bszuq6y4.jpg",
    description: "Build web applications using Python and the Django framework.",
  },
  {
    id: 8,
    title: "POWERBI",
    imageSrc: "https://t4.ftcdn.net/jpg/04/30/02/85/240_F_430028586_6A1rHhcbqm01Nre8zmQ08nGgy36QU4yQ.jpg",
    description: "Learn to create interactive reports and dashboards using Microsoft Power BI.",
  },
  {
    id: 9,
    title: "Testing",
    imageSrc:"https://t3.ftcdn.net/jpg/01/96/03/94/240_F_196039475_6MbF6oSsJJIQdSkS5sBUl52JfvYVSeNP.jpg",
    description: "Explore software testing methodologies and best practices.",
  },
  {
    id: 10,
    title: ".NET",
    imageSrc: "https://t3.ftcdn.net/jpg/01/12/26/82/240_F_112268298_Db4jjszQ24ZGNJ3egpTzG2yYuZ5MttPx.jpg",
    description: "Develop applications with the .NET framework and C# programming language.",
  },
  {
    id: 11,
    title: "SQL",
    imageSrc: "https://t3.ftcdn.net/jpg/01/38/58/62/240_F_138586261_nYWe7WbUi9ouurv6tcl2WmpLaXV1xdea.jpg",
    description: "Master SQL for database management and querying.",
  },
  {
    id: 12,
    title: "UI",
    imageSrc: "https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg?size=626&ext=jpg&ga=GA1.1.1401409355.1698466385&semt=sph",
    description: "Design user interfaces and user experiences for web and mobile applications.",
  },
  // Add more service objects here
];


const Coursepage = () => {
  return (

    <>
<Course />
    
    <div className="container">
      <div className="row ">
        <h2 className="text-center">
          Our <strong style={{ color: "#1bbd36" }}>Accadamic Service </strong>Technologys
        </h2>
        <div className="row  card-container">
      
        {
          Data.map((d) => (
            <div key={d.id} className="col-sm-4 mt-5">
              <div className="card" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", border: "1px solid #ccc", borderRadius: "5px", background: "#f8f8f8" }}>
                <img
                  src={d.imageSrc}
                  width="100%" // Set the width to 100% to make it responsive
                  height="auto" // Let the height adjust automatically to maintain aspect ratio
                  alt={d.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <a href="/" className="text-dark text-decoration-none">
                      <h3 style={{ color: "#1bbd36" }}>{d.title}</h3>
                    </a>
                  </h5>
                  <p className="card-text">{d.description}</p>
                  <button className="btn btn-primary btn-sm">Check out</button>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>

    </>
  );
};

export default Coursepage;
