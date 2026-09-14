import React from 'react';
import './chose.css';

const features = [
    { icon: '🌱', title: 'Fresh\nIngredients' },
    { icon: '🌿', title: '100%\nNatural' },
    { icon: '💖', title: 'Healthy\nMeals' },
    { icon: '🚚', title: 'Fast\nDelivery' },
    { icon: '🥬', title: 'Fresh &\nQuality' },
    { icon: '🌾', title: 'Natural &\nOrganic' },
    { icon: '🥗', title: 'Nutritious\n& Tasty' },
    { icon: '⚡', title: 'Quick &\nFresh' },
];

const Chose = () => {
    return (
        <section className="choose">
            <div className="choose__header">
                <p className="choose__eyebrow">Why Choose Green Bowl?</p>
                <h2>Healthy choices made fresh for you every day.</h2>
            </div>

            <div className="choose__grid" aria-label="Why choose green bowl features">
                {features.map((item) => (
                    <div key={item.title} className="choose__item">
                        <span className="choose__icon" aria-hidden="true">{item.icon}</span>
                        <span className="choose__title">{item.title.split('\n').map((line, index) => (
                            <span key={line + index} className="choose__line">{line}</span>
                        ))}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Chose;
