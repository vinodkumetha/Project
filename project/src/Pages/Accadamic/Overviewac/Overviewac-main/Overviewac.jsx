import React from 'react';
import VideoFile from './Overviewacademic.mp4';
import './Overviewacademic.css'

import accadamicPNG from "./images/accadmic.png"

const Overviewac =()=> {

  const projectContent = `
    <strong>Introduction:</strong>
    <ul>
      <li>Introduce the background and context of the project.</li>
      <li>Clearly state the problem or challenge your project aims to address.</li>
      <li>Outline the goals and objectives of the project.</li>
    </ul>
    
    <strong>Literature Review:</strong>
    <ul>
      <li>Review relevant literature and previous work related to your project.</li>
      <li>Highlight gaps in existing research that your project addresses.</li>
      <li>Provide a rationale for your project based on the literature.</li>
    </ul>
    
    <strong>Methodology:</strong>
    <ul>
      <li>Describe the research or development methodology employed.</li>
      <li>Specify the tools, technologies, and frameworks used in the project.</li>
      <li>Explain the process of data collection or system design.</li>
    </ul>
    
    <strong>System Design (if applicable):</strong>
    <ul>
      <li>Provide an overview of the system architecture.</li>
      <li>Include UML diagrams, such as class diagrams, sequence diagrams, and use case diagrams, to illustrate the system structure and behavior.</li>
    </ul>
    
    <strong>Implementation:</strong>
    <ul>
      <li>Detail the steps taken to implement the project.</li>
      <li>Include code snippets, algorithms, or pseudocode if applicable.</li>
      <li>Discuss any challenges faced during implementation and how they were addressed.</li>
    </ul>
    
    <strong>Results and Evaluation:</strong>
    <ul>
      <li>Present the results of your project, including any data analysis or system performance metrics.</li>
      <li>Discuss the significance of your findings or the success of your system.</li>
      <li>If applicable, compare your results to existing literature or benchmarks.</li>
    </ul>
  `;
  const discussionContent = `
  <strong>Discussion:</strong>
  <ul>
    <li>Interpret the results and relate them to your project objectives.</li>
    <li>Discuss the implications of your findings and any limitations of your study.</li>
    <li>Suggest areas for future research or improvements to the project.</li>
  </ul>
`;

const conclusionContent = `
  <strong>Conclusion:</strong>
  <ul>
    <li>Summarize the key findings and contributions of your project.</li>
    <li>Restate the importance of your work and its potential impact.</li>
  </ul>
`;

const referencesContent = `
  <strong>References:</strong>
  <p>Cite all the sources, literature, and tools referenced in your documentation.</p>
`;

const acknowledgmentsContent = `
  <strong>Acknowledgments (if applicable):</strong>
  <p>Thank anyone who contributed to the project, including advisors, collaborators, or funding sources.</p>
`;

const appendicesContent = `
  <strong>Appendices (if applicable):</strong>
  <p>Include additional materials, such as detailed code, extra data, or supplementary information.</p>
`;
const goalsContent = `
    <strong>Goals:</strong>
    <ol>
      <li><strong>Comprehensive Academic Management:</strong> <p>Develop a system that efficiently manages academic information, including student records, courses, and faculty details.</p></li>
      <li><strong>Dynamic Content Delivery:</strong></li>
      <p>Implement a dynamic content delivery system to enhance the learning experience. Explore interactive multimedia content, quizzes, and real-world case studies to make the platform engaging.</p>
      <li><strong>User-Friendly Interface:</strong> <p>Design an intuitive and user-friendly interface for both students and faculty members. Prioritize accessibility and responsiveness for a seamless experience across devices.</p></li>
      <li><strong>Collaboration and Communication:</strong> <p>Integrate communication tools to facilitate collaboration between students and faculty. Explore discussion forums, messaging systems, and collaborative project spaces.</p></li>
      <li><strong>Performance Analytics:</strong> <p>Implement performance analytics to track student progress and provide valuable insights for educators. Develop dashboards for both students and faculty to monitor academic performance.</p></li>
    </ol>
  `;

  return (
    <>
      <div className='container'>
        <h1 className='text-center' >academic <strong style={{color: '#1bbd36'}}>Project</strong></h1>
        <div className='row'>
        <div className='col-sm6' style={{ display: 'flex' }}>
        <img
        src={accadamicPNG}
        alt='Academic Projects for Students'
        style={{ width: '50%', marginRight: '70px' }}
      />
      <video style={{ width: '50%' }} autoPlay controls>
        <source src={VideoFile} type="video/mp4" />
      </video>
        </div>
        </div>     
        </div>
      <h2 className='text-black-100' style={{color: '#1bbd36'}}>Project overview: Academic MCA Platform</h2>
      <div dangerouslySetInnerHTML={{ __html: goalsContent }}></div>
      <h2 className='text-black-100' style={{color: '#1bbd36'}}>Project Title: [Your Project Title]</h2>
      <div className='col' style={{ display: 'flex', width: '100%' }}>
      <div style={{ flex: '1' }}>
        <p dangerouslySetInnerHTML={{ __html: projectContent }}></p>
      </div>
      <div style={{ flex: '1', marginRight: '20px' }}>
        <img
          src='https://img.freepik.com/free-photo/plan-project-architecture-blueprint-drawing-concept_53876-13746.jpg?size=626&ext=jpg&ga=GA1.1.1401409355.1698466385&semt=ais'
          alt=''
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
        <div dangerouslySetInnerHTML={{ __html: discussionContent }}></div>
        <div dangerouslySetInnerHTML={{ __html: conclusionContent }}></div>
        <div dangerouslySetInnerHTML={{ __html: referencesContent }}></div>
        <div dangerouslySetInnerHTML={{ __html: acknowledgmentsContent }}></div>
        <div dangerouslySetInnerHTML={{ __html: appendicesContent }}></div>
    </>
  );
}
export default Overviewac;

