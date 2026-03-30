# Store

A **store** is the central unit of execution in Clustron DKV.

All data and coordination operations happen inside a store.

---

## What is a Store?

A store represents:

* A **logical cluster**
* A **container for data and coordination primitives**
* A **boundary for consistency and lifecycle management**

You always interact with Clustron through a store.

---

## One Store, Many Nodes

In distributed mode, a store is backed by multiple nodes:

```text id="store_nodes"
Store (TestStore)
  ├── Node 1
  ├── Node 2
  └── Node N
```

* Each node participates in the cluster
* Data and coordination are shared across nodes
* The system behaves as a single logical unit

---

## Store in In-Process Mode

In InProc mode, a store runs entirely inside your application:

```text id="store_inproc"
Application
  └── Store (InProc)
```

* No network communication
* No external dependencies
* Same API as distributed mode

---

## Store in Distributed Mode

In distributed mode, a store runs across machines:

```text id="store_dist"
Machine A → Node 1
Machine B → Node 2
Machine C → Node 3
```

* Nodes communicate with each other
* Clients can connect to any node
* The cluster maintains shared state

---

## Naming a Store

Each store has a unique name:

```text id="store_name"
TestStore
orders
cache
```

The name is used when:

* Creating the store
* Connecting clients
* Resolving from configuration

---

## Store as a Boundary

A store defines important boundaries:

### Data Boundary

* Keys exist within a store
* Different stores do not share data

---

### Coordination Boundary

* Locks, counters, and watches are scoped to a store
* No cross-store coordination

---

### Failure Boundary

* Failures and recovery happen within a store
* Each store operates independently

---

## Multiple Stores

You can run multiple stores in the same environment:

```text id="multi_store"
orders-store
inventory-store
session-store
```

Each store is isolated and can be managed independently.

---

## Why Stores Matter

The store is what makes Clustron scalable and modular:

* You can isolate workloads
* You can scale specific stores independently
* You can apply different configurations per store

---

## What’s Next

👉 Continue to **InProc vs Remote** to understand execution modes
