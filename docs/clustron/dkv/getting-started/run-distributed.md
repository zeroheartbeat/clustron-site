# Run Distributed (2-Node Setup)

This guide walks you through running Clustron DKV in distributed mode.

You can run this setup in two ways:

* **Single machine** → run multiple nodes on one machine
* **Multiple machines (servers)** → run one node per machine

In both cases, Clustron forms a distributed cluster.

---

## Prerequisites

* Clustron installed
* PowerShell 7+
* Required ports open (7801, 7811, 7861)

---

## Choose Your Setup

### Option 1: Single Machine (Multiple Nodes)

If you only have one machine, you can still run a distributed cluster.

* Each machine has **one manager**
* You connect to **only one manager (localhost)**
* Use `InstanceCount` to run multiple nodes

#### Manager Connection

```powershell id="sm_mgr"
Connect-DkvManager -Managers localhost:7801
```

#### Store Behavior

```text id="sm_behavior"
InstanceCount = number of nodes to run on this machine
```

Ports are assigned automatically:

* `ClustronPort` → starting cluster port
* `ClientPort` → starting client port

For each additional node, ports are incremented:

```text id="sm_ports"
ClustronPort = 7811 → 7811, 7812, ...
ClientPort   = 7861 → 7861, 7862, ...
```

---

### Option 2: Multiple Machines (Servers)

If you have multiple machines:

* Each machine runs **one manager**
* You must connect to **all managers**
* Each machine typically runs **one node (`InstanceCount = 1`)**

#### Manager Connection

```powershell id="mm_mgr"
Connect-DkvManager -Managers 10.0.0.11:7801,10.0.0.12:7801
```

---

## Understanding the Setup

In distributed mode:

* **Managers** coordinate the cluster (one per machine)
* **Store instances (nodes)** host the data
* **Clients** connect to any node

---

## 1. Create the Store

```powershell id="create_store"
New-DkvStore `
  -Name TestStore `
  -InstancePrefix node `
  -InstanceCount 2 `
  -ClustronPort 7811 `
  -ClientPort 7861
```

* Single machine → set `InstanceCount > 1`
* Multiple machines → use `InstanceCount = 1` per machine

---

## 2. Start the Cluster

```powershell id="start_cluster"
Start-DkvStore TestStore
```

This starts all configured nodes and forms the cluster.

---

## 3. Connect a Client

```powershell id="connect_client"
Connect-DkvStore `
  -StoreName TestStore `
  -Endpoints 10.0.0.11:7861
```

You only need to provide a **single endpoint (seed server)**.

* The client will automatically discover all nodes in the cluster
* You do not need to list every server manually

### What is an Endpoint?

An endpoint is:

```text id="endpoint_def"
<Machine/IP>:<ClientPort>
```

* `Machine/IP` → the server running the node
* `ClientPort` → the port specified during store creation

### Examples

```text id="endpoint_examples"
localhost:7861
10.0.0.11:7861
```

Even if your cluster has multiple nodes, providing one valid endpoint is enough for the client to connect to the entire cluster.

> You can provide multiple endpoints for resilience if needed.

---

## 4. Verify Operation

```powershell
Set-DkvItem -Key "hello" -Value "world"

Get-DkvItem -Key "hello"

---

## Key Characteristics

* One manager per machine
* Multiple nodes per machine (optional)
* Data and coordination are shared across nodes
* Supports distributed locks, counters, and watch subscriptions

---

## What’s Next

👉 Continue to **Configuration (appsettings.json)** to manage setup via configuration
👉 Or explore **First Operations (Put / Get / Delete)** to use the API
