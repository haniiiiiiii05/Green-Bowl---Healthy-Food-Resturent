import React, { useState } from "react";
import "./testimonials.css";

const testimonials = [
    {
        name: "Priya Shah",
        review: "Amazing fresh food and taste! Everything was delicious.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTHcYyuCMh_KPjM0sFlpHBt-xqyqmz28nPs12Ls3HHg&s=10"
    },
    {
        name: "Rahul Patel",
        review: "Fresh and delicious smoothies! I really loved the taste.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVOmvEo2juzCkQkunzJyZxrGF28UNhWVOuoOdxjkVWg&s=10"
    },
    {
        name: "Neha Mehta",
        review: "The bowls are healthy & tasty! Perfect for a healthy meal.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmRjgovDKrZLxtMjVk7yCBOeWvgemNUNs9BZx8xuLLg&s=10"
    },
    {
        name: "Aarav Shah",
        review: "Healthy meals with amazing taste. Highly recommended!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAkojXWtDeefHFKOdBvmskdIRofA8Y4xgwG5NyqolLA&s=10"
    },
    {
        name: "Riya Patel",
        review: "Loved the fresh salads and beautiful presentation.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ11P_oftsPFQqh12FbVJitgycdqUydvZukChw3SFrbg&s=10"
    },
    {
        name: "Karan Mehta",
        review: "Great food, fresh ingredients and excellent service.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ14kUsMgTNoPuaQrxbMGfJT9l6ZzGDpsGF_bMVVyKMg&s=10"
    },
    {
        name: "Ananya Shah",
        review: "The food was fresh, tasty and perfectly healthy.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvV_KHJ4XCRmuJDq2w4z_7ApjEhLgHbQyUhcZ0sDqg_g&s=10"
    },
    {
        name: "Dev Patel",
        review: "Green Bowl is my favorite place for healthy meals.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwD79LSzYDcznAmNUIGqJ4tb6e6LChL0UUriikZksxTg&s=10"
    },
    {
        name: "Isha Mehta",
        review: "Absolutely loved the smoothies and nutritious bowls!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkFGAPd226_-caixkCEmS5wopPi4MTbNr8RdVgq9lhw&s=10"
    }
];

const Testimonials = () => {

    const [active, setActive] = useState(1);

    const previous = () => {
        setActive((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const next = () => {
        setActive((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const getCardClass = (index) => {
        if (index === active) {
            return "testimonial-card active";
        }

        if (
            index === (active - 1 + testimonials.length) % testimonials.length
        ) {
            return "testimonial-card left";
        }

        if (
            index === (active + 1) % testimonials.length
        ) {
            return "testimonial-card right";
        }

        return "testimonial-card hidden";
    };

    return (
        <section className="testimonials" id="reviews">

            {/* Heading */}
            <div className="testimonials__header">

                <p className="testimonials__eyebrow">
                    WHAT OUR CUSTOMERS SAY
                </p>

                <h2>
                    Fresh food. Happy customers.
                </h2>

                <div className="testimonials__divider">
                    <span></span>
                    <b>✦</b>
                    <span></span>
                </div>

            </div>


            {/* Carousel */}
            <div className="testimonial-carousel">

                <button
                    className="testimonial-arrow testimonial-arrow--left"
                    onClick={previous}
                >
                    ‹
                </button>


                <div className="testimonial-track">

                    {testimonials.map((item, index) => (

                        <div
                            className={getCardClass(index)}
                            key={item.name}
                        >

                            {/* Picture */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="testimonial-image"
                            />

                            {/* Name */}
                            <h3>
                                {item.name}
                            </h3>

                            {/* Review */}
                            <p className="testimonial-review">
                                "{item.review}"
                            </p>

                            {/* Stars */}
                            <div className="testimonial-stars">
                                ★★★★★
                            </div>

                        </div>

                    ))}

                </div>


                <button
                    className="testimonial-arrow testimonial-arrow--right"
                    onClick={next}
                >
                    ›
                </button>

            </div>


            {/* Dots */}
            <div className="testimonial-dots">

                {testimonials.map((_, index) => (

                    <button
                        key={index}
                        className={
                            index === active
                                ? "testimonial-dot active"
                                : "testimonial-dot"
                        }
                        onClick={() => setActive(index)}
                        aria-label={`Show review ${index + 1}`}
                    ></button>

                ))}

            </div>

        </section>
    );
};

export default Testimonials;
