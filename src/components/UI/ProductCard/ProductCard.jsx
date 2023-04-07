import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/productCard.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppingCart/cartSlice";

const ProductCard = (props) => {
    const { id, title, image01, price } = props.item;
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                image01,
                price,
            })
        );
    };
    return (
        <div className="product__item">
            <div className="product__img">
                <Link to={`/foods/${id}`}>
                    <img src={image01} alt="product image" className="w-50" />
                </Link>
            </div>
            <div className="product__content">
                <h5>
                    <Link to={`/foods/${id}`}>{title}</Link>
                </h5>

                <div className="d-flex align-items-center justify-content-between">
                    <span className="product__price">${price}</span>
                    <button className="addToCart__btn" onClick={addToCart}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
