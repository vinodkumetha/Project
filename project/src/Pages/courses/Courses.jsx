import React from "react";
import "./Courses.css";


const courseNames = [
  {
    id: 1,
    title: "React JS",
    url: "",
  },
  {
    id: 2,
    title: "Angular",
    url: "",
  },
  {
    id: 3,
    title: "Python",
    url: "",
  },

  {
    id: 5,
    title: "Java",
    url: "",
  },

  {
    id: 7,
    title: ".Net",
    url: "",
  },
  {
    id: 8,
    title: "SQL Concepts",
    url: "",
  },
  {
    id: 9,
    title: "Data Science",
    url: "",
  },
  {
    id: 10,
    title: "API Testing",
    url: "",
  },
  {
    id: 11,
    title: "Manual Testing",
    url: "",
  },
  {
    id: 12,
    title: "Spring Boot",
    url: "",
  },
  {
    id: 13,
    title: "UI/UX",
    url: "",
  },
  {
    id: 14,
    title: "MERN Stack",
    url: "",
  },
  {
    id: 15,
    title: "MEAN Stack",
    url: "",
  },
  {
    id: 16,
    title: "Python flask",
    url: "",
  },
  {
    id: 17,
    title: "Deep Learning",
    url: "",
  },
  {
    id: 18,
    title: "Python Django",
    url: "",
  },
  {
    id: 19,
    title: "C#",
    url: "",
  },
  {
    id: 20,
    title: "JavaScript",
    url: "",
  },
  {
    id: 21,
    title: "Pega",
    url: "",
  },
  {
    id: 22,
    title: "PowerBI",
    url: "",
  },
];

const sortedCourseNames = courseNames.slice().sort((a, b) => a.title.localeCompare(b.title));

function Course() {
  return (
    <div className="container">
    <h2 className="courses-heading text-center">Providing <strong>Technologys</strong> </h2>

      <hr className="heading-underline" />
      <div className="row">
        {sortedCourseNames.map((course) => (
          <div
            key={course.id}
            className="col-sm-12 col-md-6 col-lg-3 button-container"
          >
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <a href={course.url} className="btn btn-primary course-button">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;