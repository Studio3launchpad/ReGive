import React, { useState } from "react";
import "../styles/SafetyPage.css"; // Import the CSS

const ReportForm = () => {
  const [formData, setFormData] = useState({
    issueType: "",
    userOrListingId: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Report submitted successfully!");
    // Optionally, reset form
    setFormData({
      issueType: "",
      userOrListingId: "",
      description: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-header">
          <h2>Report a Concern</h2>
          <p>
            If you've encountered something that doesn't feel right, let us know. All reports
            are reviewed confidentially.
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="issueType">Issue Type</label>
          <input
            type="text"
            id="issueType"
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            placeholder="e.g., Spam, Harassment"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="userOrListingId">User or Listing ID (if applicable)</label>
          <input
            type="text"
            id="userOrListingId"
            name="userOrListingId"
            value={formData.userOrListingId}
            onChange={handleChange}
            placeholder="e.g., user123 or listing456"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Please provide details about your concern."
            rows={4}
            required
          ></textarea>
        </div>

        <div className="form-footer-message">
          <p>
            For urgent safety concerns, please contact local authorities. Our team will review
            your report within 24 hours.
          </p>
        </div>

        <button type="submit" className="submit-button">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
