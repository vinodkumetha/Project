import Carousel from "../../components/Carsoler/Carsoler";
import React from "react";
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typewriter } from 'react-simple-typewriter';
import Admininfo from "./Admininfo/Admininfo";
import '../Home/Home.css'
import Video from '../Home/accadamic.mp4'
import { Link } from 'react-router-dom';

const Home = () => {

  const handleType = (count) => {
    // access word count number
    console.log(count);
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className="container-fluid mt-5 bg-light p-5">

    <Carousel/>

      <h6 className="text-center text-dark">
        Take the next step in your academic project. We provide comprehensive solutions for academic projects, offering support both online and offline 24/7. Your ideas are our priority, and we ensure on-time delivery, detailed reports, and seamless submission of your tasks and project code.
      </h6>

      <div className="text-center mt-3"> 
        <Link to={"./contact"}><button className="btn btn-dark mx-2">Get in Touch</button></Link>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12 col-md-6">
          <div className="card shadow border-primary mb-3">
            <div className="card-body">
              {/* Render a YouTube video player */}
              <ReactPlayer
                url={Video}
                width='100%'
                height='400px'
                playing
                controls
                loop
                muted
                config={{ youtube: { playerVars: { autoplay: 1 } } }}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 pt-5 g-2">{/* Here added pt-5 g-2 */}
          <div className="card Home-card shadow border-primary mb-3 text-dark text-center p-3">
            <h4 className="card-header">Our <strong style={{ color: "#1bbd36" }}>Services</strong></h4>
            <div className="card-body">
              <h5 className="card-title">
              {/* Here added strong tag*/}
              <strong style={{ color: "#1bbd36" }}>We provide</strong>
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                  <Typewriter
                    words={[' Best', ' Solution', ' To', ' Your!', ' Ideas']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                  />
                </span>
              </h5>
              <p className="card-text text-dark">
                {/* Add your service description here */}
                <h4> Project Support | On-Job Support :</h4>
                <p className="mb-0 text-dark">We offer Project Support and On-Job Support services for IT professionals, providing both offline and online assistance in various technologies. If you encounter any challenges or require expert guidance to successfully complete your project, ak Softwares is the ideal choice for you. Our experienced trainers will connect with you in real-time to address your complex project requirements.</p>
                {/* Add more paragraphs as needed */}
              </p>
            </div>
          </div>
        </div>
      </div>      
      <Admininfo />
    </div>
  );
};

export default Home;
