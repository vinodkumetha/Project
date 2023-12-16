import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { originalList } from "./ProjectsList";

export const CoursesDisplay = () => {
  const [details, setDetails] = useState({
    category: "",
    description: "",
  });

  return (
    <div className="container-fluid row bg-dark-subtle text-black p-4">
      <h2 className="text-center text-dark">Project Titles</h2>
      <hr />
      <div className="col-7">
        <ul className="list-group">
          {originalList.map((course) => (
            <li
              key={course.name}
              
              className="list-group-item list-group-item-action"
            >
              {course.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="col-5">{/* Empty div for spacing */}</div>
    </div>
  );
};
