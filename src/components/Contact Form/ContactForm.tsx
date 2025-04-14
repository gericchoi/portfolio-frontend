import React, { useState } from "react";
import { Mail, User, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setResponseMessage("Email sent successfully!");
      } else {
        setResponseMessage("Failed to send email.");
      }
    } catch (error: unknown) {
      const errMsg = error instanceof Error ? error.message : String(error);
      setResponseMessage("Error: " + errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container px-3 py-4" style={{ maxWidth: "500px" }}>
      <h4 className="mb-3 text-center">Send me an email.</h4>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="input-group mb-3">
          <span className="input-group-text border-end-0 theme-icon-bg">
            <User size={16} className="theme-icon" />
          </span>
          <input
            type="text"
            className="form-control form-control-sm border-start-0"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text border-end-0 theme-icon-bg">
            <Mail size={16} className="theme-icon" />
          </span>
          <input
            type="email"
            className="form-control form-control-sm border-start-0"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text border-end-0 theme-icon-bg">
            <MessageCircle size={16} className="theme-icon" />
          </span>
          <textarea
            className="form-control form-control-sm border-start-0"
            placeholder="Message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="submit-button d-grid gap-2">
          <button
            type="submit"
            className="btn btn-dark btn-sm btn-circle small-submit-btn"
            disabled={loading}
          >
            {loading ? "..." : <span className="submit-text">Submit</span>}
          </button>
        </div>
      </form>

      {responseMessage && (
        <div className="alert alert-info mt-3 p-2 small" role="alert">
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default ContactPage;
