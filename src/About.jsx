import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import { FaArrowRight } from "react-icons/fa6";


const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-shell">
                <div className="about-header">
                    <p className="about-kicker">ABOUT GREEN BOWL</p>
                    <h2>
                        Fresh Food.<br />
                        Better Living.
                    </h2>
                </div>

                <div className="about-divider">
                    <span className="about-divider__line" />
                    <span className="about-divider__leaf">✦</span>
                    <span className="about-divider__line" />
                </div>

                <div className="about-body">
                    <div className="about-media">
                        <img
                            src="https://images.openai.com/static-rsc-4/p82ZYhFacvxfKH56-JiT9TUHFedWU23gcoZs2rZoiJMZHAxKt6bDhgknLHILn0NkM-sLI4Aw7Rgjl902gz0QIl1XsuFRpyUEYeY-hWZfYnNB12vEsLMi6x0uOpQXU5W7ywCKrNrzALAtxyOCZfg4z8KRfIVzZNQhyDuJNKTBGkJiRCZ-w8_r75Cc-sBVHWTh?purpose=fullsize"
                            alt="Healthy food"
                            className="about-media__image"
                        />
                        <div className="img-box">
                            <span >100 %</span>
                            <p>Natural Food</p>
                        </div>
                    </div>

                    <div className="about-story">
                        <div className="story">
                            Our Story
                        </div>
                        <p className="about-story__intro">
                            At Green Bowl, we believe that healthy food should be simple,
                            delicious and accessible to everyone. Our journey started with a passion for fresh ingredients,
                            wholesome meals and a healthier tomorrow.
                        </p>

                        <div className="about-points">
                            <div className="about-point">
                                <span className="about-point__icon">✦</span>
                                <div className="about-point__text">
                                    <h3>Fresh Ingredients</h3>
                                    <p>We use only the freshest, high-quality ingredients for the best taste and nutrition.</p>
                                </div>
                            </div>

                            <div className="about-point">
                                <span className="about-point__icon">❤</span>
                                <div className="about-point__text">
                                    <h3>Balanced Nutrition</h3>
                                    <p>Our meals are designed to give you the right balance of taste and health.</p>
                                </div>
                            </div>

                            <div className="about-point">
                                <span className="about-point__icon">◌</span>
                                <div className="about-point__text">
                                    <h3>A Healthier Tomorrow</h3>
                                    <p>We’re committed to your well-being and a healthier, happier future.</p>
                                </div>
                            </div>
                        </div>

                        {/* <button className="about-button" type="button">
                            LEARN MORE
                        </button> */}
                        <Link to="/learn-more" className="about__button">
                            LEARN MORE
                            <FaArrowRight className="more-icon" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
