import { Carousel } from "react-bootstrap";

const MiCarousel = () => {

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/carousel1.jpg"
          alt="First slide"
          style={{ height: "600px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/carousel2.jpg"
          alt="Second slide"
          style={{ height: "600px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/carousel3.jpg"
          alt="Third slide"
          style={{ height: "600px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/carousel4.jpg"
          alt="Third slide"
          style={{ height: "600px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/carousel5.jpg"
          alt="Third slide"
          style={{ height: "600px", objectFit: "cover" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MiCarousel;
