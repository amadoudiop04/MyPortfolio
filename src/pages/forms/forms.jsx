import React, { useState } from "react";
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
    birthDate: "",
    profession: "",
    country: "",
    interests: {
      art: false,
      music: false,
      sport: false,
    },
  });

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
    console.log("Form Data:", formData);
    alert("Formulaire soumis avec succès !");
  };

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
      aria-labelledby="formTitle"
    >
      <h2 id="formTitle" className="form-title">
        Formulaire d'inscription
      </h2>

      <div className="form-group">
        <label htmlFor="civility">Civilité</label>
        <select
          id="civility"
          name="civility"
          value={formData.civility}
          onChange={handleChange}
        >
          <option value="">--Choisir--</option>
          <option value="madame">Madame</option>
          <option value="monsieur">Monsieur</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
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
        <label htmlFor="email">Adresse e-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-describedby="emailHelp"
        />
        <small id="emailHelp">Nous ne partagerons jamais votre email.</small>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="postalCode">Code postal</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Ville</label>
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
          <label htmlFor="age">Âge</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Date de naissance</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="profession">Profession</label>
        <select
          id="profession"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
        >
          <option value="">--Choisir--</option>
          <option value="etudiant">Étudiant</option>
          <option value="ingenieur">Ingénieur</option>
          <option value="medecin">Médecin</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="country">Pays</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">--Choisir--</option>
          <option value="france">France</option>
          <option value="belgique">Belgique</option>
          <option value="suisse">Suisse</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <fieldset className="form-group">
        <legend>Centres d’intérêt</legend>
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
            Musique
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

      <button type="submit" className="submit-button">
        S'inscrire
      </button>
    </form>
  );
};

export default Forms;
