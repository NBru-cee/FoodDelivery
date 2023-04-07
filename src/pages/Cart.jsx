import "../styles/cartPage.css";
import Helmet from "../Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/shoppingCart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    return (
        <Helmet title="Cart">
            <CommonSection title="Your Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            {cartItems.length === 0 ? (
                                <h5 className="text-center">
                                    Your Cart Is Empty!
                                </h5>
                            ) : (
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Title</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <Tr item={item} key={item.id} />
                                        ))}
                                    </tbody>
                                </table>
                            )}
                            <div className="mt-4">
                                <h6>
                                    Subtotal: $
                                    <span className="cart__subtotal">
                                        {totalAmount}
                                    </span>
                                </h6>
                                <p>
                                    Taxes and Shipping will calculate at
                                    checkout
                                </p>
                                <div className="cart__page__btn">
                                    <button className="addToCart__btn me-4">
                                        <Link to="/foods">
                                            Continue Shopping
                                        </Link>
                                    </button>

                                    <button className="addToCart__btn">
                                        <Link to="/checkout">
                                            Proceed to Checkout
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Tr = (props) => {
    const { id, image01, title, price, quantity } = props.item;
    const dispatch = useDispatch();
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    };
    return (
        <tr>
            <td className="text-center cart__image__box">
                <img src={image01} alt="cart image" />
            </td>
            <td className="text-center">{title}</td>
            <td className="text-center">${price}</td>
            <td className="text-center">{quantity}px</td>
            <td className="text-center cart__item__del" onClick={deleteItem}>
                <i className="ri-delete-bin-line"></i>
            </td>
        </tr>
    );
};

export default Cart;
