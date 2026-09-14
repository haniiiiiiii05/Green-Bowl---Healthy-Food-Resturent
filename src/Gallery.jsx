import React from "react";
import "./Gallery.css";

const galleryItems = [
    {
        title: "Fresh Salad",
        category: "SALAD",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqT2tEvpIlY6cWqxYbHtnjCWTkwYMNYnQCNGzRCXFFHA&s=10"
    },
    {
        title: "Healthy Bowl",
        category: "BOWL",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4ELdNxJONTl4EbxRulZOh8HOzNRL2qHauCcv4QgeWQ&s=10"
    },
    {
        title: "Fresh Smoothie",
        category: "SMOOTHIE",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YqmVV31vjs4VWCAqIF-Tb6zgUbuxZt3cGBrTNGIhlw&s=10"
    },
    {
        title: "Fresh Juice",
        category: "JUICE",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qEUdL-hkdrt8qPZvbzvBGfCRSwJ1ynAGNYfRS5mV3A&s=10"
    },
    {
        title: "Healthy Meal",
        category: "HEALTHY MEAL",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7fy_OrRA9O4e01A6JzPVZR1pG9D2dpK5eQf8to2GiA&s=10"
    },
    {
        title: "Garden Salad",
        category: "SALAD",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXSm4qHTqM9grlxmAHjRyE_Aq-uG_Wc9yt4xwH9M0Qg&s=10"
    }
];

const Gallery = () => {
    return (
        <section className="gallery" id="gallery">

            {/* Header */}
            <div className="gallery__header">

                <p className="gallery__eyebrow">
                    OUR FOOD GALLERY
                </p>

                <h2>
                    Fresh • Colorful • Healthy
                </h2>

                <div className="gallery__divider">
                    <span></span>
                    <b>✦</b>
                    <span></span>
                </div>

            </div>


            {/* Gallery */}
            <div className="gallery__grid">

                {galleryItems.map((item, index) => (
                    <div
                        className="gallery__item"
                        key={index}
                    >

                        <img
                            src={item.image}
                            alt={item.title}
                        />

                        <div className="gallery__overlay">

                            <span>
                                {item.category}
                            </span>

                            <h3>
                                {item.title}
                            </h3>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default Gallery;
