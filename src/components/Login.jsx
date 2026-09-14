import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        let error = "";

        if (name === "email") {

            if (!value.trim()) {
                error = "Email is required";
            } else if (
                !/^[A-Za-z0-9._%+-]+@gmail\.com$/.test(value)
            ) {
                error = "Please enter a valid Gmail address";
            }
        }

        if (name === "password") {

            if (!value) {
                error = "Password is required";
            } else if (value.length < 6) {
                error = "Password must be at least 6 characters";
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

        // Email
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Za-z0-9._%+-]+@gmail\.com$/.test(formData.email)
        ) {
            newErrors.email = "Please enter a valid Gmail address";
        }

        // Password
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password =
                "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {

            alert("Login successful!");

            setFormData({
                email: "",
                password: ""
            });

            setErrors({});
            setShowPassword(false);
        }
    };


    return (
        <section className="login-page">

            <div className="login-container">

                {/* Header */}
                <div className="login-header">

                    <p>WELCOME BACK</p>

                    <h1>Login to Green Bowl</h1>

                    <div className="login-divider">
                        <span></span>
                        <b>✦</b>
                        <span></span>
                    </div>

                    <p className="login-subtitle">
                        Login to continue enjoying fresh, healthy food.
                    </p>

                </div>


                {/* Login Card */}
                <div className="login-card">

                    <form onSubmit={handleSubmit}>

                        {/* Email */}
                        <div className="login-field">

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
                                <p className="login-error">
                                    {errors.email}
                                </p>
                            )}

                        </div>


                        {/* Password */}
                        <div className="login-field">

                            <label htmlFor="password">
                                Password
                            </label>

                            <div className="login-password-box">

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                />

                                <button
                                    type="button"
                                    className="login-password-icon"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword
                                        ? <FaEyeSlash />
                                        : <FaEye />
                                    }
                                </button>

                            </div>

                            {errors.password && (
                                <p className="login-error">
                                    {errors.password}
                                </p>
                            )}

                        </div>


                        {/* Forgot Password */}
                        <div className="forgot-password">
                            <a href="/forgot-password">
                                Forgot Password?
                            </a>
                        </div>


                        {/* Login Button */}
                        <button
                            type="submit"
                            className="login-button"
                        >
                            LOGIN →
                        </button>


                        {/* Sign Up */}
                        <p className="signup-text">
                            Don't have an account?
                            <Link to="/signup">
                                {" "}Sign Up
                            </Link>
                        </p>


                        {/* Back Home */}
                        <Link
                            to="/"
                            className="login-back-home"
                        >
                            ← Back to Home
                        </Link>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default Login;