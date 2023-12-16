import React from "react";
import "./Client.css"

const TeamMember = ({ name, role, imageSrc }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 border-0 shadow">
        <div className="image-container">
          <img
            className="card-img-top img-fluid team-member-image"
            src={imageSrc}
            alt={name}
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;