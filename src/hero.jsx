import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <main className="hero-section" id="home">
                <div className="hero-section__content">
                    <p className="hero-section__eyebrow">Nourish your everyday</p>
                    <h1>Eat Fresh.<br />Live Healthy.</h1>
                    <p className="hero-section__description">
                        Fresh, delicious and healthy meals made for you.
                    </p>
                    <div className="hero-section__actions">
                        <Link to="/#menu" className="hero-section__button hero-section__button--primary">
                            Explore Menu
                        </Link>
                        <Link to="/book-table" className="hero-section__button hero-section__button--secondary">
                            Book a Table
                        </Link>
                    </div>
                </div>

                <div className="hero-section__visual" aria-label="Healthy bowl" role="img">
                    <span className="hero-section__leaf hero-section__leaf--one">✦</span>
                    <span className="hero-section__leaf hero-section__leaf--two">✦</span>
                    <div className="hero-section__bowl">🥗  </div>
                    <div className="hero-section__label">
                        <span>Fresh pick</span>
                        <strong>Healthy Bowl</strong>
                    </div>
                </div>  
            </main>
        </div>
    )
}

export default Hero
