import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BookTable.css";

const BookTable = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        let error = "";

        if (name === "name") {
            if (!value.trim()) {
                error = "Name is required";
            } else if (!/^[A-Za-z ]+$/.test(value)) {
                error = "Please enter a valid name";
            }
        }

        if (name === "email") {
            if (!value.trim()) {
                error = "Email is required";
            } else if (!/^[A-Za-z0-9._%+-]+@gmail\.com$/.test(value)) {
                error = "Please enter a valid Gmail address";
            }
        }

        if (name === "phone") {
            if (!value.trim()) {
                error = "Phone number is required";
            } else if (!/^[0-9]{10}$/.test(value)) {
                error = "Phone number must be 10 digits";
            }
        }

        if (name === "date" && !value) {
            error = "Please select a date";
        }

        if (name === "time" && !value) {
            error = "Please select a time";
        }

        if (name === "guests" && !value) {
            error = "Please select number of guests";
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

        if (!formData.date) {
            newErrors.date = "Please select a date";
        }

        if (!formData.time) {
            newErrors.time = "Please select a time";
        }

        if (!formData.guests) {
            newErrors.guests = "Please select number of guests";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Table booked successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                date: "",
                time: "",
                guests: "",
                message: ""
            });

            setErrors({});
        }
    };

    return (
        <div className="book-page">

            <div className="book-card">

                <div className="book-header">
                    <span>RESERVE YOUR TABLE</span>
                    <h1>Book a Table</h1>
                    <p>
                        Enjoy fresh, healthy food in a peaceful Green Bowl
                        atmosphere.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>

                    {/* Name */}
                    <div className="book-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        {errors.name && (
                            <p className="book-error">{errors.name}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="book-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your Gmail address"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        {errors.email && (
                            <p className="book-error">{errors.email}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="book-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Enter 10-digit phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        {errors.phone && (
                            <p className="book-error">{errors.phone}</p>
                        )}
                    </div>

                    <div className="book-row">

                        {/* Date */}
                        <div className="book-group">
                            <label>Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                            />

                            {errors.date && (
                                <p className="book-error">{errors.date}</p>
                            )}
                        </div>

                        {/* Time */}
                        <div className="book-group">
                            <label>Time</label>
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                            />

                            {errors.time && (
                                <p className="book-error">{errors.time}</p>
                            )}
                        </div>

                    </div>

                    {/* Guests */}
                    <div className="book-group">
                        <label>Number of Guests</label>

                        <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                        >
                            <option value="">Select guests</option>
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6 Guests</option>
                            <option value="7">7 Guests</option>
                            <option value="8">8 Guests</option>
                        </select>

                        {errors.guests && (
                            <p className="book-error">{errors.guests}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div className="book-group">
                        <label>Special Request <span>(Optional)</span></label>

                        <textarea
                            name="message"
                            rows="3"
                            placeholder="Any special request..."
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="book-btn">
                        Book a Table
                    </button>

                </form>

                <Link to="/" className="back-home">
                    ← Back to Home
                </Link>

            </div>

        </div>
    );
};

export default BookTable;