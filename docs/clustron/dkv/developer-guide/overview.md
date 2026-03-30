# Overview

The Developer Guide shows how to use Clustron DKV to build applications using:

* Key-value operations
* Coordination primitives
* Distributed-safe patterns

---

## What You Will Learn

In this section, you will learn how to:

* Connect to a store
* Store and retrieve data
* Work with bulk and batch operations
* Use leases, locks, and counters
* React to changes using watch
* Build transactional workflows

---

## The Developer Workflow

Most applications follow a simple flow:

```text id="dev_flow"
Get Client → Perform Operations → Add Coordination → Handle Errors
```

---

## 1. Get a Client

All operations start with a client.

You obtain a client using dependency injection:

```csharp id="dev_client"
var client = await provider.GetAsync("default");
```

---

## 2. Perform Data Operations

Use simple APIs to store and retrieve data:

```csharp id="dev_basic"
await client.PutAsync("key", "value");

var result = await client.GetAsync<string>("key");
```

---

## 3. Add Coordination

For distributed scenarios, use coordination primitives:

* **Leases** → ownership with expiration
* **Locks** → exclusive access
* **Counters** → shared state
* **Watch** → event-driven updates

---

## 4. Build Advanced Workflows

You can combine features to build more complex systems:

* Batch operations for efficiency
* Transactions for grouped operations
* Scan and query for data processing

---

## Same API Everywhere

All APIs work the same in:

* InProc mode
* Distributed mode

You do not need to change your application code when scaling.

---

## Design Philosophy

Clustron is designed to be:

* Simple to use
* Safe under failure
* Consistent across environments

You interact with distributed systems using the same patterns as local code.

---

## How This Guide is Organized

The Developer Guide is structured by capability:

* **Getting a Client** → setup and initialization
* **Basic & Bulk Operations** → working with data
* **Leases & Locks** → ownership and coordination
* **Watch & Counters** → reactive and shared state
* **Transactions** → complex workflows
* **Options & Error Handling** → production readiness

---

## What’s Next

👉 Continue to **Getting a Client** to initialize your application
