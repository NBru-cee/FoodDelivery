import React, { useState, useEffect } from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/productDetails.css";
import ProductCard from "../components/UI/ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shoppingCart/cartSlice";

const FoodDetails = () => {
    const [tab, setTab] = useState("desc");
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = products.find((product) => product.id === id);
    const [previewImg, setPreviewImg] = useState(product.image01);
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [reviewMsg, setReviewMsg] = useState("");
    const { title, price, category, desc, image01 } = product;
    const relatedProduct = products.filter(
        (item) => category === item.category
    );

    useEffect(() => {
        setPreviewImg(product.image01);
    }, [product]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);
    const addItem = () =>
        dispatch(
            cartActions.addItem({
                id,
                title,
                price,
                image01,
            })
        );

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(enteredName, enteredEmail, reviewMsg);
    };
    return (
        <Helmet title="Product Details">
            <CommonSection title={title} />
            <section>
                <Container>
                    <Row>
                        <Col lg="2" md="2">
                            <div className="product__images">
                                <div
                                    className="img__item mb-3"
                                    onClick={() =>
                                        setPreviewImg(product.image01)
                                    }
                                >
                                    <img
                                        src={product.image01}
                                        alt="product image 1"
                                        className="w-50"
                                    />
                                </div>
                                <div
                                    className="img__item mb-3"
                                    onClick={() =>
                                        setPreviewImg(product.image02)
                                    }
                                >
                                    <img
                                        src={product.image02}
                                        alt="product image 2"
                                        className="w-50"
                                    />
                                </div>
                                <div
                                    className="img__item"
                                    onClick={() =>
                                        setPreviewImg(product.image03)
                                    }
                                >
                                    <img
                                        src={product.image03}
                                        alt="product image 3"
                                        className="w-50"
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="4">
                            <div className="product__main__img">
                                <img
                                    src={previewImg}
                                    alt=""
                                    className="w-100"
                                />
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className="single__product__content">
                                <h2 className="product__title mb-3">{title}</h2>
                                <p className="product__price">
                                    Price: <span>${price}</span>
                                </p>
                                <p className="category mb-5">
                                    Category: <span>{category}</span>
                                </p>
                                <button
                                    className="addToCart__btn"
                                    onClick={addItem}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </Col>
                        <Col lg="12">
                            <div className="tabs d-flex align-items-center gap-3 py-3">
                                <h6
                                    className={`${
                                        tab === "desc" ? "tab__active" : ""
                                    }`}
                                    onClick={() => setTab("desc")}
                                >
                                    Description
                                </h6>
                                <h6
                                    onClick={() => setTab("rev")}
                                    className={`${
                                        tab === "rev" ? "tab__active" : ""
                                    }`}
                                >
                                    Review
                                </h6>
                            </div>
                            {tab === "desc" ? (
                                <div className="tab__content">
                                    <p>{desc}</p>
                                </div>
                            ) : (
                                <div className="tab__form">
                                    <div className="review pt-5">
                                        <p className="user__name mb-0">
                                            Jhon Doe
                                        </p>
                                        <p className="user__email">
                                            jhon1@gmail.com
                                        </p>
                                        <p className="feedback__text">
                                            Great Product
                                        </p>
                                    </div>
                                    <div className="review">
                                        <p className="user__name mb-0">
                                            Jhon Doe
                                        </p>
                                        <p className="user__email">
                                            jhon1@gmail.com
                                        </p>
                                        <p className="feedback__text">
                                            Great Product
                                        </p>
                                    </div>
                                    <div className="review">
                                        <p className="user__name mb-0">
                                            Jhon Doe
                                        </p>
                                        <p className="user__email">
                                            jhon1@gmail.com
                                        </p>
                                        <p className="feedback__text">
                                            Great Product
                                        </p>
                                    </div>
                                    <form
                                        className="form"
                                        onSubmit={submitHandler}
                                    >
                                        <div className="form__group">
                                            <input
                                                type="text"
                                                placeholder="Enter your Name"
                                                required
                                                onChange={(e) =>
                                                    setEnteredName(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="form__group">
                                            <input
                                                type="email"
                                                placeholder="Enter your Email"
                                                required
                                                onChange={(e) =>
                                                    setEnteredEmail(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="form__group">
                                            <textarea
                                                placeholder="Enter your Review"
                                                onChange={(e) =>
                                                    setReviewMsg(e.target.value)
                                                }
                                                required
                                                rows={5}
                                            ></textarea>
                                        </div>

                                        <button
                                            className="addToCart__btn"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            )}
                        </Col>

                        <Col lg="12" className="mb-5 mt-4">
                            <h2 className="related__products__title">
                                You Might Also Like
                            </h2>
                        </Col>
                        {relatedProduct.map((item) => (
                            <Col
                                lg="3"
                                md="4"
                                sm="6"
                                xs="6"
                                key={item.id}
                                className="mb-4"
                            >
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default FoodDetails;
