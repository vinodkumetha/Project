import React from "react";
import "./Service.css";
import Features from '../Features';
import Designservices from "../Designservices";

const Data = [
  {
    id: 1,
    title: "App Development",
    imageSrc:
      "https://cdn-icons-png.flaticon.com/128/1055/1055329.png?track=ais",
    description:
      " Build a secure, future-proof application through the latest technologies and enhance your user experience.",
  },
  {
    id: 2,
    title: "Technology Consulting",
    imageSrc:
      "https://cdn-icons-png.flaticon.com/128/702/702814.png?track=ais",
    description:
      "Explore new opportunities, get insights and overcome your barriers by consulting with our experts. ",
  },{
    id: 3,
    title: "Research and Development",
    imageSrc:
      "https://cdn-icons-png.flaticon.com/128/3757/3757176.png?track=ais",
    description:
      "Analyze, solve complex challenges and develop solutions that create a revolution. ",
  },{
    id: 4,
    title: "UI/UX Design",
    imageSrc:
      "https://cdn-icons-png.flaticon.com/128/1260/1260111.png?track=ais",
    description:
      "We are experts in providing efficient UI and UX design that ensures a smooth user journey and plays a significant part in increasing customer engagement and retention.",
  },
  {
    id: 5,
    title: "Mobile App Development",
    imageSrc:
      "https://cdn-icons-png.flaticon.com/128/3254/3254935.png?track=ais",
    description:
      "  Our expert developers assist you at every stage from planning to deployment, which is a comprehensive process.",
  },{
    id: 6,
    title: "Cross Platform Development",
    imageSrc:
      "https://cdn-icons-png.flaticon.com/128/7414/7414609.png?track=ais",
    description:
      " Developing quality apps is the paramount goal the AK tech solution team has. We are a team of strategists, designers, and developers committed to creating memorable Cross-Platform Apps. ",
  },{
    id: 7,
    title: "AI/ML",
    imageSrc:
      "https://cdn-icons-png.flaticon.com/128/1693/1693746.png",
    description:
      "Custom AI-based solutions like machine and deep learning will help you automate any operation.",
  },{
    id: 8,
    title: "Mobile Application Testing",
    imageSrc:
      "https://cdn-icons-png.flaticon.com/128/8602/8602167.png",
    description:
      "  With the number of mobile devices surpassing the number of human beings on earth, the key to keeping today's digital consumers happy is by making your application mobile-ready.",
  },{
    id: 9,
    title: "Digital Marketing Services",
    imageSrc:
      "https://cdn-icons-png.flaticon.com/128/12567/12567670.png",
    description:
      "   We provide a dynamic, versatile, and full-service digital marketing agency that doesn't rely on smoke and mirrors to attract new clients.",
  },

];
export default function ServiceTest() {
  return (
    <> 
       <Designservices />  
      <div>
      <div className="container">
      <div className="row ">
        <h2 className="text-center">
          Our <strong style={{ color: "#1bbd36" }}> Service </strong>
        </h2>
        <div className="row  card-container">
      
        {
          Data.map((d) => (
            <div key={d.id} className="col-sm-4 mt-5">
              <div className="our-card">
                <img
                  src={d.imageSrc}  
                  alt={d.title}
                  className="card-img"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <a href="/"  className="title">
                      <h3 className="title" style={{ color: "#0d1129", fontSize: 22, fontWeight:"bold"}} >{d.title}</h3>
                    </a>
                  </h5>
                  <p className="card-text" >{d.description}</p>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
      </div>
      <Features/>
      <Designservices />
    </>
  );
}
