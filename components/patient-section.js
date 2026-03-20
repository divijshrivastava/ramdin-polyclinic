"use client";

import { useState } from "react";
import {
  bookingSteps,
  consultationHours,
  contactDetails,
  departmentPills,
  departments,
  patientChecklist,
  patientStories,
  timeSlots,
} from "../lib/site-data";
import { Reveal } from "./reveal";

const initialForm = {
  name: "",
  phone: "",
  department: "",
  date: "",
  time: "",
};

export function PatientSection() {
  const [formData, setFormData] = useState(initialForm);
  const [selectedDepartment, setSelectedDepartment] = useState(departmentPills[0].value);
  const [feedback, setFeedback] = useState("");

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleDepartmentPick = (value) => {
    setSelectedDepartment(value);
    setFormData((current) => ({ ...current, department: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const department = formData.department || selectedDepartment;

    setFeedback(
      `Request captured for ${formData.name} in ${department} on ${formData.date}. A coordinator will follow up to confirm the slot.`,
    );
    setFormData({ ...initialForm, department: selectedDepartment });
  };

  return (
    <section className="section patient-section" id="patient-info" data-section>
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">Patient Portal</p>
          <h2>Everything needed to prepare for a smooth visit.</h2>
        </div>
        <p>
          The patient-info screen introduced hours, preparation guidance, booking flow, and
          contact details. This local build keeps those pieces usable and editable.
        </p>
      </Reveal>

      <Reveal as="article" className="patient-mobile-hero">
        <div>
          <p className="eyebrow eyebrow-dark">Current Status: Open</p>
          <h3>Consultation Hours</h3>
        </div>
        <dl className="patient-mobile-hours">
          {consultationHours.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="patient-grid">
        <Reveal as="article" className="surface-card">
          <h3>Consultation Hours</h3>
          <dl className="hours-list">
            {consultationHours.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal as="article" className="surface-card">
          <h3>What to Bring</h3>
          <ul className="check-list">
            {patientChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="article" className="surface-card">
          <h3>Booking Flow</h3>
          <ol className="step-list">
            {bookingSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Reveal>
      </div>

      <Reveal as="section" className="patient-stories" aria-labelledby="patient-stories-heading">
        <div className="patient-stories__header">
          <p className="eyebrow eyebrow-muted">What Patients Say</p>
          <h3 id="patient-stories-heading">Booking confidence comes from lived experience.</h3>
        </div>
        <div className="patient-stories__grid">
          {patientStories.map((story) => (
            <article key={story.author} className="patient-quote">
              <div className="story-stars" aria-hidden="true">
                ★★★★★
              </div>
              <p>{story.quote}</p>
              <strong>{story.author}</strong>
            </article>
          ))}
        </div>
      </Reveal>

      <div className="appointment-grid">
        <Reveal as="article" className="surface-card" id="appointment">
          <p className="eyebrow eyebrow-muted">Request Appointment</p>
          <h3>Submit a guided booking request.</h3>
          <form className="appointment-form" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleFieldChange}
              />
            </label>
            <label>
              Phone Number
              <input
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
                value={formData.phone}
                onChange={handleFieldChange}
              />
            </label>
            <label>
              Preferred Department
              <select
                name="department"
                required
                value={formData.department}
                onChange={handleFieldChange}
              >
                <option value="">Choose a department</option>
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </label>

            <div className="appointment-pills" aria-label="Quick specialty choices">
              {departmentPills.map((pill) => (
                <button
                  key={pill.value}
                  type="button"
                  className={`appointment-pill ${
                    selectedDepartment === pill.value ? "is-active" : ""
                  }`}
                  onClick={() => handleDepartmentPick(pill.value)}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            <label>
              Preferred Date
              <input
                name="date"
                type="date"
                required
                value={formData.date}
                onChange={handleFieldChange}
              />
            </label>
            <label>
              Time Preference
              <select name="time" required value={formData.time} onChange={handleFieldChange}>
                <option value="">Choose a slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>
            <button className="button button-primary" type="submit">
              Confirm Request
            </button>
            <p className="form-feedback" aria-live="polite">
              {feedback}
            </p>
          </form>
        </Reveal>

        <Reveal as="aside" className="contact-panel">
          <div className="surface-card">
            <p className="eyebrow eyebrow-muted">Contact Details</p>
            <h3>Andheri West Clinic</h3>
            <address>
              4th Floor, Medical Arts Building
              <br />
              SV Road, Andheri West, Mumbai
              <br />
              Maharashtra - 400058
            </address>
            <ul className="contact-list">
              {contactDetails.map((detail) => (
                <li key={detail.label}>
                  <strong>{detail.label}</strong>
                  <span>{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="map-card">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGXAiBxmhF7ewdS3npD2k_3N_3yo9KIbx_h0iVnnSYpawx7XkR-Wo8Rxxnma25o6o9lrIp5cQ1SuNFhiokM6CW6ibl0LBRplPae8AzKfnDWC1DFv79pHDzzbSFVQKHNG9ADmayFTQ8G1Wct5B0qy_pMwtwY1VjHLnQ5ljSXdyGhIbClPz_aBgrix2vNsY_b_lTzqjlRS-DTk6zGEOA_sZVp__mYtcbUCekW_DnW05wwA5kCs20_RQ29SvIZqDXKEn0OqcTK6eebA"
              alt="Map illustration for Andheri West"
            />
            <div className="map-overlay glass-card">
              <span>Andheri West Clinic</span>
              <a href="#appointment">Coordinate your visit</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
