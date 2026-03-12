import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function ThankYou() {

  const downloadUrl =
    "https://github.com/zeroheartbeat/clustron-dkv/releases/download/v0.2.1/clustron-dkv-0.2.0-win-x64.zip";

  useEffect(() => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <Layout title="Download Started">

      <div className="container margin-top--xl margin-bottom--xl">

        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>

          <h1>Download Started</h1>

          <p style={{ fontSize: 18, color: "#475569" }}>
            Thank you for downloading <strong>Clustron</strong>.
          </p>

          <p>Your download should begin automatically.</p>

          <p style={{ marginBottom: 40 }}>
            If it doesn't start,
            <a href={downloadUrl} style={{ marginLeft: 6 }}>
              click here to download manually
            </a>.
          </p>

        </div>

        {/* Next Steps */}

        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            padding: 40,
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: 12
          }}
        >

          <h2 style={{ textAlign: "center", marginBottom: 30 }}>
            Next Steps
          </h2>

          {/* Resource Cards */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 20,
              marginTop: 30
            }}
          >

            <Link
              className="card padding--md"
              to="/docs/clustron/dkv/getting-started/overview/"
            >
              <h3>Quick Start</h3>
              <p>Run your first Clustron store in minutes.</p>
            </Link>

            <Link
              className="card padding--md"
              to="/docs/clustron/dkv/architecture/overview/"
            >
              <h3>Architecture</h3>
              <p>Learn how Clustron distributes data and coordinates nodes.</p>
            </Link>

            <Link
              className="card padding--md"
              to="/docs/clustron/dkv/overview/"
            >
              <h3>Documentation</h3>
              <p>Complete guides for developers and operators.</p>
            </Link>

            <Link
              className="card padding--md"
              to="/docs/clustron/dkv/powershell-cli/overview/"
            >
              <h3>PowerShell CLI</h3>
              <p>Manage stores and clusters using Clustron CLI tools.</p>
            </Link>

          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>

            <Link
              className="button button--primary button--lg"
              to="/docs/clustron/dkv/getting-started/overview/"
            >
              View Installation Guide
            </Link>

          </div>

        </div>

      </div>

    </Layout>
  );
}