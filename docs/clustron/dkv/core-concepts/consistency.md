# Consistency Model

Clustron DKV provides a **consistent and predictable view of data** across nodes.

It is designed to balance:

* Correctness
* Availability
* Performance

---

## What Does Consistency Mean?

Consistency defines how data behaves when:

* Multiple nodes are involved
* Multiple clients access the same key
* Updates happen concurrently

---

## Single Logical Store

Even in distributed mode, Clustron behaves as a **single logical store**:

```text id="logical_store"
Multiple nodes → One consistent view
```

Clients do not need to manage individual nodes.

---

## Read and Write Behavior

### Writes

* Writes are applied through the cluster
* The system ensures a consistent state is maintained

---

### Reads

* Reads return the latest known value
* After a successful write, subsequent reads will reflect the updated value

---

## Consistency in Practice

For most applications, Clustron provides:

* Predictable reads and writes
* No need to manually handle replication
* No need to manage consistency across nodes

You interact with the system as if it were a single instance.

---

## Concurrent Updates

When multiple clients update the same key:

* Operations are handled safely
* The system ensures a consistent outcome

For coordination scenarios, use:

* **Locks** → enforce exclusive access
* **Leases** → control ownership and lifecycle

---

## Consistency Across Modes

The same consistency model applies to:

* InProc mode
* Distributed mode

Your application does not need different logic.

---

## Design Philosophy

Clustron aims to provide:

```text id="consistency_balance"
Simple mental model  
+  
Reliable behavior  
+  
No manual coordination
```

---

## When You Need More Control

For advanced scenarios, you can use:

* **Locks** → prevent conflicting updates
* **Transactions** → group multiple operations
* **Leases** → manage ownership and expiry

---

## What’s Next

👉 Continue to **Leases** to understand lifecycle and ownership
