# Overview

Clustron DKV is a distributed key-value and coordination platform for .NET — designed to run with zero infrastructure and scale when you need it.

You can start with an in-process setup (no infrastructure required) and scale seamlessly to a distributed cluster when needed — without changing your code. The same programming model works in both modes, so you don’t have to rewrite your application as it grows.

Clustron is designed not just for storing data, but for coordinating work across multiple application instances.

---

## What You Can Do with Clustron DKV

With Clustron, you can:

* Store and retrieve data using simple key-value operations
* Automatically expire data using TTL
* Ensure safe concurrency using distributed locks
* Maintain shared counters across instances
* React to changes in real-time using watchers
* Execute reliable multi-step operations using transactions

---

## Two Modes of Operation

Clustron supports two modes:

### In-Process (InProc)

* Runs inside your application
* Requires zero setup
* Ideal for development, testing, and single-instance apps
* Perfect for getting started in minutes

### Distributed (Remote)

* Runs across multiple nodes
* Enables coordination between multiple application instances
* Designed for production and scale

Both modes use the same API, allowing you to move from local to distributed without changing your code.

---

## How This Guide is Organized

The Getting Started section walks you through:

* Running Clustron with zero setup (In-Process mode)
* Building your first working example
* Installing and configuring Clustron
* Running a distributed cluster
* Performing basic operations

---

## What’s Next

Start with the simplest way to run Clustron:

👉 **Run In-Process (No Infrastructure)**

You’ll have a working store running in minutes — no setup required.
