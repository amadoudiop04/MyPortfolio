import React, { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import emailjs from "emailjs-com";

const Forms = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-8">
      {/* Success Message */}
      {isSubmitted && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 px-6 py-4 rounded-lg shadow-lg animate-pulse">
          🎉 Message sent successfully!
        </div>
      )}

      {/* Form */}
      <div className="max-w-2xl mx-auto">
        <form 
          className={`bg-gradient-to-br from-slate-800 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 sm:p-12 shadow-2xl transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          onSubmit={handleSubmit}
          ref={ref}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 font-lobster">
            Leave me a message ✉️
          </h2>

          {/* Civility */}
          <div className="mb-6">
            <label htmlFor="civility" className="block text-slate-300 font-semibold mb-2">
              Civility
            </label>
            <select
              id="civility"
              name="civility"
              value={formData.civility}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            >
              <option value="">--Choose--</option>
              <option value="madame">Ms.</option>
              <option value="monsieur">Mr.</option>
            </select>
          </div>

          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-slate-300 font-semibold mb-2">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-slate-300 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-slate-300 font-semibold mb-2">
              E-mail address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
          </div>

          {/* Address Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="postalCode" className="block text-slate-300 font-semibold mb-2">
                Postal code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-slate-300 font-semibold mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </div>

          {/* Age & Profession Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="age" className="block text-slate-300 font-semibold mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>
            <div>
              <label htmlFor="profession" className="block text-slate-300 font-semibold mb-2">
                Profession
              </label>
              <select
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              >
                <option value="">--Choose--</option>
                <option value="etudiant">Student</option>
                <option value="ingenieur">Engineer</option>
                <option value="medecin">Doctor</option>
                <option value="autre">Other</option>
              </select>
            </div>
          </div>

          {/* Place of dispatch */}
          <div className="mb-6">
            <label htmlFor="lieu" className="block text-slate-300 font-semibold mb-2">
              Place of dispatch
            </label>
            <select
              id="lieu"
              name="lieu"
              value={formData.lieu}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            >
              <option value="">--Choose--</option>
              <option value="france">France</option>
              <option value="belgique">Belgium</option>
              <option value="suisse">Switzerland</option>
              <option value="autre">Other</option>
            </select>
          </div>

          {/* Interests */}
          <fieldset className="mb-6 p-4 border border-slate-700 rounded-lg">
            <legend className="text-slate-300 font-semibold mb-4">Interests</legend>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="art"
                  checked={formData.interests.art}
                  onChange={handleChange}
                  className="w-4 h-4 bg-slate-900/50 border border-slate-600 rounded cursor-pointer checked:bg-indigo-600 checked:border-indigo-600"
                />
                <span className="ml-3 text-slate-300">Art</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="music"
                  checked={formData.interests.music}
                  onChange={handleChange}
                  className="w-4 h-4 bg-slate-900/50 border border-slate-600 rounded cursor-pointer checked:bg-indigo-600 checked:border-indigo-600"
                />
                <span className="ml-3 text-slate-300">Music</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="sport"
                  checked={formData.interests.sport}
                  onChange={handleChange}
                  className="w-4 h-4 bg-slate-900/50 border border-slate-600 rounded cursor-pointer checked:bg-indigo-600 checked:border-indigo-600"
                />
                <span className="ml-3 text-slate-300">Sport</span>
              </label>
            </div>
          </fieldset>

          {/* Message */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-slate-300 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder-slate-500"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            aria-label="Envoyer le formulaire de contact"
            className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Envoi en cours...
              </>
            ) : (
              "Envoyer un message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
