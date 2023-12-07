import React from "react";
import BlogFront from "image/Blog_Front.png";
import BlogImage1 from "image/Blog_Img (1).jpg";
import BlogImage2 from "image/Blog_Img (2).jpg";
import BlogImage3 from "image/Blog_Img (3).jpg";
import BlogImage4 from "image/Blog_Img (4).jpg";
import BlogImage5 from "image/Blog_Img (5).jpg";
import BlogImage6 from "image/Blog_Img (6).png";
import BlogImage7 from "image/Blog_Img (7).png";
import BlogImage8 from "image/Blog_Img (8).jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Blog() {
  const blogCards = [
    {
      image: `${BlogImage1}`,
      text: "With the rising and developing prevalence of AI, will AI dominate the future?",
    },
    {
      image: `${BlogImage2}`,
      text: "Having digital accessories is good, but having too many, is it going to limit a person's good habits?",
    },
    {
      image: `${BlogImage3}`,
      text: "Is an analog device from decades ago better than our modern devices?",
    },
    {
      image: `${BlogImage4}`,
      text: "Nature is crucial, and it is essential for all of us to love and respect wildlife and the environment.",
    },
    {
      image: `${BlogImage5}`,
      text: "How will consuming excessive sugar and juice affect your body?",
    },
    {
      image: `${BlogImage6}`,
      text: "Delving into the vibrant and dynamic modern-day city lifestyle of Japan, where tradition seamlessly intersects with cutting-edge innovations.",
    },
    {
      image: `${BlogImage7}`,
      text: "Embarking on a journey to a secluded island for a week-long vacation.",
    },
    {
      image: `${BlogImage8}`,
      text: "How contemporary digital art is poised to reshape the trajectory of human artistic styles throughout history.",
    },
  ];

  return (
    <>
      <Container className="xxl">
        <img
          src={BlogFront}
          className="img-fluid mx-auto mt-3 d-block "
          alt="blog front"
        />
      </Container>
      <div className="d-flex justify-content-center">
        <p className="text-center mx-4 w-75">
          <strong>
            <p className="my-3 fs-3">
              A Seamless Journey with React Router and Bootstrap
            </p>
          </strong>
          <p>
            Welcome to My Blog, a space where ideas come to life and stories
            unfold. Powered by the dynamic duo of React Router and Bootstrap,
            navigating through the blog is not just a journey; it's an
            experience.
          </p>
        </p>
      </div>
      <hr style={{ width: "75%", margin: "auto", border: "2px solid black" }} />
      <h2 className="text-center my-2">All articles</h2>
      <Container className="my-container">
        <Row>
          {blogCards.map((card) => (
            <Col xs={12} md={6}>
              <Link
                to="/about"
                className="col-lg"
                style={{ textDecoration: "none" }}
              >
                <Card className="h-100 w-100 w-sm-auto">
                  <Card.Img variant="top" src={card.image} />
                  <Card.Body>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Blog;
