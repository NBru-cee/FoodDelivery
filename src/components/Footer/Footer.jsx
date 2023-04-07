import "../../styles/footer.css";
import logo from "../../assets/images/res-logo.png";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3" md="4" sm="6">
                        <div className="footer__logo">
                            <img src={logo} alt="logo" />
                            <h5 className="footer__title">Tasty Treat</h5>
                            <p>
                                Tasty Treat, <br />
                                the fastest food delivery <br />
                                restaurant in the town.
                            </p>
                        </div>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h4>Delivery Time</h4>
                        <ListGroup className="delivery__time__list">
                            <ListGroupItem className="delivery__time__item border-0 ps-0">
                                <span> Sunday - Thursday</span>
                                <p>10:00 a.m - 11: 00 p.m</p>
                            </ListGroupItem>
                            <ListGroupItem className="delivery__time__item border-0 ps-0">
                                <span> Friday - Saturday</span>
                                <p>Off Day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h4>Contact us</h4>
                        <ListGroup className="delivery__time__list">
                            <ListGroupItem className="delivery__time__item border-0 ps-0">
                                <span>
                                    Location: Zindabazar, Kigali-3100, Rwanda
                                </span>
                            </ListGroupItem>
                            <ListGroupItem className="delivery__time__item border-0 ps-0">
                                <span> Phone: +250 791825141</span>
                            </ListGroupItem>
                            <ListGroupItem className="delivery__time__item border-0 ps-0">
                                <span>Email: example@gmail.com</span>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">NewLetter</h5>
                        <p>Subscribe our NewsLetter</p>
                        <div className="newsletter">
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                            <span>
                                <i className="ri-send-plane-line"></i>
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg="6" md="6">
                        <p className="copyright__text">
                            Copyright - {year}, Website made by Bruce. All
                            Rights Reserved
                        </p>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                            <p className="m-0">Follow:</p>
                            <span>
                                <Link to="https://www.facebook.com">
                                    <i className="ri-facebook-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://www.github.com">
                                    <i className="ri-github-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://www.youtube.com">
                                    <i className="ri-youtube-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://www.linkedin.com">
                                    <i className="ri-linkedin-line"></i>
                                </Link>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
