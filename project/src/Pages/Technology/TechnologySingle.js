import React from "react";



const TechnologySingle = ({ item, index }) => {
  return (
    <div className="col-sm-4 fw-bold  mt-5">
      <div className="card">
        <div
          className={
            index === 2
              ? "pricingheader fw-bold greenbg"
              : "pricingheader fw-bold"
          }
        >
          {item}
        </div>
        <div className="p-4 mt-5">
          <h3 className="grey">
            <span className="green">
              {/* Add your course details title here */}
              OUR SERVICES
            </span>
            <span className="month grey"></span>
          </h3>
          <ul className="my-3 mt-5">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              WEB APPLICATION
              <span className="badge bg-primary rounded-pill">New</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              PYTHON DJANGO
              <span className="badge bg-success rounded-pill">Popular</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              JAVA FULL STACK
              <span className="badge bg-warning rounded-pill">Trending</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              MERN STACK - Reactjs
              <span className="badge bg-info rounded-pill">Featured</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              MERN STACK - Angular
              <span className="badge bg-info rounded-pill">Featured</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Testing
              <span className="badge bg-secondary rounded-pill">Other</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              SQL, MYSQL
              <span className="badge bg-dark rounded-pill">Legacy</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              ML-DL-R
              <span className="badge bg-danger rounded-pill">Hot</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              .NET / POWER BI
              <span className="badge bg-success rounded-pill">Mid Level</span>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-center">
            UI
            <span className="badge bg-success rounded-pill">Popular</span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
          PEGA
          <span className="badge bg-success rounded-pill">Advanced</span>
</li>
          </ul>



        </div>
        <div className="pricingheader">
          <button className="btn btn-dark btn-pillow shadow fw-bold">Book Now</button>
        </div>
        {index === 3 ? (
          <div className="advance greenbg fw-bold">Advance</div>
        ) : null}
      </div>
    
  
      </div>


  );
};

export default TechnologySingle;
