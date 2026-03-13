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

        {/* Header */}

        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>

          <h1 style={{ fontSize: 40 }}>
            🎉 Download Started
          </h1>

          <p style={{ fontSize: 18, color: "#475569" }}>
            Thank you for downloading <strong>Clustron DKV</strong>.
          </p>

          <p style={{ marginTop: 10 }}>
            Your download should begin automatically.
          </p>

          <a
            href={downloadUrl}
            className="button button--primary button--lg"
            style={{ marginTop: 20 }}
          >
            Download Again
          </a>

        </div>

        {/* Next Steps */}

        <div
          style={{
            maxWidth: 900,
            margin: "60px auto 0",
            padding: 40,
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: 12
          }}
        >

          <h2 style={{ textAlign: "center", marginBottom: 30 }}>
            Next Steps
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 20
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
              <p>Understand how Clustron distributes data across nodes.</p>
            </Link>

            <Link
              className="card padding--md"
              to="/docs/clustron/dkv/overview/"
            >
              <h3>Documentation</h3>
              <p>Explore guides for developers and operators.</p>
            </Link>

            <Link
              className="card padding--md"
              to="/docs/clustron/dkv/powershell-cli/overview/"
            >
              <h3>PowerShell CLI</h3>
              <p>Manage clusters and stores from the command line.</p>
            </Link>
			
			<a
			  className="card padding--md"
			  href="https://github.com/zeroheartbeat/clustron-dkv/tree/main/Samples"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  <h3>Samples</h3>
			  <p>Explore ready-to-run examples demonstrating Clustron features.</p>
			</a>

          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>

            <Link
              className="button button--secondary button--lg"
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