---
title: DKV Overview
sidebar_position: 1
---

# Clustron DKV

**Clustron DKV** is a distributed key‑value store and coordination platform designed for modern **.NET distributed systems**.

It provides a high‑performance distributed storage engine along with built‑in coordination primitives such as:

- Distributed key‑value storage
- Distributed locks
- Watch notifications
- Transactions
- TTL scheduling
- Leader election

Clustron enables developers to build reliable distributed systems **without implementing coordination logic from scratch**.

---

# Core Capabilities

## Distributed Key‑Value Store

Clustron provides a scalable distributed key‑value store capable of handling high‑throughput workloads across multiple nodes.

Features include:

- Horizontal scaling
- Partitioned data storage
- Low latency operations
- High throughput performance

---

## Coordination Primitives

Modern distributed systems require coordination between services. Clustron includes built‑in primitives to simplify this.

Examples:

- **Leader Election** – elect a leader among service instances
- **Distributed Locks** – coordinate access to shared resources
- **Watch Notifications** – react to data changes
- **Transactions** – perform atomic multi‑operation updates

These primitives allow developers to build reliable distributed workflows.

---

# Flexible Deployment

Clustron supports two deployment modes.

## In‑Process Mode

Run Clustron embedded directly inside your .NET application.

This mode is ideal for:

- Local development
- Testing
- Single‑node deployments

Example:

```csharp
using Clustron.DKV.Client;

var client = await DKVClient.InitializeInProc("demo");
```

---

## Distributed Cluster

Run Clustron as a distributed cluster across multiple machines.

Applications connect to the cluster through the .NET client.

Example:

```csharp
using Clustron.DKV.Client;

var client = await DKVClient.InitializeRemote(
    "TestStore",
    new[]
    {
        new DkvServerInfo("localhost", 7861)
    });
```

---

# Designed for .NET

Clustron is built specifically for the .NET ecosystem.

Highlights include:

- Fully asynchronous APIs
- High‑performance networking
- Native .NET client library
- Clean developer‑focused APIs

Developers can start with a simple embedded store and later scale to a distributed cluster **without changing application code**.

---

# Management and Tooling

Clustron includes built‑in operational tooling to simplify cluster management.

Capabilities include:

- PowerShell management commands
- Store creation and configuration
- Cluster monitoring
- Metrics and diagnostics

Example commands:

```powershell
Connect-DkvManager -Managers localhost:7801

New-DkvStore -Name TestStore -InstancePrefix node -InstanceCount 2

Start-DkvStore TestStore
```

---

# Typical Use Cases

Clustron enables a wide range of distributed system patterns.

Examples:

- Service leader election
- Distributed job queues
- Configuration management
- Distributed locking
- Rate limiting
- Coordination between microservices

---

# Next Steps

To start using Clustron:

- Follow the **Getting Started Guide**
- Install the **Clustron .NET client**
- Run your first distributed store

Continue with:

👉 **Getting Started Guide**
