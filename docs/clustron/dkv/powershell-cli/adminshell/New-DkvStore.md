---
title: New-DkvStore
sidebar_position: 4
---

# New-DkvStore

## Synopsis

Creates a new **Clustron Distributed Key‑Value (DKV) store** across the cluster using the currently connected managers.

---

# Description

`New-DkvStore` provisions a distributed store in the Clustron cluster.

A store represents a logical distributed key‑value database composed of one or more **nodes** running on cluster **servers**.

The command automatically generates the **node topology** using:

- Connected managers
- Instance prefix
- Instance count per server
- Starting cluster and client ports

Topology generation happens inside the CLI. The generated topology is then sent to every manager so that all cluster servers receive the same configuration.

Managers are determined from the active session created with:

```powershell
Connect-DkvManager
```

All administrative operations are executed against **every connected manager**.

---

# Syntax

```powershell
New-DkvStore `
    -Name <string> `
    -InstancePrefix <string> `
    [-InstanceCount <int>] `
    [-ClustronPort <int>] `
    [-ClientPort <int>]
```

Optional execution parameters inherited from `DkvCmdletBase`:

```powershell
[-Parallel] [-FailFast] [-TimeoutSec <int>]
```

---

# Parameters

## -Name

Name of the distributed store.

Example:

```
OrdersStore
```

Required: **Yes**

---

## -InstancePrefix

Prefix used when generating node names.

Nodes are named using the pattern:

```
<prefix>-<index>
```

Example:

```
orders-1
orders-2
orders-3
```

Required: **Yes**

---

## -InstanceCount

Number of nodes created **per server**.

Default value:

```
1
```

Example:

```powershell
-InstanceCount 2
```

Required: **No**

---

## -ClustronPort

Starting port used for **cluster communication** between nodes.

Default value:

```
7811
```

When multiple nodes are created on the same server, the port increments for each node.

Example:

```
7811
7812
7813
```

Required: **No**

---

## -ClientPort

Starting port exposed for **client applications** to connect to the store.

Default value:

```
7861
```

When multiple nodes are created on the same server, the port increments for each node.

Example:

```
7861
7862
7863
```

Required: **No**

---

# Topology Generation

Node topology is generated automatically using the following logic:

```
nodes = connected servers × InstanceCount
```

Each server hosts the specified number of nodes. The CLI generates node names sequentially across the entire cluster.

For each server:

- Node names are generated sequentially using the specified prefix.
- Cluster and client ports start from the specified base port.
- Each additional node on the same server increments both ports.

Example configuration:

```
Servers: 10.0.0.11, 10.0.0.12
InstancePrefix: orders
InstanceCount: 2
ClustronPort: 7811
ClientPort: 7861
```

Generated topology:

```
orders-1   10.0.0.11:7811   client:7861
orders-2   10.0.0.11:7812   client:7862
orders-3   10.0.0.12:7811   client:7861
orders-4   10.0.0.12:7812   client:7862
```

This topology is sent to every connected manager.

---

# Examples

## Example 1 — Create a store with one node per server

```powershell
Connect-DkvManager -Managers 10.0.0.11,10.0.0.12

New-DkvStore `
    -Name OrdersStore `
    -InstancePrefix orders
```

Generated topology:

```
orders-1 10.0.0.11:7811 client:7861
orders-2 10.0.0.12:7811 client:7861
```

---

## Example 2 — Create two nodes per server

```powershell
New-DkvStore `
    -Name OrdersStore `
    -InstancePrefix orders `
    -InstanceCount 2
```

Generated nodes:

```
orders-1 10.0.0.11:7811 client:7861
orders-2 10.0.0.11:7812 client:7862
orders-3 10.0.0.12:7811 client:7861
orders-4 10.0.0.12:7812 client:7862
```

---

## Example 3 — Execute store creation in parallel across managers

```powershell
New-DkvStore `
    -Name OrdersStore `
    -InstancePrefix orders `
    -InstanceCount 2 `
    -Parallel
```

Administrative requests are sent to all managers concurrently.

---

## Example 4 — Stop execution on first failure

```powershell
New-DkvStore `
    -Name OrdersStore `
    -InstancePrefix orders `
    -InstanceCount 2 `
    -FailFast
```

Execution stops if any manager reports an error.

---

# Output

The command writes results to the console in table format.

Example:

```
Manager               Action        Result   Message
----------------------------------------------------
10.0.0.11:7801        CreateStore   SUCCESS  Created
10.0.0.12:7801        CreateStore   SUCCESS  Created
```

Each row represents the result returned by a manager.

---

# Notes

## Manager Context

`New-DkvStore` relies on the manager context created by:

```powershell
Connect-DkvManager
```

If no manager context exists, the command will warn that no managers are connected.

---

## Port Allocation

Ports start from the configured base values and increment for each additional node created on the same server.

Example:

```
ClustronPort = 7811
ClientPort   = 7861
InstanceCount = 3
```

Generated ports:

```
7811 / 7861
7812 / 7862
7813 / 7863
```

---

## Cluster Consistency

All managers must be reachable when performing administrative operations.

If a manager is unavailable, the operation may fail because configuration changes cannot be applied across the entire cluster.

---

# Related Cmdlets

- Connect-DkvManager
- Add-DkvInstance
- Start-DkvStore
- Stop-DkvStore
- Get-DkvStore
- Watch-DkvStoreMetrics
