import React from "react";
import "./learnmore.css";

const LearnMore = () => {
    return (
        <section className="learn-more">

            {/* Hero */}
            <div className="learn-more__hero">
                <p>ABOUT GREEN BOWL</p>

                <h1>
                    Fresh Food.<br />
                    Better Living.
                </h1>

                <div className="learn-more__divider">
                    <span></span>
                    <b>✦</b>
                    <span></span>
                </div>

                <p className="learn-more__intro">
                    At Green Bowl, we believe that healthy food should be
                    fresh, delicious, and enjoyable every day.
                </p>
            </div>


            {/* Our Story */}
            <div className="learn-more__section">

                <div className="learn-more__text">
                    <p className="learn-more__small-title">
                        OUR STORY
                    </p>

                    <h2>
                        Good Food, Good Life
                    </h2>

                    <p>
                        Green Bowl was created with a simple idea — to make
                        healthy eating easy, tasty, and enjoyable.
                    </p>

                    <p>
                        We bring together fresh vegetables, wholesome
                        ingredients, nutritious grains, fruits, and
                        delicious homemade combinations to create meals
                        that make you feel good.
                    </p>

                    <p>
                        From refreshing salads and nourishing bowls to
                        smoothies and fresh juices, every dish is prepared
                        with care and attention to quality.
                    </p>
                </div>

                <div className="learn-more__box">
                    <span>🥗</span>
                    <h3>Fresh & Healthy</h3>
                    <p>
                        Carefully selected ingredients for meals
                        you can feel good about.
                    </p>
                </div>

            </div>


            {/* Our Philosophy */}
            <div className="learn-more__philosophy">

                <p className="learn-more__small-title">
                    OUR PHILOSOPHY
                </p>

                <h2>
                    Eat Fresh. Live Healthy.
                </h2>

                <p>
                    We believe healthy eating is not about giving up
                    delicious food. It's about choosing better ingredients,
                    balanced meals, and flavors that make every bite
                    enjoyable.
                </p>

                <div className="learn-more__features">

                    <div>
                        <span>🌱</span>
                        <h3>Fresh Ingredients</h3>
                        <p>
                            Fresh and quality ingredients in every meal.
                        </p>
                    </div>

                    <div>
                        <span>🥑</span>
                        <h3>Nutritious Meals</h3>
                        <p>
                            Balanced meals made for your everyday lifestyle.
                        </p>
                    </div>

                    <div>
                        <span>❤️</span>
                        <h3>Made With Care</h3>
                        <p>
                            Every dish is prepared with freshness and care.
                        </p>
                    </div>

                </div>

            </div>


            {/* Why Green Bowl */}
            <div className="learn-more__why">

                <p className="learn-more__small-title">
                    WHY GREEN BOWL
                </p>

                <h2>
                    A Healthier Choice, Every Day
                </h2>

                <p>
                    Whether you're looking for a quick healthy lunch,
                    a refreshing smoothie, or a wholesome bowl, Green Bowl
                    is here to make healthy choices simple and delicious.
                </p>

                <button
                    onClick={() => window.location.href = "/#menu"}
                >
                    EXPLORE OUR MENU
                    <span>→</span>
                </button>

            </div>

        </section>
    );
};

export default LearnMore;
