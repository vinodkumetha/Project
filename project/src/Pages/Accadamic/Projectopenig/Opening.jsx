import { BsCheckLg } from "react-icons/bs"

import './Opening.css'

const Opening = () => (
     <div className='main-opening-container'>
      <div className="opening-container">
            <h1 className='open-heading'> Opening Hours</h1>
            <p className='open-description'>AKtech - Final Year Project Guideline Center Opening Hours</p>
            <ul className='list-time'>
                <li className='list-item'>
                    <p className='day'> Monday-Friday</p>
                    <h1 className='time'>8am - 8pm</h1>
                </li>
                <li className='list-item'>
                    <p className='day'> Saturday</p>
                    <h1 className='time'>8am - 7pm</h1>
                </li>
                <li className='list-item'>
                    <p className='day'>Sunday</p>
                    <h1 className='time'>8am - 3pm</h1>
                </li>
            </ul>
        </div> 
        <section>
        <ul className='academic-container'>
            <h1 className='heading-faatures'>Additionl Features In Academic Project</h1>
            <li className='list-item-academic'>
              <BsCheckLg fontSize={"22px"}  />
                <p className='item-item'>This is the 1st item</p>
            </li>
            <li className='list-item-academic'>
              <BsCheckLg fontSize={"22px"}/>
                <p className='item-item'>This is the 2nd item</p>
            </li>
            <li className='list-item-academic'>
              <BsCheckLg fontSize={"22px"}/>
                <p className='item-item'>Review Materials</p>
            </li>
            <li className='list-item-academic'>
              <BsCheckLg fontSize={"22px"}/>
                <p className='item-item'>Project Completion Certificate</p>
            </li>
            <li className='list-item-academic'>
              <BsCheckLg fontSize={"22px"}/>
                <p className='item-item'>Course Completion Certificate</p>
            </li>
            <li className='list-item-academic'>
              <BsCheckLg fontSize={"22px"}/>
                <p className='item-item'>Inplant Training</p>
            </li>
            <li className='list-item-academic'>
              <BsCheckLg fontSize={"22px"}/>
                <p className='item-item'>On Time Delivery</p>
            </li>
            <li className='list-item-academic'>
              <BsCheckLg fontSize={"22px"}/>
                <p className='item-item'>Online Support Portal</p>
            </li>
            <li className='list-item-academic'>
              <BsCheckLg fontSize={"22px"}/>
                <p className='item-item'>Online Training Sessions</p>
            </li>
        </ul>
        </section> 
    </div>
)

export default Opening