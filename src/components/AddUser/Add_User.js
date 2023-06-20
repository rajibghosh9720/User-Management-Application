import React, { useState } from "react";
import "./Add_User.css";

const Add_User = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError("Please enter a name");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!isValidPhone(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
    };

    addUser(newUser);

    setName("");
    setEmail("");
    setPhone("");
    setNameError("");
    setEmailError("");
    setPhoneError("");
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError("");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError("");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const formattedValue = value.replace(/\D/g, "");

    if (formattedValue.length > 10) {
      setPhone(formattedValue.slice(0, 10));
    } else {
      setPhone(formattedValue);
    }

    setPhoneError("");
  };

  const isValidEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
  };

  const isValidPhone = (value) => {
    const pattern = /^\d{10}$/;
    return pattern.test(value);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-container">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        {nameError && <p className="error">{nameError}</p>}
      </div>
      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <div className="input-container">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
          inputMode="numeric"
          pattern="[0-9]*"
        />
        {phoneError && <p className="error">{phoneError}</p>}
      </div>
      <button type="submit" className="add-user-button">
        Add User
      </button>
    </form>
  );
};

export default Add_User;
