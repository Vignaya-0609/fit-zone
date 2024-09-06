import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import s1 from '../assets/images/service-1.jpg';
import s2 from '../assets/images/service-2.jpg';
import s3 from '../assets/images/service-3.jpg';
import s4 from '../assets/images/service-4.jpg';
import Container from 'react-bootstrap/Container';

function Services() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="mt-5 mb-5">
        <h2 className='mt-5 mb-4 text-center'>Achieve More with Our Services</h2>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s1}
            alt="First slide"
            style={{height:"450px",opacity:0.4}}
          />
          <Carousel.Caption>
            <h3>Group Fitness Classes</h3>
            <p>High-energy group classes like yoga, HIIT, spinning, and Zumba for those who enjoy working out in a community environment.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s2}
            alt="Second slide"
            style={{height:"450px",opacity:0.4}}
          />
          <Carousel.Caption>
            <h3>Body Transformation Program</h3>
            <p>A comprehensive fitness and nutrition plan tailored for those looking to transform their physique and health.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s3}
            alt="Third slide"
            style={{height:"450px",opacity:0.4}}
          />
          <Carousel.Caption>
            <h3>Mind & Body Wellness</h3>
            <p>Holistic services like meditation and breathing exercises that focus on mental well-being along with physical fitness.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s4}
            alt="Fourth slide"
            style={{height:"450px",opacity:0.4}}
          />
          <Carousel.Caption>
            <h3>Online Fitness Coaching</h3>
            <p>Virtual fitness programs and coaching sessions for members who prefer to work out from home.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Services;
