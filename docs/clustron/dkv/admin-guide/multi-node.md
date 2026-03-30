# Multi-Node Configuration

Clustron DKV allows you to run stores across **multiple nodes**, either on a single machine or across multiple machines.

Understanding how to configure nodes correctly is key to building a scalable system.

---

## Two Deployment Models

Clustron supports two common setups:

---

### 1. Single Machine (Multiple Nodes)

You can run multiple nodes on the same machine.

* One manager per machine
* Multiple nodes controlled using `InstanceCount`

```text id="single_model"
Machine
  ├── Manager (7801)
  ├── node1 (7811 / 7861)
  └── node2 (7812 / 7862)
```

---

### How to Configure

```powershell id="single_config"
New-DkvStore `
  -Name TestStore `
  -InstancePrefix node `
  -InstanceCount 2 `
  -ClustronPort 7811 `
  -ClientPort 7861
```

---

### When to Use

* Local development
* Testing distributed behavior
* Running multiple nodes without additional machines

---

## 2. Multiple Machines (Servers)

You can run nodes across multiple machines.

* One manager per machine
* Typically one node per machine

```text id="multi_model"
Machine A → Manager + node1  
Machine B → Manager + node2  
```

---

### How to Configure

Run on each machine:

```powershell id="multi_config"
New-DkvStore `
  -Name TestStore `
  -InstancePrefix node `
  -InstanceCount 1 `
  -ClustronPort 7811 `
  -ClientPort 7861
```

---

### Manager Connection

You must connect to all managers:

```powershell id="multi_connect"
Connect-DkvManager -Managers 10.0.0.11:7801,10.0.0.12:7801
```

---

### When to Use

* Production deployments
* High availability
* Scaling across servers

---

## How Nodes Are Identified

Nodes are named using the prefix:

```text id="node_naming"
InstancePrefix = node

node1
node2
node3
```

---

## Port Assignment

Ports are assigned per node using incrementing values.

```text id="port_assign"
ClustronPort = 7811 → 7811, 7812, ...
ClientPort   = 7861 → 7861, 7862, ...
```

Each node gets unique ports automatically.

---

## Choosing the Right Setup

| Scenario                 | Recommended Setup           |
| ------------------------ | --------------------------- |
| Local testing            | Single machine (multi-node) |
| Small deployment         | 1 node per machine          |
| High scalability         | Multiple machines           |
| Fault tolerance required | Multiple machines           |

---

## Key Principles

* One manager per machine
* Nodes are defined using `InstanceCount`
* Ports must not overlap
* Clients can connect to any node

---

## Common Mistakes

### Using Multiple Managers on One Machine

* Only one manager should run per machine

---

### Incorrect InstanceCount

* Too high → port conflicts
* Too low → insufficient capacity

---

### Not Connecting All Managers

* Required in multi-machine setups
* Ensures proper cluster coordination

---

## What’s Next

👉 Continue to **Ports & Networking** to understand how communication works
