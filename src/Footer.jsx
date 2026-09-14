import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__content">

                {/* Brand */}
                <div className="footer__brand">
                    <h2>GREEN BOWL</h2>

                    <p>
                        Healthy food,<br />
                        happy life.
                    </p>

                    <p className="footer__tagline">
                        ♡ Fresh • Healthy • Delicious
                    </p>
                </div>


                {/* Quick Links */}
                <div className="footer__links">
                    <h3>QUICK LINKS</h3>

                    <Link to="/#home">Home</Link>
                    <Link to="/#about">About</Link>
                    <Link to="/#menu">Menu</Link>
                    <Link to="/#gallery">Gallery</Link>
                    <Link to="/#contact">Contact</Link>
                </div>


                {/* Opening Hours */}
                <div className="footer__hours">
                    <h3>OPENING HOURS</h3>

                    <p>
                        <strong>Mon - Sat</strong><br />
                        10:00 AM - 10:00 PM
                    </p>

                    <p>
                        <strong>Sunday</strong><br />
                        11:00 AM - 9:00 PM
                    </p>
                </div>


                {/* Social Media */}
                <div className="footer__social">
                    <h3>FOLLOW US</h3>

                    <div className="social__icons">
                        <a href="#" aria-label="Facebook"><FaFacebookF />
                        </a>
                        <a href="#" aria-label="Instagram"><FaInstagram />
                        </a>
                        <a href="#" aria-label="Twitter"><FaXTwitter />
                        </a>
                        <a href="#" aria-label="YouTube"><FiYoutube />
                        </a>
                    </div>
                </div>

            </div>


            {/* Bottom Footer */}
            <div className="footer__bottom">
                <p>
                    © 2026 Green Bowl. All Rights Reserved.
                </p>
            </div>

        </footer>
    );
};

export default Footer;
