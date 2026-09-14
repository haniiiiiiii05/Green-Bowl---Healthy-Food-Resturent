import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        terms: false
    });

    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        const newValue = type === "checkbox" ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue
        });

        let error = "";

        if (name === "name") {
            if (!newValue.trim()) {
                error = "Name is required";
            } else if (!/^[A-Za-z ]+$/.test(newValue)) {
                error = "Please enter a valid name";
            }
        }

        if (name === "email") {
            if (!newValue.trim()) {
                error = "Email is required";
            } else if (!/^[A-Za-z0-9._%+-]+@gmail\.com$/.test(newValue)) {
                error = "Please enter a valid Gmail address";
            }
        }

        if (name === "phone") {
            if (!newValue.trim()) {
                error = "Phone number is required";
            } else if (!/^[0-9]{10}$/.test(newValue)) {
                error = "Phone number must be 10 digits";
            }
        }

        if (name === "password") {
            if (!newValue) {
                error = "Password is required";
            } else if (newValue.length < 6) {
                error = "Password must be at least 6 characters";
            }
        }

        if (name === "confirmPassword") {
            if (!newValue) {
                error = "Please confirm your password";
            } else if (formData.password !== newValue) {
                error = "Passwords do not match";
            }
        }

        if (name === "terms") {
            if (!newValue) {
                error = "Please accept the Terms & Conditions";
            }
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (!/^[A-Za-z ]+$/.test(formData.name)) {
            newErrors.name = "Please enter a valid name";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[A-Za-z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
            newErrors.email = "Please enter a valid Gmail address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be 10 digits";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (!formData.terms) {
            newErrors.terms = "Please accept the Terms & Conditions";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {

            alert("Account created successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
                terms: false
            });

            setErrors({});

            setShowPassword(false);
            setShowConfirmPassword(false);
        }
    };

    return (
        <section className="signup-page">

            <div className="signup-container">

                <div className="signup-header">

                    <p>JOIN GREEN BOWL</p>

                    <h1>Create Your Account</h1>

                    <div className="signup-divider">
                        <span></span>
                        <b>✦</b>
                        <span></span>
                    </div>

                    <p className="signup-subtitle">
                        Create an account and enjoy fresh, healthy food.
                    </p>

                </div>

                <div className="signup-card">

                    <form onSubmit={handleSubmit}>

                        {/* Name */}
                        <div className="signup-field">

                            <label htmlFor="name">
                                Full Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                            />

                            {errors.name && (
                                <p className="signup-error">
                                    {errors.name}
                                </p>
                            )}

                        </div>


                        {/* Email */}
                        <div className="signup-field">

                            <label htmlFor="email">
                                Email Address
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your Gmail address"
                            />

                            {errors.email && (
                                <p className="signup-error">
                                    {errors.email}
                                </p>
                            )}

                        </div>


                        {/* Phone */}
                        <div className="signup-field">

                            <label htmlFor="phone">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter 10 digit phone number"
                            />

                            {errors.phone && (
                                <p className="signup-error">
                                    {errors.phone}
                                </p>
                            )}

                        </div>


                        {/* Password */}
                        <div className="signup-field">

                            <label htmlFor="password">
                                Password
                            </label>

                            <div className="password-box">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a password"
                                />

                                <button
                                    type="button"
                                    className="password-icon"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            {errors.password && (
                                <p className="signup-error">
                                    {errors.password}
                                </p>
                            )}

                        </div>


                        {/* Confirm Password */}
                        <div className="signup-field">

                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>

                            <div className="password-box">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm your password"
                                />

                                <button
                                    type="button"
                                    className="password-icon"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            {errors.confirmPassword && (
                                <p className="signup-error">
                                    {errors.confirmPassword}
                                </p>
                            )}

                        </div>


                        {/* Checkbox */}
                        <div className="signup-check">

                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                            />

                            <label htmlFor="terms">
                                I agree to the Terms & Conditions
                            </label>

                        </div>

                        {errors.terms && (
                            <p className="signup-error signup-terms-error">
                                {errors.terms}
                            </p>
                        )}


                        {/* Create Account */}
                        <button
                            type="submit"
                            className="signup-button"
                        >
                            CREATE ACCOUNT →
                        </button>


                        {/* Login */}
                        <p className="login-text">
                            Already have an account?
                            <a href="/login"> Login</a>
                        </p>


                        {/* Back Home */}
                        <Link
                            to="/"
                            className="back-home"
                        >
                            ← Back to Home
                        </Link>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default SignUp;