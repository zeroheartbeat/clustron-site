import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

/* -----------------------------
Analytics helper
------------------------------*/

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function trackEvent(name: string, params: any = {}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
}

/* ----------------------------- */

const installCode = `dotnet add package Clustron.DKV.Client`;

const inProcCode = `var services = new ServiceCollection()
    .AddClustronDkvStores(cfg =>
    {
        cfg.AddStore("demo", s => s.UseInProc());
    })
    .BuildServiceProvider();

var client = await services
    .GetRequiredService<IDkvClientProvider>()
    .GetAsync("demo");

await client.PutAsync("hello", "world");

var value = await client.GetAsync<string>("hello");`;

const remoteCode = `using Clustron.DKV.Client.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection()
    .AddClustronDkvStores(cfg =>
    {
        cfg.AddStore("teststore", s =>
        {
            s.UseRemote()
             .AddServer("localhost", 7861);
        });
    })
    .BuildServiceProvider();

var client = await services
    .GetRequiredService<IDkvClientProvider>()
    .GetAsync("teststore");

await client.PutAsync("hello", "world");

var value = await client.GetAsync<string>("hello");

Console.WriteLine(value);`;

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

        <div className="row">

          <div className="col col--6">

            <Heading as="h1" className={styles.heroTitle}>
              Clustron
            </Heading>

            <p className={styles.heroSubtitle}>
              Distributed Cache and Coordination Platform for .NET
            </p>

            <p className={styles.heroDescription}>
              Build reliable distributed systems using a high-performance
              key-value store with built-in coordination primitives like
              locks, leader election, transactions, and watches.
            </p>

            <div className={styles.heroButtons}>

              <Link
                className="button button--primary button--lg"
                to="/docs/clustron/dkv/getting-started/overview"
                onClick={() =>
                  trackEvent("docs_get_started", { location: "hero" })
                }>
                Get Started
              </Link>

              <Link
                className="button button--outline button--lg"
                href="https://github.com/zeroheartbeat/clustron-dkv"
                onClick={() =>
                  trackEvent("github_click", { location: "hero" })
                }>
                View on GitHub
              </Link>

            </div>

          </div>

          <div className="col col--6">

            <div className={styles.codeCard}>
              <CodeBlock language="csharp" title="QuickStart.cs">
                {inProcCode}
              </CodeBlock>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}

export default function Home(): ReactNode {

  return (
    <Layout
      title="Clustron - Distributed Cache and Coordination Platform for .NET"
      description="Clustron is a distributed cache and key-value platform for .NET that enables applications to form clusters, coordinate nodes, perform leader election, and manage distributed state with high performance.">

      <HomepageHeader />

      {/* Capability Strip */}

      <section className={styles.capabilityStrip}>
        <div className="container">
          <div className={styles.capabilityItems}>
            <span>Distributed Key-Value</span>
            <span>Leader Election</span>
            <span>Distributed Locks</span>
            <span>Transactions</span>
            <span>Watch Notifications</span>
            <span>TTL Scheduling</span>
          </div>
        </div>
      </section>

      {/* Positioning */}

      <section className={styles.positioningSection}>
        <div className="container text--center">

          <p className={styles.positioningText}>
            <strong>Clustron</strong> is a distributed coordination platform
            for modern <strong>.NET applications</strong>, providing primitives
            like distributed key-value storage, leader election, distributed
            locks, transactions, and watch notifications.
          </p>

          <p className={styles.positioningSubtext}>
            Similar to systems like etcd and Consul — but designed specifically
            for high-performance .NET workloads.
          </p>

        </div>
      </section>

      <main>

        <HomepageFeatures />

        {/* Architecture */}

        <section className={styles.archSection}>
          <div className="container text--center">

            <h2 className={styles.sectionTitle}>
              Clustron Architecture
            </h2>

            <p className={styles.archText}>
              Clustron provides a distributed coordination and key-value
              platform designed for building reliable distributed systems.
            </p>

            <img
              className={styles.archImage}
              src="/img/clustron-architecture.png"
              alt="Clustron DKV Architecture"
            />

          </div>
        </section>

        {/* Quick Start */}

        <section className={styles.quickStartSection}>
          <div className="container">

            <h2 className={styles.sectionTitle}>
              Get Started in 30 Seconds
            </h2>

            <p className={styles.quickStartIntro}>
              Install the .NET client and start using Clustron immediately.
            </p>

            <h3>1. Install the .NET Client</h3>

            <div
              onCopy={() =>
                trackEvent("nuget_install_copy", {
                  command: "dotnet add package Clustron.DKV.Client",
                })
              }
            >
              <CodeBlock language="bash" title="Install NuGet Package">
                {installCode}
              </CodeBlock>
            </div>

            <h3>2. Quick Start (Zero Setup)</h3>

            <CodeBlock language="csharp" showLineNumbers title="QuickStart_InProc.cs">
              {inProcCode}
            </CodeBlock>

            <h3>3. Connect to a Distributed Cluster</h3>

            <CodeBlock language="csharp" showLineNumbers title="QuickStart_Remote.cs">
              {remoteCode}
            </CodeBlock>

          </div>
        </section>

        {/* CTA */}

        <section className={styles.ctaSection}>
          <div className="container text--center">

            <Heading as="h2">
              Start building distributed systems today
            </Heading>

            <p className={styles.ctaSubtext}>
              Install the Clustron client and run your first distributed store in minutes.
            </p>

            <Link
              className="button button--primary button--lg"
              to="/docs/clustron/dkv/getting-started/overview"
              onClick={() =>
                trackEvent("cta_get_started", { location: "bottom" })
              }>
              Get Started
            </Link>

          </div>
        </section>

      </main>

    </Layout>
  );
}