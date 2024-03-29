import React from "react";
// import { Link } from "react-router-dom";
import "./ContactForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { name, email, phone, message } = data;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://v1.nocodeapi.com/vishwajamnik/google_sheets/PLUbWqGivMyBewSI?tabId=contactform",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[name, email, phone, message]]),
        },
        alert("Your Record saved Successfully, We will Contact You soon")
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <div className="contact-form">
        <div className="Heading">
          <h2> Please Add Your Details </h2>{" "}
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            required
            value={name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder=" Email"
            autoComplete="off"
            required
            value={email}
            onChange={handleChange}
          />

          <input
            type="phone"
            name="phone"
            placeholder=" Mobile Number"
            autoComplete="off"
            required
            value={phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder=" Message"
            cols={30}
            rows={6}
            autoComplete="off"
            required
            value={message}
            onChange={handleChange}
          ></textarea>
          <div className="button">
            <button>Submit</button>
          </div>
        </form>
        {/* <div className="Btns" style={{ marginBottom: 15 }}>
            <Link to="/" className="btn">
              Submit
            </Link>
          </div> */}
      </div>
    </div>
  );
};

export default ContactForm;
