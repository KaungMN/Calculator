import React from "react";
import BlogDetailCover from "image/blog-detail-image/cover_img.jpg";
import ProfilePic from "image/blog-detail-image/profile_pic.png";
import BlogDetailImage from "image/blog-detail-image/blog_detail_img.jpg";
import BlogImage1 from "image/Blog_Img (1).jpg";
import BlogImage2 from "image/Blog_Img (2).jpg";
import BlogImage3 from "image/Blog_Img (3).jpg";
import BlogImage4 from "image/Blog_Img (4).jpg";
import BlogImage5 from "image/Blog_Img (5).jpg";
import BlogImage6 from "image/Blog_Img (6).png";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function BlogDetail() {
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
  ];
  return (
    <>
      <div className="d-flex justify-content-center">
        <p className="text-center mx-4 w-75">
          <strong>
            <p className="my-3 fs-2">
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
      <div>
        <img src={BlogDetailCover} className="img-fluid" alt="blog front" />
      </div>
      <Container className="my-container">
        <div>
          <img
            src={ProfilePic}
            className="img-fluid blog-profile-pic"
            alt="blog front"
          />
          <h6>Alice Wilson</h6>
          <p>July 23, 2023 · 4 min read</p>
          <button>facebook</button>
          <button>twitter</button>
        </div>
        <p className="blog-detail-paragraph">
          In the vast realm of web development, React Router emerges as a
          guiding star. Its ability to create a smooth and responsive navigation
          experience within a React application is unparalleled. As we weave
          through pages and explore content, React Router seamlessly manages the
          transition, ensuring a user-friendly and intuitive journey.
        </p>
        <p className="blog-detail-paragraph">
          Bootstrap, a front-end framework, serves as the artist's palette in
          this creative endeavor. With its extensive collection of pre-designed
          components and responsive grid system, crafting visually stunning and
          mobile-friendly interfaces becomes a breeze. Bootstrap empowers the
          blog with a sleek design, leaving room for imagination to run wild.
        </p>
        <h3>The Marriage of Functionality and Style</h3>
        <p className="blog-detail-paragraph">
          In the world of web development, striking the perfect balance between
          functionality and style is an art form. React Router and Bootstrap
          join forces, showcasing a harmonious blend of seamless navigation and
          aesthetic brilliance. Users are not just visitors; they become part of
          an immersive experience where every click tells a story.
        </p>
      </Container>
      <div className="blog-detail-image">
        <img src={BlogDetailImage} className="img-fluid" alt="blog front" />
        <p>
          Despite putting in considerable effort, there are times when I find
          myself lost, and the result leaves me feeling empty.
        </p>
      </div>

      <Container className="my-container">
        <p className="blog-detail-paragraph">
          My Blog is more than just a collection of articles; it's a canvas
          where stories come to life. Powered by React, the blog's interactivity
          adds depth to every narrative. Whether it's a tutorial, a tech review,
          or a personal reflection, the content breathes and engages, inviting
          readers to be active participants in the storytelling process.
        </p>
        <p className="blog-detail-paragraph">
          In the digital era, where devices vary in size and shape, responsive
          design is non-negotiable. Bootstrap's responsive grid system ensures
          that the blog adapts gracefully to different screen sizes. From
          desktops to tablets and smartphones, the content retains its allure,
          offering a consistent and enjoyable experience.
        </p>
        <p>
          Here are three essential things you need to do for responsive design:
        </p>
        <ul>
          <li>Use Fluid Grid Layouts</li>
          <li>Media Queries</li>
          <li>Flexible Images and Media</li>
        </ul>
        <p>
          As we embark on this adventure together, guided by the dynamic
          capabilities of React Router and the aesthetic finesse of Bootstrap,
          the possibilities are limitless. My Blog is not just a destination for
          information; it's a space where creativity knows no bounds, and each
          click opens a door to a new experience. Join me in exploring the
          realms of web development and design – the journey is just beginning.
        </p>
        <p>Thanks for reading.</p>
        <p>Alice Wilson</p>
        <div>
          <button>Share on Facebook</button>
          <button>Share on Twitter</button>
        </div>
        <p>
          Tags: <a href="#">ui ux design</a>, <a href="#">blog</a>
        </p>
        <img
          src={ProfilePic}
          className="img-fluid blog-profile-pic"
          alt="blog front"
        />
        <p>
          Mika Matikainen is a Design Founder & Advisor, Berlin School of
          Creative Leadership Executive MBA participant, Zippie advisor, Wolt
          co-founder, and Nordic Rose stakeholder.{" "}
        </p>
      </Container>
      <hr
        style={{ width: "100%", margin: "auto", border: "2px solid black" }}
      />
      <Container className="my-container mt-5">
        <h2 className="text-center mb-4">What to read next</h2>
        <Row>
          {blogCards.map((card) => (
            <Col xs={12} md={4} className="my-2">
              <Link
                to="blog-detail-1"
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
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Sign up for the newsletter</Card.Title>
            <Card.Text>
              If you want relevant updates occasionally, sign up for the private
              newsletter. Your email is never shared.
            </Card.Text>
            <input type="text" placeholder="Enter your email...." />
            <Button variant="dark">Submit</Button>
          </Card.Body>
        </Card>
      </Container>

      <div className="bg-dark text-light text-center blog-footer-container mt-5">
        <p className="banner-text">
          <b>DIGITAL DESIGN</b> UI/UX DESIGN <b>CREATIVE WORK</b> BOOTSTRAP{" "}
          <b>REACT</b> FRONT-END DEVELOPMENT <b>USER INTERFACES</b> RESPONSIVE
          DESIGN <b>DIGITAL DESIGN</b> UI/UX DESIGN <b>CREATIVE WORK</b>{" "}
          BOOTSTRAP <b>REACT</b> FRONT-END DEVELOPMENT <b>USER INTERFACES</b>{" "}
          RESPONSIVE DESIGN
        </p>
        <div className="w-75 mx-auto mt-5 mb-2">
          <h3>KMN'S BLOG</h3>
          <p className="blog-footer-text">
            Embark on a journey of React and Bootstrap mastery with KMN's Blog.
            Explore the art of building dynamic, responsive web applications
            through insightful tutorials, hands-on experiences, and the joy of
            continuous learning. Let's code, create, and conquer the world of
            modern web development together!
          </p>
        </div>
        <div>
          <a href="https://twitter.com/" className="mx-3 blog-footer-link">
            Twitter
          </a>
          <a href="https://google.com/" className="mx-3 blog-footer-link">
            Google
          </a>
          <a href="https://facebook.com/" className="mx-3 blog-footer-link">
            Facebook
          </a>
        </div>
        <footer class="bg-dark text-light py-4">
          <div class="footer-container">
            <p class="mb-0 blog-footer-text">© 2012–2020 KMN Co.</p>
            <p class="mb-0 blog-footer-text">All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default BlogDetail;
