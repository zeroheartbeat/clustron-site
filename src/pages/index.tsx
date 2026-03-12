import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

        <Heading as="h1" className="hero__title">
          Clustron
        </Heading>

        <p className="hero__subtitle">
          Distributed Coordination & Key-Value Platform
        </p>

        <p style={{fontSize: "1.2rem", marginTop: "1rem"}}>
          Build reliable distributed systems using a high-performance
          distributed key-value store with built-in coordination primitives.
        </p>

        <div style={{marginTop: "2rem"}}>

          <Link
			  className="button button--cta button--lg"
			  to="/docs/clustron/dkv/getting-started/overview">
			  Get Started
			</Link>

          <Link
            className="button button--outline button--lg"
            style={{marginLeft: "1rem"}}
            href="https://github.com/zeroheartbeat/clustron-dkv">
            View on GitHub
          </Link>

        </div>

      </div>
    </header>
  );
}

export default function Home(): ReactNode {

  return (
    <Layout
      title="Clustron"
      description="Distributed coordination and key-value platform for modern distributed systems">

      <HomepageHeader />

      {/* Capability Strip */}
      <section
        className="capability-strip"
        style={{
          padding: "20px 0",
          borderBottom: "1px solid var(--ifm-color-emphasis-200)",
          textAlign: "center",
          fontWeight: 500
        }}
      >
        <div className="container">

          <span>Distributed Key-Value</span>
          <span>Leader Election</span>
          <span>Distributed Locks</span>
          <span>Transactions</span>
          <span>Watch Notifications</span>
          <span>TTL Scheduling</span>

        </div>
      </section>


      {/* Positioning Section */}
      <section
        style={{
          padding: "40px 0",
          textAlign: "center",
          background: "var(--ifm-color-emphasis-100)"
        }}
      >
        <div className="container">

          <p
            style={{
              fontSize: "1.3rem",
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}
          >
            <strong>Clustron</strong> is a distributed coordination platform for modern
            <strong> .NET applications</strong>, providing primitives like distributed
            key-value storage, leader election, distributed locks, transactions,
            and watch notifications.
          </p>

          <p style={{marginTop: "1rem", opacity: 0.8}}>
            Similar to systems like etcd and Consul — but designed specifically
            for high-performance .NET workloads.
          </p>

        </div>
      </section>


      <main>

        {/* Features */}
        <HomepageFeatures />


        {/* Architecture */}
        <section style={{textAlign: "center", marginTop: "4rem"}}>
          <div className="container">

            <h2>Clustron Architecture</h2>

            <p style={{maxWidth: "700px", margin: "0 auto"}}>
              Clustron DKV provides a distributed coordination and key-value
              platform designed for building reliable distributed systems.
            </p>

            <img
              className="arch-image"
              src="/img/clustron-architecture.png"
              alt="Clustron DKV Architecture"
              style={{
                marginTop: "2rem",
                maxWidth: "900px",
                width: "100%"
              }}
            />

          </div>
        </section>


        {/* Use Cases */}
        <section style={{marginTop: "5rem"}}>
          <div className="container">

            <h2 style={{textAlign: "center"}}>What You Can Build with Clustron</h2>

            <p style={{textAlign: "center", maxWidth: "700px", margin: "0 auto"}}>
              Clustron provides distributed primitives that allow developers to
              build reliable distributed systems without reinventing coordination logic.
            </p>

            <div className="row" style={{marginTop: "2rem"}}>

              <div className="col col--4">
                <h3>Leader Election</h3>
                <p>Elect leaders among service instances using distributed leases.</p>
              </div>

              <div className="col col--4">
                <h3>Distributed Locks</h3>
                <p>Coordinate access to shared resources across services.</p>
              </div>

              <div className="col col--4">
                <h3>Job Queues</h3>
                <p>Build distributed background job processing systems.</p>
              </div>

              <div className="col col--4">
                <h3>Rate Limiting</h3>
                <p>Implement distributed rate limits using counters and TTL.</p>
              </div>

              <div className="col col--4">
                <h3>Configuration Store</h3>
                <p>Store configuration centrally and react to changes.</p>
              </div>

              <div className="col col--4">
                <h3>Service Coordination</h3>
                <p>Synchronize distributed microservices using watchers and transactions.</p>
              </div>

            </div>

          </div>
        </section>


        {/* Why Clustron */}
        <section style={{marginTop: "5rem"}}>
          <div className="container">

            <h2 style={{textAlign: "center"}}>Why Clustron?</h2>

            <p style={{textAlign: "center", maxWidth: "750px", margin: "0 auto"}}>
              Clustron is designed specifically for modern .NET distributed systems,
              combining coordination primitives and a distributed key-value engine
              into a single lightweight platform.
            </p>

            <div className="row" style={{marginTop: "2rem"}}>

              <div className="col col--4">
                <h3>Built for .NET</h3>
                <p>
                  Native .NET client designed for high-performance workloads with
                  first-class async APIs and modern runtime support.
                </p>
              </div>

              <div className="col col--4">
                <h3>Embedded or Distributed</h3>
                <p>
                  Start with an in-process store for development and testing,
                  then scale to a distributed cluster without changing your code.
                </p>
              </div>

              <div className="col col--4">
                <h3>Operational Simplicity</h3>
                <p>
                  Built-in PowerShell tooling and simple cluster management
                  make deploying and operating Clustron straightforward.
                </p>
              </div>

              <div className="col col--4">
                <h3>Coordination Primitives</h3>
                <p>
                  Built-in support for leader election, distributed locks,
                  watchers, and transactions.
                </p>
              </div>

              <div className="col col--4">
                <h3>High Performance</h3>
                <p>
                  Designed for low latency and high throughput workloads
                  in modern distributed applications.
                </p>
              </div>

              <div className="col col--4">
                <h3>Developer Friendly</h3>
                <p>
                  Clean APIs, strong documentation, and a developer-focused
                  ecosystem built around real distributed systems use cases.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* Quick Start */}
        <section style={{marginTop: "5rem"}}>
          <div className="container">

            <h2 style={{textAlign: "center"}}>Get Started in 30 Seconds</h2>

            <p style={{textAlign: "center", maxWidth: "700px", margin: "0 auto"}}>
              Install the .NET client and start using Clustron immediately.
              You can run it locally using an in-process store or connect to a distributed cluster.
            </p>

            {/* Step 1 */}
            <h3 style={{marginTop: "3rem"}}>1. Install the .NET Client</h3>

            <CodeBlock language="bash" title="Install NuGet Package">
{`dotnet add package Clustron.DKV.Client`}
            </CodeBlock>


            {/* Step 2 */}
            <h3 style={{marginTop: "3rem"}}>2. Quick Start (Zero Setup)</h3>

            <p>
              Start with an <b>in-process store</b>. This requires no server installation
              and is perfect for learning the API.
            </p>

            <CodeBlock language="csharp" showLineNumbers title="QuickStart_InProc.cs">
{`
using Clustron.DKV.Client;

var client = await DKVClient.InitializeInProc("demo");

await client.PutAsync("hello", "world");

var value = await client.GetAsync<string>("hello");

Console.WriteLine(value);
`}
            </CodeBlock>


            {/* Step 3 */}
            <h3 style={{marginTop: "3rem"}}>3. Run a Distributed Clustron Cluster</h3>

            <p>
              To use Clustron as a distributed system, install and start the
              Clustron server. Follow the Getting Started guide to download the
              release and setup your first cluster.
            </p>

            <div style={{marginTop: "1.5rem"}}>
              <Link
                className="button button--primary button--lg"
                href="/docs/clustron/dkv/getting-started/overview/#1-download-the-release"
                target="_blank"
                rel="noopener noreferrer"
              >
                Setup Clustron Server
              </Link>
            </div>


            {/* Step 4 */}
            <h3 style={{marginTop: "3rem"}}>4. Connect to a Distributed Cluster</h3>

            <p>
              Once a store is running, connect using the remote client.
            </p>

            <CodeBlock language="csharp" showLineNumbers title="QuickStart_Remote.cs">
{`
using Clustron.DKV.Client;

var client = await DKVClient.InitializeRemote(
  "teststore",
  new[]
  {
      new DkvServerInfo("localhost", 7070)
  });

await client.PutAsync("hello", "world");

var value = await client.GetAsync<string>("hello");

Console.WriteLine(value);
`}
            </CodeBlock>

          </div>
        </section>

      </main>

    </Layout>
  );
}