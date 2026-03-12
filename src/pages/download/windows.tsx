import React, { useState } from "react";
import Layout from "@theme/Layout";
import { useHistory } from "@docusaurus/router";
import styles from "../download.module.css";

export default function WindowsDownload() {

  const history = useHistory();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: ""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!form.email) {
      alert("Email is required");
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

    if (!emailValid) {
      alert("Please enter a valid email");
      return;
    }

    // Send to Formspree
    await fetch("https://formspree.io/f/xnjgvqzg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        product: "Clustron DKV",
        platform: "Windows",
        version: "v0.2.1"
      })
    });

    // Redirect to thank you page
    history.push("/thank-you");

  };

  return (
    <Layout title="Download Clustron">

      <div className="container margin-top--xl margin-bottom--xl">

        <div style={{textAlign:"center", marginBottom:40}}>
          <h1>Download Clustron</h1>

          <p style={{fontSize:18, color:"#64748b"}}>
            Get the latest Clustron binaries for Windows.
          </p>
        </div>

        <div style={{
          maxWidth:520,
          margin:"0 auto",
          background:"#ffffff",
          border:"1px solid #e5e7eb",
          borderRadius:12,
          padding:40,
          boxShadow:"0 10px 30px rgba(0,0,0,0.05)"
        }}>

          <h3 style={{marginBottom:10}}>Before you download</h3>

          <p style={{color:"#64748b", marginBottom:30}}>
            Please share your details so we can notify you about updates,
            security patches, and new Clustron releases.
          </p>

          <form
            onSubmit={handleSubmit}
            className={styles["download-form"]}
          >

            <div className={styles["form-field"]}>
              <label>Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            </div>

            <div className={styles["form-field"]}>
              <label>Email *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            <div className={styles["form-field"]}>
              <label>Company</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="button button--primary button--lg"
              style={{marginTop:20}}
            >
              Download for Windows
            </button>

          </form>

        </div>

      </div>

    </Layout>
  );
}