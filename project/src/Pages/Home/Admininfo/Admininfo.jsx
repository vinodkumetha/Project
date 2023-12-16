import React from "react";
import Cards from "./Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./Images/img1.jpeg";
import img0 from "./Images/img0.jpg";
import img3 from "./Images/img3.jpeg";
import img5 from "./Images/img5.jpeg";



const Admininfo = () => {
  const adminDetails = [
    {
      "id": 1,
      "name": "Adi",
      "description": "Adi, Director at AK & Technical Expert.",
      "imgUrl": img1,
    },
    {
      "id": 2,
      "name": "Khalandar",
      "description": "Khalandar, Director at AK & Writer Expert as a subject",
      "imgUrl": img0,  },
    // ... (rest of the data)
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
  };

  return (
    <>
      <ul className="d-flex justify-content-around " style={{ flexWrap: "wrap", listStyleType: "none" }}>
        <Slider {...settings} className="slider">
          {adminDetails.map((each) => (
            <li key={each.id} className="p-3">
              <Cards Image={each.imgUrl} description={each.description} name={each.name} />
            </li>
          ))}
        </Slider>
      </ul>
    </>
  );
};

export default Admininfo;
