import React from 'react';
import Layout from '@theme/Layout';
import styles from './download.module.css';

export default function Download(): JSX.Element {
  return (
    <Layout title="Download Clustron" description="Download Clustron binaries">

      <div className={styles.container}>

        <h1>Download Clustron</h1>
        <p className={styles.subtitle}>
          Get the latest Clustron binaries for your platform.
        </p>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>Windows</h3>
            <p>x64</p>
            <a
              className="button button--primary"
               href="/download/windows"
            >
              Download
            </a>
          </div>

          <div className={styles.card}>
            <h3>Linux</h3>
            <p>x64</p>
            <button
              className="button button--secondary"
              disabled
            >
              Coming Soon
            </button>
          </div>

        </div>

        <div className={styles.releases}>
          <a
            href="https://github.com/zeroheartbeat/clustron-dkv/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Releases →
          </a>
        </div>

      </div>

    </Layout>
  );
}