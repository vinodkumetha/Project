import React from 'react'
import "./HelpService.css"

import img1 from "./HelpSericeImages/QM.png"
function HelpServices() {
  return (
    <>
    <div className='font Helpcontainer'>
        
        <div className='helpcontainer2'>
        <article>
        <h2><span>Are You Looking for the Trusted and</span> the Best Online Assignment Help Services?</h2>
       <br/>
       <br/>
        <h3 className='colorGreen'>Get High-Quality Paper Assistance on a Budget Right Here!</h3>
        <p>If you have been banging your head over how to write an MBA thesis, then you are probably at the right place. Wouldn't it be great if someone could just write it for you when it is already time? To make all your project work done in time, we are just a few clicks away. We offer sample essays, papers, reviews, thesis, articles, case studies, and other academic assignments. Editing and proofreading are also part of our extensive array of academic solutions. You can complete the order form in minutes!</p>
        <p>We will guide you through the process of completing your project work with considerable ease. Our Project work experts are qualified and have all the knowledge required to complete your work on time and make it grade A.</p>
        <h3 className='colorGreen'>Why do students come to us for last-minute assignment help?</h3>
        <p>Students across the globe face difficulties in completing their valuable assignments. In order to provide professional assistance to these students, We have developed their highly valuable Academic Project Bangalore 's Writing Service India in order to guide as many students as possible who are having difficulty completing their assignments. Often, students who have taken crucial courses at renowned universities are asked to prepare assignments on Academic Project Bangalore.</p>
        <p>Here, you have the freedom to select an assignment specialist from ‘my assignment help services’ that meets your price and quality standards. We have over 2000 PhD professionals on hand to help with tasks.</p>
        <h3 className='colorGreen' >The Purpose</h3>
        <p>The purpose of our assignments is to improve students' skills, help them acquire the correct conceptual knowledge, enhance their critical thinking, improve their time management skills, and also to help them develop their problem-solving abilities. Academic Project Bangalore offers Project Writing Service India at the cheapest prices in the industry in order to help these students perform to their fullest potential.</p>
        </article>
        </div>

        
        </div>
        <div className='Helpcontainer gap margin'>
        {/* <img className='imgHelpService' src='https://www.academicprojectsbangalore.com/pic/why.jpg'/>    */}
        <img className='imgHelpService' src={img1}/>
        <div className=''>
        <h2>Why Us?</h2>
        <ol><li className='colorGreen'>Customized writing strategy</li>
						<li className='colorGreen'>Plagiarism free work</li>
						<li className='colorGreen'>On-time delivery</li>
						<li className='colorGreen'>Certified writers </li>
						<li className='colorGreen'>Safe Payment processing</li>
						<li className='colorGreen'>Money-back guarantee</li>
						<li className='colorGreen'>24/7 Student's Service</li>
						</ol>
            </div>
       </div>
       </>
  )
}

export default HelpServices