---
title: What is Clustron?
description: Clustron is a clustering platform for building distributed systems in .NET.
---

# What is Clustron?

**Clustron** is a platform for building clustered and distributed systems in **.NET**.  
It provides the fundamental infrastructure required for multiple application nodes to communicate with each other, form a cluster, and coordinate their behavior reliably.

At its core, Clustron enables **peer‑to‑peer communication between participating nodes** and manages the lifecycle of a distributed cluster.

---

## Clustering Platform for .NET

Clustron acts as the **foundation layer for distributed applications** by providing:

- Peer‑to‑peer communication between nodes
- Cluster formation and membership management
- Automatic **leader election**
- Cluster health monitoring
- Detection of node joins and leaves
- Real‑time **cluster change notifications**
- Client notification when cluster topology changes

These capabilities allow applications to behave as a **coordinated distributed system instead of isolated instances**.

---

## Why a Clustering Platform?

When applications scale across multiple machines or containers, coordination becomes difficult.  
Typical distributed system challenges include:

- Electing a leader node
- Detecting node failures
- Synchronizing state between instances
- Reacting to cluster topology changes

Clustron provides these capabilities as a **built‑in clustering platform**, allowing developers to focus on application logic instead of building distributed coordination mechanisms from scratch.

---

## Foundation for the Clustron Ecosystem

Clustron is designed as a **platform upon which multiple distributed system products can be built**.

All Clustron products share the same clustering foundation that provides:

- node discovery
- cluster membership
- distributed coordination
- fault detection
- event propagation across the cluster

This makes it possible to build a family of distributed system components that work seamlessly together.

---

## Clustron DKV

The first product built on the Clustron platform is **Clustron DKV**.

Clustron DKV provides:

- Distributed key‑value storage
- Distributed caching
- Distributed locks
- Leader election primitives
- Transactions
- Watch notifications
- TTL scheduling

Because DKV is built on top of the Clustron clustering platform, it automatically benefits from:

- cluster membership management
- leader election
- node monitoring
- topology change notifications

---

## Future Clustron Products

Clustron is designed to grow into a **suite of distributed system products for .NET**.

Future products may include:

- Clustron Streams — distributed event streaming
- Clustron Queue — distributed task and job queues
- Clustron Queue — distributed task and job queues
- Clustron Vector — vector storage and semantic search
- Additional distributed coordination services

Each of these products will be built on the **same clustering and coordination foundation provided by Clustron**.

---

## Summary

Clustron provides the **core clustering infrastructure for .NET distributed systems**.

It enables nodes to form clusters, coordinate their behavior, and react to topology changes automatically.  
Products such as **Clustron DKV** build on top of this platform to deliver higher‑level distributed system capabilities.
