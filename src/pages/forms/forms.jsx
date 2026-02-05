import React, { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import emailjs from "emailjs-com";

const Forms = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Le nom est requis";
    }
    
    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email invalide";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Le message doit contenir au moins 10 caractères";
    }
    
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setFormErrors({});

    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
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
        setTimeout(() => setIsSubmitted(false), 4000);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Erreur d'envoi :", error);
        let errorMessage = "Une erreur s'est produite lors de l'envoi.";
        
        if (error.status === 400) {
          errorMessage = "Erreur: Vérifiez vos identifiants EmailJS";
        } else if (error.status === 401) {
          errorMessage = "Erreur: Clé publique EmailJS invalide";
        } else if (error.status === 422) {
          errorMessage = "Erreur: Les données envoyées sont invalides";
        } else if (error.text === "Invalid template id") {
          errorMessage = "Erreur: Template ID invalide";
        } else if (error.text === "Invalid service id") {
          errorMessage = "Erreur: Service ID invalide";
        } else if (!navigator.onLine) {
          errorMessage = "Erreur: Vérifiez votre connexion Internet";
        }
        
        setError(errorMessage);
        setTimeout(() => setError(null), 5000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-gradient-to-r from-emerald-500/90 to-teal-500/90 backdrop-blur-xl border-2 border-emerald-400/50 text-white px-8 py-4 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">✅</span>
              <div>
                <p className="font-bold text-lg">Message envoyé avec succès!</p>
                <p className="text-sm text-emerald-100">Je vous répondrai très bientôt</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-gradient-to-r from-red-500/90 to-rose-500/90 backdrop-blur-xl border-2 border-red-400/50 text-white px-8 py-4 rounded-2xl shadow-2xl max-w-md">
            <div className="flex items-center gap-3">
              <span className="text-3xl">❌</span>
              <div>
                <p className="font-bold text-lg">Erreur d'envoi</p>
                <p className="text-sm text-red-100">{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <div className="max-w-2xl mx-auto relative z-10">
        <form 
          className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-12 shadow-2xl transform transition-all duration-700 overflow-hidden ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          onSubmit={handleSubmit}
          ref={ref}
        >
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-600/10 to-pink-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent mb-3 font-lobster">
                Get in Touch
              </h2>
              <p className="text-slate-400 text-lg">I'd love to hear from you! ✉️</p>
            </div>

            {/* Name */}
            <div className="mb-6 group">
              <label htmlFor="name" className="block text-slate-300 font-semibold mb-2 group-focus-within:text-red-400 transition-colors">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-900/50 backdrop-blur-sm border-2 text-white rounded-xl focus:outline-none transition-all placeholder-slate-500 hover:border-slate-600 ${
                  formErrors.name
                    ? "border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-600/20"
                    : "border-slate-700 focus:border-red-500 focus:ring-4 focus:ring-red-500/20"
                }`}
                placeholder="Enter your name"
              />
              {formErrors.name && (
                <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                  <span>⚠️</span> {formErrors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-6 group">
              <label htmlFor="email" className="block text-slate-300 font-semibold mb-2 group-focus-within:text-red-400 transition-colors">
                E-mail Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-900/50 backdrop-blur-sm border-2 text-white rounded-xl focus:outline-none transition-all placeholder-slate-500 hover:border-slate-600 ${
                  formErrors.email
                    ? "border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-600/20"
                    : "border-slate-700 focus:border-red-500 focus:ring-4 focus:ring-red-500/20"
                }`}
                placeholder="your.email@example.com"
              />
              {formErrors.email && (
                <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                  <span>⚠️</span> {formErrors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-8 group">
              <label htmlFor="message" className="block text-slate-300 font-semibold mb-2 group-focus-within:text-red-400 transition-colors">
                Message * ({formData.message.length}/100)
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                maxLength="500"
                className={`w-full px-4 py-3 bg-slate-900/50 backdrop-blur-sm border-2 text-white rounded-xl focus:outline-none transition-all placeholder-slate-500 hover:border-slate-600 resize-none ${
                  formErrors.message
                    ? "border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-600/20"
                    : "border-slate-700 focus:border-red-500 focus:ring-4 focus:ring-red-500/20"
                }`}
                placeholder="Write your message here..."
              />
              {formErrors.message && (
                <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                  <span>⚠️</span> {formErrors.message}
                </p>
              )}
              <p className="text-slate-500 text-xs mt-1">Min. 10 caractères, Max. 500</p>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              aria-label="Send contact form"
              className="group relative w-full px-6 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-red-600/50 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 text-lg overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="text-xl">🚀</span>
                  </>
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forms;
