import './Accordion.css'

const AccordionComponent = () => {
  return (
    <div className="container mt-5">
    <h2 className='heading'><strong style={{color:"#1bbd64"}}>FREQUENTLY</strong> ASKED QUESTIONS</h2><hr/>
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What do we bring to the table?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p className='text-dark'>
              
              We have a team of experienced mentors who can provide guidance and support to students throughout the project.
              Take our hand, and together we can reach so much further.
            </p>
          </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Project Reviews and Customization
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className='text-dark'>
              We offer project reviews to help students ensure that their projects are meeting the requirements of their academic institutions and customize projects to fit your institution's requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Affordable and Convenient
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className='text-dark'>
              At AKTech Solutions, we believe that quality Project work should be affordable for everyone. We offer a variety of services at very competitive prices.
If you are looking for a budget-friendly solution for all your project work needs at your own convenience. Whether you need help with your research or just want someone to do the project for you, we can help in providing the best assignment help services.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Project satisfaction
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse "
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className='text-dark'>
              We offer a satisfaction guarantee, so students can be sure that they are getting the best possible service on time. Thereby you can be assured of your submission.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Flexible payment options
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className='text-dark'>
              offers various payment options for students to easily purchase their services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
