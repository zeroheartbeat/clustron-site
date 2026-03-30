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
			  Distributed Cache for .NET
			  <br />
			  <span className={styles.highlight}>Built natively for .NET</span>
			</Heading>
			
			<p className={styles.heroPain}>
			  Stop managing Redis clusters for your .NET apps.
			</p>

			<div className={styles.heroBullets}>
			  <div>No external dependencies</div>
			  <div>Runs fully in-process</div>
			  <div>Seamless scale to cluster</div>
			  <div>Built for modern .NET (DI-first)</div>
			</div>
				
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
                ⭐ Star on GitHub
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
	  
	  <HomepageFeatures />

      {/* Capability Strip */}

      <section className={styles.capabilityStrip}>
        <div className="container">
         <div className={styles.useCases}>
		  <span>Distributed caching</span>
		  <span>Session storage</span>
		  <span>High-performance APIs</span>
		  <span>Leader election</span>
		  <span>Distributed locks</span>
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
	  
	  <section className={styles.redisSection}>
		  <div className="container text--center">
			<h2 className={styles.redisTitle}>
			  Why Not Redis for .NET?
			</h2>

			<p className={styles.redisSubtitle}>
			  Redis is powerful — but often overkill for many .NET applications.
			</p>

			<div className={styles.redisGrid}>
			  <div className={styles.redisCard}>
				<h3>Redis</h3>
				<ul>
				  <li>Requires external infrastructure</li>
				  <li>Separate deployment & maintenance</li>
				  <li>Network overhead for every call</li>
				  <li>Generic (not .NET-native)</li>
				</ul>
			  </div>

			  <div className={styles.redisCardHighlight}>
				<h3>Clustron</h3>
				<ul>
				  <li>Runs in-process (zero setup)</li>
				  <li>Scales to cluster when needed</li>
				  <li>No network cost in local mode</li>
				  <li>Built specifically for .NET</li>
				</ul>
			  </div>
			</div>

			<p className={styles.redisFooter}>
			  Start simple. Scale when needed. Stay in .NET.
			</p>
		  </div>
		</section>

		{/* 🔥 PERFORMANCE SECTION */}

		<section className={styles.performanceSection}>
		  <div className="container text--center">

			<h2 className={styles.sectionTitle}>
			  Built for High-Performance .NET Workloads
			</h2>

			<p className={styles.performanceSubtitle}>
			  Designed for low-latency, high-throughput applications — without the overhead of external systems.
			</p>

			<div className={styles.performanceGrid}>

			  <div className={styles.performanceCard}>
				<h3>⚡ In-Process Speed</h3>
				<p>
				  Zero network overhead when running in-process. Achieve ultra-low latency
				  for critical application paths.
				</p>
			  </div>

			  <div className={styles.performanceCard}>
				<h3>🚀 Scales to Distributed</h3>
				<p>
				  Seamlessly transition to a distributed cluster when your system grows —
				  without changing your application code.
				</p>
			  </div>

			  <div className={styles.performanceCard}>
				<h3>🧠 Optimized for .NET</h3>
				<p>
				  Built using modern .NET patterns, memory-efficient structures, and async-first APIs.
				</p>
			  </div>

			</div>

			<p className={styles.performanceFooter}>
			  Start local. Scale globally. No rewrites.
			</p>

		  </div>
		</section>
		
		{/* 🔥 USE CASES SECTION */}

		<section className={styles.useCasesSection}>
		  <div className="container text--center">

			<h2 className={styles.sectionTitle}>
			  Built for Real-World .NET Applications
			</h2>

			<p className={styles.useCasesSubtitle}>
			  From simple caching to distributed coordination — Clustron adapts to your needs.
			</p>

			<div className={styles.useCasesGrid}>

			  <div className={styles.useCaseCard}>
				<h3>🗄️ API Response Caching</h3>
				<p>
				  Cache expensive queries and API responses with near-zero latency using in-process mode.
				</p>
			  </div>

			  <div className={styles.useCaseCard}>
				<h3>🔐 Session Storage</h3>
				<p>
				  Manage user sessions reliably across instances with seamless distributed support.
				</p>
			  </div>

			  <div className={styles.useCaseCard}>
				<h3>⚙️ Distributed Locks</h3>
				<p>
				  Coordinate background jobs and critical sections safely using built-in locking primitives.
				</p>
			  </div>

			  <div className={styles.useCaseCard}>
				<h3>👑 Leader Election</h3>
				<p>
				  Elect a leader node for scheduling, coordination, or task orchestration.
				</p>
			  </div>

			  <div className={styles.useCaseCard}>
				<h3>📡 Watch Notifications</h3>
				<p>
				  React to data changes in real-time using watch and event-based APIs.
				</p>
			  </div>

			  <div className={styles.useCaseCard}>
				<h3>⏱️ TTL & Expiry Workflows</h3>
				<p>
				  Automatically expire data and trigger workflows using built-in TTL scheduling.
				</p>
			  </div>

			</div>

		  </div>
		</section>
      <main>

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

			<h2 className={styles.ctaTitle}>
			  Build your first distributed system in minutes
			</h2>

			<p className={styles.ctaSubtitle}>
			  No Redis. No setup. No infrastructure.
			  <br />
			  Just .NET.
			</p>

			<div className={styles.ctaActions}>
			  <a className="button button--primary button--lg" href="/docs/clustron/dkv/getting-started/overview">
				🚀 Get Started in 2 Minutes
			  </a>

			  <a
				className="button button--outline button--lg"
				href="https://github.com/zeroheartbeat/clustron-dkv"
				target="_blank"
			  >
				⭐ View on GitHub
			  </a>
			</div>

		  </div>
		</section>

      </main>

    </Layout>
  );
}