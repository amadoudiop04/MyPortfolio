import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./forms.css";

const Forms = () => {
  const [formData, setFormData] = useState({
    civility: "",
    firstName: "",
    lastName: "",
    email: "",
    postalCode: "",
    city: "",
    age: "",
    profession: "",
    lieu: "",
    message: "",
    interests: {
      art: false,
      music: false,
      sport: false,
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interests: {
          ...prev.interests,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      civility: formData.civility,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      postalCode: formData.postalCode,
      city: formData.city,
      age: formData.age,
      profession: formData.profession,
      lieu: formData.lieu,
      message: formData.message,
      interests: Object.entries(formData.interests)
        .filter(([_, value]) => value)
        .map(([key]) => key)
        .join(", "),
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({
          civility: "",
          firstName: "",
          lastName: "",
          email: "",
          postalCode: "",
          city: "",
          age: "",
          profession: "",
          lieu: "",
          message: "",
          interests: {
            art: false,
            music: false,
            sport: false,
          },
        });
      })
      .catch((error) => {
        console.error("Sending error :", error);
        alert("An error occurred during transmission.");
      });
  };

  return (
    <>
      {isSubmitted && (
        <div className="success-message">
          🎉 Message sent successfully!
        </div>
      )}
      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="form-title">Leave me a message ✉️</h2>

        <div className="form-group">
          <label htmlFor="civility">Civility</label>
          <select
            id="civility"
            name="civility"
            value={formData.civility}
            onChange={handleChange}
          >
            <option value="">--Choose--</option>
            <option value="madame">Ms.</option>
            <option value="monsieur">Mr.</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="postalCode">Postal code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="profession">Profession</label>
            <select
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            >
              <option value="">--Choose--</option>
              <option value="etudiant">Student</option>
              <option value="ingenieur">Engineer</option>
              <option value="medecin">Doctor</option>
              <option value="autre">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="lieu">Place of dispatch</label>
          <select
            id="lieu"
            name="lieu"
            value={formData.lieu}
            onChange={handleChange}
          >
            <option value="">--Choose--</option>
            <option value="france">France</option>
            <option value="belgique">Belgium</option>
            <option value="suisse">Switzerland</option>
            <option value="autre">Other</option>
          </select>
        </div>

        <fieldset className="form-group">
          <legend>Interests</legend>
          <div className="checkbox-group">
            <label htmlFor="art">
              <input
                type="checkbox"
                id="art"
                name="art"
                checked={formData.interests.art}
                onChange={handleChange}
              />
              Art
            </label>
            <label htmlFor="music">
              <input
                type="checkbox"
                id="music"
                name="music"
                checked={formData.interests.music}
                onChange={handleChange}
              />
              Music
            </label>
            <label htmlFor="sport">
              <input
                type="checkbox"
                id="sport"
                name="sport"
                checked={formData.interests.sport}
                onChange={handleChange}
              />
              Sport
            </label>
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Contact
        </button>
      </form>
    </>
  );
};

export default Forms;
