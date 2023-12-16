import './support.css'
import video from './support.mp4'
import ReactPlayer from 'react-player'

const Support = () => (
    <div className='bg-container'>
        <div className='super-card-container'>
            <div className='card-container'>
                <h2>Aktech are an award-winning business IT support company.</h2>
                <p>Our Managed IT support provides fast and efficient technical support for your business platforms to increase productivity while reducing costs.</p>
                <h4>Our customers can benefit from support that includes:</h4>
                <ul>
                    <li>Rapid response times</li>
                    <li>24/7/365 IT Support</li>
                    <li>Conducted Zoom Meeting</li>
                    
                </ul>
                <button tpe="button" className='who-button'   >
                    <a href='https://akweb-3n4f.onrender.com/about' target ="_blank">WHO WE ARE //</a></button>
            </div>
            <ReactPlayer url={video} controls  height={"350px"} width={"450px"} playing={false} loop={true}  borderRadius={"12px"}/>
        </div>
    </div>
)

export default Support