import Helmet from "../Helmet/Helmet";
import "../styles/checkout.css";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import React, { useState } from "react";

const Checkout = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredNumber, setEnteredNumber] = useState("");
    const [enteredCountry, setEnteredCountry] = useState("");
    const [enteredCity, setEnteredCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const shippingInfo = [];
    const cartTotalAmout = useSelector((state) => state.cart.totalAmount);
    const shippingCost = 30;
    const totalAmount = cartTotalAmout * Number(shippingCost);

    const submitHandler = (e) => {
        e.preventDefault();
        const userShippingAddress = {
            name: enteredName,
            email: enteredEmail,
            phone: enteredNumber,
            country: enteredCountry,
            city: enteredCity,
            postalCode: postalCode,
        };
        shippingInfo.push(userShippingAddress);
        console.log(shippingInfo);
    };
    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout" />
            <section>
                <Container>
                    <Row>
                        <Col lg="8" md="6">
                            <h6>Shipping Address</h6>
                            <form
                                className="checkout__form"
                                onSubmit={submitHandler}
                            >
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                        onChange={(e) =>
                                            setEnteredName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        onChange={(e) =>
                                            setEnteredEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="number"
                                        placeholder="Phone number"
                                        required
                                        onChange={(e) =>
                                            setEnteredNumber(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        required
                                        onChange={(e) =>
                                            setEnteredCountry(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        required
                                        onChange={(e) =>
                                            setEnteredCity(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="number"
                                        placeholder="Postal Code"
                                        required
                                        onChange={(e) =>
                                            setPostalCode(e.target.value)
                                        }
                                    />
                                </div>
                                <button
                                    className="addToCart__btn"
                                    type="submit"
                                >
                                    Payment
                                </button>
                            </form>
                        </Col>
                        <Col lg="4" md="6">
                            <div className="checkout__bill">
                                <h6 className="d-flex align-items-center justify-content-between mb-3">
                                    Subtotal: <span>${cartTotalAmout}</span>
                                </h6>
                                <h6 className="d-flex align-items-center justify-content-between">
                                    Shipping:
                                    <span>${shippingCost}</span>
                                </h6>
                                <div className="checkout__total">
                                    <h5 className="d-flex align-items-center justify-content-between">
                                        Total: <span>${totalAmount}</span>
                                    </h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;
