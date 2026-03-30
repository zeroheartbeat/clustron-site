# Leases

Leases are one of the most important concepts in Clustron.

They allow you to safely manage **ownership in a distributed system**, where failures are not exceptions — they are expected.

---

## Why Leases Exist

In a single-process application, ownership is simple.

If a function is running, it owns the work.
If the process dies, everything stops.

In a distributed system, this is no longer true.

* Multiple instances may try to perform the same work
* A process may crash without warning
* A machine may become unreachable
* A network partition may occur

Now imagine this situation:

* A worker picks up a job
* It marks the job as “in progress”
* Then the worker crashes

What happens next?

Without a mechanism to recover ownership:

* The job remains stuck forever
* No other worker knows whether it is safe to take over

This is the exact problem leases solve.

---

## What a Lease Really Means

A lease is not just “expiration”.

A lease represents:

```text
“This client owns this resource — but only for a limited time”
```

That time-bound ownership is the key.

* If the client is alive → it keeps the lease
* If the client disappears → the lease expires
* When the lease expires → ownership is automatically released

This allows the system to **recover safely without manual intervention**.

---

## Leases vs TTL (The Critical Difference)

This is where many people get confused.

TTL and leases both involve time, but they solve very different problems.

### TTL: Data Lifetime

TTL answers:

> “How long should this data exist?”

Example:

* Cache entry expires after 5 minutes
* Session expires after 30 minutes

When TTL expires:

* The data is removed
* No ownership is involved

---

### Lease: Ownership and Responsibility

A lease answers:

> “Who is responsible for this resource right now?”

Example:

* Which worker owns a job
* Which instance holds a lock
* Which node is the leader

When a lease expires:

* Ownership is released
* The system becomes available for reassignment

---

### The Mental Model

```text
TTL   → controls data lifetime  
Lease → controls ownership and responsibility
```

---

## When Should You Use a Lease?

You should use a lease whenever:

> **A piece of work or resource must have a single, valid owner — and that ownership must not become stale**

---

### 1. Distributed Workers

Imagine a queue of jobs.

You want:

* Only one worker processes a job
* If a worker crashes, another can take over

With leases:

* Worker A acquires a lease
* It marks the job as active
* It keeps renewing the lease while working

If Worker A crashes:

* Lease expires
* Job becomes available again

No manual cleanup required.

---

### 2. Leader Election

In distributed systems, you often need a leader:

* One instance performs coordination
* Others follow

With leases:

* A node acquires a lease as “leader”
* It renews periodically

If it fails:

* Lease expires
* Another node becomes leader

This enables **automatic failover**.

---

### 3. Resource Ownership

Suppose multiple instances want to use a shared resource:

* File
* External API quota
* Scheduled task

A lease ensures:

* Only one instance owns the resource
* Ownership automatically resets on failure

---

### 4. Temporary Presence (Heartbeat Model)

You can use leases to represent **active presence**:

* Active workers
* Connected clients
* Live services

Each instance:

* Creates a key attached to a lease
* Keeps the lease alive

If it disappears:

* Lease expires
* Presence is removed automatically

---

## How Leases Work in Practice

### Grant a Lease

```csharp
var lease = await client.Leases.GrantAsync(TimeSpan.FromSeconds(10));
```

You now own a lease for 10 seconds.

---

### Attach Work to the Lease

```csharp
await client.PutAsync(
    "worker:1",
    "active",
    leaseId: lease.Id);
```

This key is now tied to your ownership.

---

### Keep the Lease Alive

```csharp
await client.Leases.KeepAliveAsync(lease.Id);
```

As long as you keep renewing, you remain the owner.

---

### If You Stop Renewing

* Lease expires
* Ownership is released
* Attached keys are removed

The system cleans up automatically.

---

### Revoke Explicitly

```csharp
await client.Leases.RevokeAsync(lease.Id);
```

You can also release ownership intentionally.

---

## Why Leases Are Safer Than Locks

Traditional locks have a major problem:

> If the owner crashes, the lock may never be released.

Leases solve this:

* Every ownership has an expiry
* No ownership can become permanent by accident

This makes leases **failure-safe by design**.

---

## Key Takeaways

* Leases are about **ownership**, not just expiration
* They allow systems to **recover automatically from failure**
* They are the foundation for:

  * Locks
  * Leader election
  * Distributed workers

---

## What’s Next

👉 Continue to **Locks** to build exclusive access patterns using leases
