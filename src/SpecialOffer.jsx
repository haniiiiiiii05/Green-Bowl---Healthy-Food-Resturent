import React from "react";
import { useNavigate } from "react-router-dom";
import "./SpecialOffer.css";

const specialOfferItem = {
    name: "Green Bowl Combo",
    category: "Special Offers",
    price: 399,
    description: "Salad, smoothie, and fresh juice.",
    image: "https://thumbs.dreamstime.com/b/breakfast-fruit-salad-cornflakes-orange-juice-close-up-54618698.jpg",
};

const SpecialOffer = ({ onAddToCart }) => {
    const navigate = useNavigate();

    const handleAddToCart = () => {
        onAddToCart(specialOfferItem);
        navigate("/cart");
    };

    return (
        <section className="special-offer">

            {/* Heading */}
            <div className="special-offer__header">
                <p>TODAY'S HEALTHY SPECIAL</p>

                <h2>Fresh & Healthy Combo</h2>

                <div className="special-offer__divider">
                    <span></span>
                    <b>✦</b>
                    <span></span>
                </div>
            </div>

            {/* Offer Content */}
            <div className="special-offer__content">

                {/* Food Image */}
                <div className="special-offer__image">
                    <img
                        src="https://thumbs.dreamstime.com/b/breakfast-fruit-salad-cornflakes-orange-juice-close-up-54618698.jpg"
                        alt="Fresh healthy salad"
                    />
                </div>

                {/* Offer Card */}
                <div className="special-offer__card">

                    <span className="special-offer__badge">
                        LIMITED OFFER
                    </span>

                    <h3>GREEN BOWL COMBO</h3>

                    <p className="special-offer__description">
                        Salad + Smoothie
                        <br />
                        + Fresh Juice
                    </p>

                    <div className="special-offer__price">
                        <span className="new-price">₹399</span>
                        <span className="old-price">₹499</span>
                    </div>

                    <button
                        type="button"
                        className="special-offer__button"
                        onClick={handleAddToCart}
                    >
                        ADD TO CART <span>→</span>
                    </button>

                </div>

            </div>

        </section>
    );
};

export default SpecialOffer;
