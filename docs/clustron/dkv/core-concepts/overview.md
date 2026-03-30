# Overview

Clustron DKV is not just a key-value store — it is a **distributed coordination system** built around a simple data model.

To use Clustron effectively, it helps to understand a few core ideas.

---

## The Mental Model

At its core, Clustron provides:

* A **distributed key-value store**
* A set of **coordination primitives**
* A **consistent programming model** across local and distributed environments

You can think of Clustron as:

```text
Shared state + coordination + lifecycle management
```

---

## The Store

A **store** is the primary unit in Clustron.

* It represents a logical cluster
* It contains data and coordination primitives
* It can run:

  * In-process (single application)
  * Distributed (multiple nodes across machines)

All operations in Clustron are performed against a store.

---

## Data + Coordination

Clustron combines two things that are usually separate:

### Data (Key-Value)

* Store and retrieve values using keys
* Apply expiration using TTL
* Use transactions for multi-step operations

---

### Coordination

* **Locks** → ensure mutual exclusion
* **Counters** → track shared state
* **Watch** → react to changes in real time

These primitives allow multiple application instances to work together safely.

---

## Lifecycle Awareness

Unlike traditional caches, Clustron understands **lifecycle**:

* Keys can expire automatically
* Resources can be bound to leases
* Failures are handled through expiry and ownership

This makes Clustron suitable for building reliable distributed systems.

---

## One Model, Two Modes

Clustron uses the same API in both modes:

### In-Process

* Runs inside your application
* No infrastructure required

### Distributed

* Runs across multiple nodes
* Enables coordination between instances

You can move from local to distributed without changing your code.

---

## How Everything Fits Together

```text
Store
  ├── Keys & Values
  ├── TTL & Expiration
  ├── Leases (lifecycle control)
  └── Coordination (locks, counters, watch)
```

---

## Why This Matters

Clustron is designed to solve problems like:

* Coordinating background workers
* Managing distributed locks
* Tracking shared state across instances
* Reacting to changes in real time

Instead of combining multiple systems, you can use a single, consistent model.

---

## What’s Next

👉 Continue to **Architecture** to understand the design of Clustron DKV.
