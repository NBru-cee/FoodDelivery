import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../styles/cartItem.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppingCart/cartSlice";

const CartItem = ({ item }) => {
    const { id, title, price, image01, quantity, totalPrice } = item;
    const dispatch = useDispatch();
    const incrementItem = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                price,
                image01,
            })
        );
    };
    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id));
    };
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    };
    return (
        <ListGroupItem className="border-0 cart__item">
            <div className="cart__item__info d-flex gap-2">
                <img src={image01} alt="product image" />
            </div>
            <div className="cart__product__info d-flex align-items-center justify-content-between gap-4 w-100">
                <div>
                    <h6 className="cart__product__title">{title}</h6>
                    <p className="d-flex align-items-center gap-5 cart__product__price">
                        {quantity} X <span>${totalPrice}</span>
                    </p>
                    <div className="d-flex align-items-center justify-content-between  increase__decrease__btn">
                        <span className="increase__btn" onClick={incrementItem}>
                            <i className="ri-add-line"></i>
                        </span>
                        <span className="quantity">{quantity}</span>
                        <span className="decrease__btn" onClick={decreaseItem}>
                            <i className="ri-subtract-line"></i>
                        </span>
                    </div>
                </div>
                <span className="delete__btn" onClick={deleteItem}>
                    <i className="ri-close-line"></i>
                </span>
            </div>
        </ListGroupItem>
    );
};

export default CartItem;
