import React from 'react'
import Carousel from 'better-react-carousel'
import Img1 from '../Carsoler/Carouselimages/meetingimage1.webp'
import Img2 from '../Carsoler/Carouselimages/meetingimage2.webp'
import Img3 from '../Carsoler/Carouselimages/meetingimage3.webp'
import Img4 from '../Carsoler/Carouselimages/meetingimage4.webp'
import Img5 from '../Carsoler/Carouselimages/meetingimage5.webp'

const Carsoler = () => {
  return (
    <Carousel  cols={1}
    rows={1}
    loop
    style={{ maxWidth: '800px', margin: '0 auto' }}  >
      <Carousel.Item>
      <img width="100%" height="400px"  alt=''  src={Img1} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="400px"  alt=''  src={Img2} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="400px"  alt=''  src={Img3} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="400px"  alt=''  src={Img4} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="400px"  alt=''  src={Img5} />
      </Carousel.Item>
  {/* 
    <Carousel.Item>
        <img width="100%" height="400px"    src="https://img.freepik.com/premium-photo/business-team-manager-meeting_183219-11.jpg?size=626&ext=jpg&ga=GA1.1.1478565589.1699087102&semt=sph" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height="400px"    src="https://img.freepik.com/free-photo/seminar-designers_1098-13659.jpg?size=626&ext=jpg&ga=GA1.1.1478565589.1699087102&semt=ais" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height="400px"    src="https://img.freepik.com/free-photo/entrepreneurs-meeting-office_23-2148898690.jpg?size=626&ext=jpg&ga=GA1.1.1478565589.1699087102&semt=ais" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height="400px"    src="https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?size=626&ext=jpg&ga=GA1.1.1478565589.1699087102&semt=ais" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height="400px"    src="https://img.freepik.com/free-photo/marketing-computer-sign-symbol-concept_53876-123885.jpg?size=626&ext=jpg&ga=GA1.1.1478565589.1699087102&semt=ais" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="400px"    src="https://img.freepik.com/premium-photo/team-colleagues-working-together-laptop_179314-109.jpg?size=626&ext=jpg&ga=GA1.1.1478565589.1699087102&semt=ais" />
    </Carousel.Item>
*/}
    </Carousel>
  )
}

export default Carsoler