import React, { useState } from "react";
import Layout from "@theme/Layout";

export default function Contact() {

  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mzdjrlpz", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      setSent(true);
      form.reset();
    }
  }

  return (
    <Layout title="Contact Us">

      <div className="contact-page">

        <div className="contact-left">

          <h1>Contact Us</h1>

          <p className="contact-subtitle">
            You'll hear from us within 24 hours.
          </p>

          <div className="contact-section">
            <h3>Need Support?</h3>
            <p>Visit our GitHub Discussions for help.</p>
          </div>

          <div className="contact-section">
            <h3>Consulting</h3>
            <p>Let us help you design reliable distributed systems.</p>
          </div>

        </div>


        <div className="contact-form-card">

          <h2>Get in touch</h2>

          {sent ? (
            <p>✅ Thank you! Your message has been sent.</p>
          ) : (

            <form onSubmit={handleSubmit}>

              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <input
                type="hidden"
                name="_subject"
                value="Clustron Contact Request"
              />

              <label>Name</label>
              <input type="text" name="name" />

              <label>Email *</label>
              <input type="email" name="email" required />

              <label>Company</label>
              <input type="text" name="company" />

              <label>Comments *</label>
              <textarea name="comments" rows={5} required />

              <button type="submit">
                Send Message
              </button>

            </form>
          )}

        </div>

      </div>

    </Layout>
  );
}