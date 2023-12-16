import React from 'react'
import img12 from './TtsupportImg/img_home_2.webp'
import img14 from './TtsupportImg/img_home_4.webp'
import "./ITsupport.css"
function ITsupport() {
  return (
    <div className=" d-flex justify-content-center flex-wrap" >
       
<div style={{width:"200vh"}}>
<div className="my-5 bdcolor shadow p-3 mb-5 bg-body rounded" >
  <div className="text-center d-flex justify-content-center flex-wrap">
    <div style={{marginLeft:"70px"}}>
    <img alt='' style={{width:"50vh"}} src={img12}/>
    </div>
    <div className="w-50 d-flex  justify-content-center align-items-center flex-column">
      <h1 style={{color:"#1bbd36"}} >24/7 Security and System Monitoring</h1>
      <p className="col-lg-8 mx-auto lead text-dark">
        <h4>
        Continuous vigilance for your network and data. Round-the-clock protection against threats. Real-time monitoring, rapid threat response, scalable for growth. Safeguard your assets with constant security and system oversight.
        </h4>

      </p>
    </div>
  </div>
</div>


<div className="my-5 bdcolor shadow p-3 mb-5 bg-body rounded">
  <div className=" text-center  d-flex justify-content-center flex-wrap">
    
    <div className="w-50 bdcolor d-flex  justify-content-center align-items-center flex-column">
      <h1 style={{color:"#1bbd36"}} >Your Fully Staffed IT Department</h1>
      
      <p className="col-lg-8 mx-auto lead text-dark">
        <h4>
        Empower your business with a dedicated team of skilled IT professionals. Unparalleled expertise at your fingertips, offering comprehensive solutions from troubleshooting to strategic planning. Enjoy top-tier support, cost-effectiveness, and innovation all in one package. Elevate your technology game with Your Fully Staffed IT Department.
        </h4>
      </p>
    </div>

    <div className='mr-5'>
    <img alt='' style={{width:"50vh"}} src={img14}/>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default ITsupport