import React from "react";
import "./FreelanceJobForm.css"; // Import the CSS file for the component

function FreelanceJobForm() {
  return (
    <div className="freelance-job-form">
      <h2>Freelance Job Form</h2>
      <br/>
      {/* Describe Your Job Section */}
      <div className="describe-job-section">
        <h3>Describe Your Job</h3>
        <label>
          Job Title/Position:
          <input type="text" name="jobTitle" /> 
        </label>
        <br/>
        <label>
          Job Description:
          <textarea name="description" />
        </label>
        <br/>
        <label>
          Skills:
          <input type="text" name="skills" />
        </label>
      </div>

      {/* Projection Conditions Section */}
      <div className="projection-conditions-section">
        <h3>Projection Conditions</h3>
        <label>
          Project Length:
          <input type="text" name="projectLength" />
        </label>
        <br/>
        <label>
          Payment:
          <input type="text" name="minPayment" placeholder="Min" />
          <input type="text" name="maxPayment" placeholder="Max" />
        </label>
        <br/>
        <label>
          Working Hours:
          <input type="text" name="workingHours" />
        </label>
      </div>

      {/* Add more form fields as needed */}
      <button>Post Job</button>
    </div>
  );
}

export default FreelanceJobForm;

