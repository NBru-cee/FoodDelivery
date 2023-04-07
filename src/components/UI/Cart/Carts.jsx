import React from "react";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../../../styles/shoppingCart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartUIActions } from "../../../store/shoppingCart/cartUISlice";

const Carts = () => {
    const dispatch = useDispatch();
    const toggleCart = () => {
        dispatch(cartUIActions.toggle());
    };
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <div className="cart__container">
            <ListGroup className="cart">
                <div className="cart__close">
                    <span onClick={toggleCart}>
                        <i className="ri-close-fill"></i>
                    </span>
                </div>
                <div className="cart__item__list">
                    {cartProducts.length === 0 ? (
                        <h6 className="text-center mt-5">
                            No Items added to the Cart
                        </h6>
                    ) : (
                        cartProducts.map((item, index) => (
                            <CartItem key={index} item={item} />
                        ))
                    )}
                </div>
                <div className="cart__bottom d-flex align-items-center justify-content-between">
                    <h6>
                        Subtotal:
                        <span>${totalAmount}</span>
                    </h6>
                    <button>
                        <Link to="/checkout">Checkout</Link>
                    </button>
                </div>
            </ListGroup>
        </div>
    );
};

export default Carts;
