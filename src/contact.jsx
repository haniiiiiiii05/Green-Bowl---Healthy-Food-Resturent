import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact" id="contact">

            <div className="contact__header">

                <p className="contact__eyebrow">
                    GET IN TOUCH
                </p>

                <h2>
                    We'd love to hear from you!
                </h2>

                <div className="contact__divider">
                    <span></span>
                    <b>✦</b>
                    <span></span>
                </div>

            </div>


            <div className="contact__content">

                <div className="contact__info">

                    <div className="contact__info-item">

                        <div className="contact__icon">
                            📍
                        </div>

                        <div>
                            <h3>Our Location</h3>
                            <p>
                                Surat,<br />
                                Gujarat
                            </p>
                        </div>

                    </div>


                    <div className="contact__info-item">

                        <div className="contact__icon">
                            📞
                        </div>

                        <div>
                            <h3>Phone</h3>
                            <p>
                                +91 99094 76777
                            </p>
                        </div>

                    </div>


                    <div className="contact__info-item">

                        <div className="contact__icon">
                            ✉️
                        </div>

                        <div>
                            <h3>Email</h3>
                            <p>
                                honeybhojani2211@gmail.com
                            </p>
                        </div>

                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">🕐</div>
                        <div>
                            <h4>Opening Hours</h4>
                            <p>
                                Monday – Sunday<br />
                                10:00 AM – 10:00 PM
                            </p>
                        </div>
                    </div>

                </div>


                {/* Contact Form */}
                <div className="contact__form-box">

                    <h3>CONTACT FORM</h3>

                    <form>

                        <div className="contact__field">
                            <label htmlFor="name">
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                            />
                        </div>


                        <div className="contact__field">
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>


                        <div className="contact__field">
                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>


                        <button
                            type="submit"
                            className="contact__button"
                        >
                            SEND MESSAGE
                            <span>→</span>
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default Contact;
