import React from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import "./Cart.css";

const Cart = ({ cartItems, onChangeQuantity, onRemoveItem }) => {

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const deliveryCharge = subtotal > 0 ? 40 : 0;

    const total = subtotal + deliveryCharge;

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        alert("Proceeding to checkout!");
    };

    return (
        <div className="cart-page">

            <div className="cart-container">

                {/* Header */}
                <div className="cart-header">
                    <span>YOUR ORDER</span>
                    <h1>Shopping Cart ✦</h1>
                    <p>
                        Fresh, healthy choices ready to be enjoyed.
                    </p>
                </div>

                {cartItems.length > 0 ? (
                    <div className="cart-content">

                        {/* Cart Items */}
                        <div className="cart-items">

                            {cartItems.map((item) => (

                                <div className="cart-item" key={item.id}>

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div className="cart-item-info">

                                        <h3>{item.name}</h3>

                                        <p>
                                            ₹{item.price} each
                                        </p>

                                        <div className="quantity-box">

                                            <button
                                                onClick={() =>
                                                    onChangeQuantity(item.id, -1)
                                                }
                                            >
                                                <FaMinus />
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button
                                                onClick={() =>
                                                    onChangeQuantity(item.id, 1)
                                                }
                                            >
                                                <FaPlus />
                                            </button>

                                        </div>

                                    </div>

                                    <div className="cart-item-right">

                                        <strong>
                                            ₹{item.price * item.quantity}
                                        </strong>

                                        <button
                                            className="remove-btn"
                                            onClick={() =>
                                                onRemoveItem(item.id)
                                            }
                                        >
                                            <FaTrash />
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                        {/* Order Summary */}
                        <div className="order-summary">

                            <h2>Order Summary</h2>

                            <div className="summary-line">
                                <span>Subtotal</span>
                                <span>₹{subtotal}</span>
                            </div>

                            <div className="summary-line">
                                <span>Delivery</span>
                                <span>₹{deliveryCharge}</span>
                            </div>

                            <hr />

                            <div className="summary-total">
                                <span>Total</span>
                                <strong>₹{total}</strong>
                            </div>

                            <button
                                className="checkout-btn"
                                onClick={handleCheckout}
                            >
                                Proceed to Checkout
                            </button>

                            <Link
                                to="/#menu"
                                className="expr-menu"
                            >
                                ← Explore Our Menu
                            </Link>

                        </div>

                    </div>
                ) : (

                    /* Empty Cart */
                    <div className="empty-cart">

                        <div className="empty-icon">
                            🛒
                        </div>

                        <h2>Your Cart is Empty</h2>

                        <p>
                            Looks like you haven't added anything
                            to your cart yet.
                        </p>

                        <Link
                            to="/#menu"
                            className="shop-btn"
                        >
                            Explore Our Menu
                        </Link>

                    </div>

                )}

                <Link
                    to="/"
                    className="back-home"
                >
                    ← Back to Home
                </Link>

            </div>

        </div>
    );
};

export default Cart;
