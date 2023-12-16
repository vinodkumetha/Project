import React, { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import './Contact.css';
import ClientComponent from '../Clientcomponent/Clientcomponent';



const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isTrue, setIsTrue] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendMessage = () => {
    if (name !== '' && email !== '' && subject !== '' && message !== '') {
      setErrorMessage('Send Message');
      setIsTrue(false);
    } else if (name === '' || email === '' || subject === '' || message === '') {
      setErrorMessage('Name, Email, Subject, or Message is invalid');
      setIsTrue(true);
    } else {
      setErrorMessage('Message is invalid');
      setIsTrue(true);
    }
  };

  return (
    <div className="contact-container container-fluid text-dark">
      <ClientComponent />

      <div className="localtion-container p-3 shadow-sm rounded">
        <h3 className="text-center">
          <strong style={{ color: '#1bbd64' }}>Get in </strong> Contact <strong style={{ color: '#1bbd64' }}> with us</strong>
        </h3>

        <iframe
          className="localtion-container"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3854.8120026561137!2d77.98176897511296!3d14.947563685580896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDU2JzUxLjIiTiA3N8KwNTknMDMuNiJF!5e0!3m2!1sen!2sin!4v1699752988003!5m2!1sen!2sin"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title='Contact'
        />
      </div>

      <div className="container-fluid row text-dark">
        <div className="col-sm-4 mb-3 text-dark">
          <div className="card text-dark">
            <div className="card-body text-dark">
              <div className="contact-sub-container">
                <IoLocationOutline />
              </div>
              <div>
                <h5 className="card-title">Location:</h5>
                <p className="card-text">Kadapa, Nellore, Guntur, Vijayawada, Bhadurapalli, Hyderabad</p>
                <p className="card-text">Tadipatri, Anantapuram, Pulivendula</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="contact-sub-container">
                <GoMail />
              </div>
              <div>
                <h5 className="card-title">Email:</h5>
                <p className="card-text">academic.info@gmail.com</p>
                <p className="card-text">academic.info2023.khalandar@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <div className="contact-sub-container">
                <BsPhone />
              </div>
              <div>
                <h5 className="card-title">Cell:</h5>
                <p className="card-text">8341553216</p>
                <p className="card-text">9182888482</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="button-container p-3 shadow-sm rounded">
        <div className="row mb-3">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              onChange={(e) => {
                setName(e.target.value);
                setIsTrue(false);
                setErrorMessage('');
              }}
              value={name}
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
                setIsTrue(false);
                setErrorMessage('');
              }}
              value={email}
            />
          </div>
        </div>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Subject"
          onChange={(e) => {
            setSubject(e.target.value);
            setIsTrue(false);
            setErrorMessage('');
          }}
          value={subject}
        />

        <textarea
          rows="7"
          className="form-control mb-3"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>

        <button
          className={isTrue ? 'btn btn-danger' : 'btn btn-success button'}
          onClick={sendMessage}
        >
          Send Message
        </button>

        <p className="mt-3">{errorMessage}</p>
      </div>
    </div>
  );
};

export default Contact;
