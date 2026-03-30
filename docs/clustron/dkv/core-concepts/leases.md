# Leases

A **lease** represents **ownership with a limited lifetime**.

It allows a client to control a resource safely, even in the presence of failures.

---

## The Core Idea

A lease provides:

```text id="lease_core"
Exclusive ownership + automatic expiration
```

* Ownership ensures only one client controls a resource
* Expiration ensures the system recovers if the owner fails

---

## Why Leases Exist

In distributed systems:

* Processes can crash
* Machines can go down
* Network connections can be lost

Without leases:

* Resources may remain locked forever
* Systems can become inconsistent

Leases solve this by introducing **time-bound ownership**.

---

## How a Lease Works

A lease follows a lifecycle:

```text id="lease_lifecycle"
Acquire → Active → Renew (optional) → Expire → Released
```

### 1. Acquire

* A client acquires a lease for a duration
* The lease becomes active immediately

---

### 2. Active

* The client owns the lease
* It can safely perform operations

---

### 3. Renew (Optional)

* The client can extend the lease before expiration
* This resets the expiration timer

---

### 4. Expire

* If not renewed, the lease expires automatically
* Ownership is released

---

### 5. Released

* Other clients can acquire the lease

---

## Example Scenario

A background worker processes jobs:

* Worker A acquires a lease
* It processes tasks
* If Worker A crashes, the lease expires
* Worker B takes over

No manual cleanup is required.

---

## Binding Keys to Leases

Keys can be associated with a lease.

* The key exists only while the lease is active
* When the lease expires, associated keys are cleaned up automatically

This is useful for:

* Temporary ownership
* Resource tracking
* Distributed coordination

---

## Failure & Expiry Behavior

Leases are designed to handle failure safely:

* If a client crashes → lease expires
* If a network is lost → lease expires
* If renewal stops → lease expires

The system guarantees that:

* Ownership is eventually released
* No stale ownership remains

---

## Lease vs Lock

Leases are similar to locks, but safer:

* **Lock** → ownership until explicitly released
* **Lease** → ownership with automatic expiry

This prevents deadlocks caused by failures.

---

## Key Characteristics

* Time-bound ownership
* Automatic cleanup
* Exclusive access
* Distributed-safe behavior

---

## Why Leases Matter

Leases allow you to build systems that are:

* Reliable
* Self-healing
* Safe under failure

They are a foundational primitive for coordination.

---

## What’s Next

👉 Continue to **Coordination Model** to see how leases enable locks, counters, and watch
