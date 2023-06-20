import React, { useState, useEffect } from "react";
import "./Edit_User.css";

const Edit_User = ({ user, updateUser, closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }
    if (!isValidPhone(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }
    const updatedUser = { id: user.id, name, email, phone };
    updateUser(updatedUser);
    closeModal();
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setPhoneError("");
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  return (
    <form className="edit-user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        {phoneError && <p className="error">{phoneError}</p>}
      </div>
      <div className="button-container">
        <button className="button" type="submit">
          Update
        </button>
        <button className="button" onClick={closeModal}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Edit_User;
