import React from "react";
import TeamMember from "./TeamMember";
import image1 from "./images/img1.jpeg";
import image2 from "./images/img2.jpeg";
import image3 from "./images/img3.jpeg";
import image4 from "./images/img4.jpeg";
import image5 from "./images/img5.jpeg";
import image6 from "./images/img6.jpeg";
import image7 from "./images/img7.jpeg";

import "./Client.css"; // Create a CSS file for additional styles

function ClientComponent() {
  return (
    <div className="container text-dark mt-4">
      <h3 className="text-center">
        OUR <strong style={{ color: "#1bbd64" }}>TEAM</strong>
      </h3>

      <div className="notes mt-3 ">
        <p className="text-dark">
          "Our team specializes in providing comprehensive solutions during
          on-site visits to your location. With over 4 years of hands-on
          experience, our dedicated real-time developers ensure 100% on-time
          delivery, surpassing deadlines and meeting cost expectations. We{" "}
          <strong>excel</strong> in providing doorstep service support, handling
          IT projects 24/7. From academic projects to core IT works, we
          guarantee optimal results. Our team is adept at managing tasks
          cost-effectively, with a commitment to <strong>excellence</strong>.
          Explore the best <strong>places</strong> during your visit to our
          location, including <u className="text-warning">Tadipatri</u>,{" "}
          <u className="text-warning">Anathapuram</u>,{" "}
          <u className="text-warning">Guntur</u>,{" "}
          <u className="text-warning">Nellore</u>,{" "}
          <u className="text-warning">Vijayawada</u>,{" "}
          <u className="text-warning">Pulivendula</u>, and{" "}
          <u className="text-warning">Kadapa</u>. It's great that you offer a
          wide range of expertise in different domains such as{" "}
          <u className="text-warning">Reactjs</u>,{" "}
          <u className="text-warning">Python Django</u>,{" "}
          <u className="text-warning">Java Full stack</u>,{" "}
          <u className="text-warning">.NET</u>,{" "}
          <u className="text-warning">Angular</u>,{" "}
          <u className="text-warning">testing</u>,{" "}
          <u className="text-warning">MySQL</u>,{" "}
          <u className="text-warning">SQL</u>,{" "}
          <u className="text-warning">ML</u>, <u className="text-warning">DL</u>
          , and <u className="text-warning">R</u>. Offering 24/7 support is also
          a valuable aspect for clients who may need assistance at any time."
        </p>
      </div>
      <div className="row mt-2" >
        <TeamMember
          name="Naveen"
          role="Java Developer & Marketing Head"
          imageSrc={image1}
        />
        <TeamMember
          name="Vindo Kumar K"
          role="Operation Head, Technical Subject Matter Expert"
          imageSrc={image2}
        />
        <TeamMember
          name="Sudheer"
          role="Operation Head & Technical Expert"
          imageSrc={image3}
        />

        <TeamMember
          name="Harika"
          role="Front-End Architecture"
          imageSrc={image4}
        />
        <TeamMember
          name="Mounica"
          role="Front-End Architecture"
          imageSrc={image5}
        />
        <TeamMember name="Harish k" role="Ui Developer" imageSrc={image6} />
        <TeamMember
          name="Prakash"
          role="Software Developer"
          imageSrc={image6}
        />
        <TeamMember
          name="Harish B"
          role="Front End Developer"
          imageSrc={image7}
        />
        <TeamMember
          name="Priya k"
          role="Front End Developer"
          imageSrc={image4}
        />
      </div>
    </div>
  );
}

export default ClientComponent;
