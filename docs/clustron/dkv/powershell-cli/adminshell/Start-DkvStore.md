---
title: Start-DkvStore
sidebar_position: 5
---

# Start-DkvStore

## Synopsis

Starts one or more nodes of a **Clustron Distributed Key‑Value (DKV) store**.

---

# Description

`Start-DkvStore` starts nodes of an existing Clustron store by issuing start commands through the connected **manager services**.

The cmdlet performs the following steps internally:

1. Resolves the target managers.
2. Queries a manager to discover the store configuration.
3. Determines which nodes should be started.
4. Sends start commands to each node.

The cmdlet can start:

- **All nodes of a store**
- **A specific node**

Execution can be performed:

- Sequentially (default)
- In parallel using `-Parallel`

If an operation fails, execution can optionally stop immediately using `-FailFast`.

The cmdlet writes one **Result** per node start operation.

---

# Syntax

### Start all nodes

```powershell
Start-DkvStore -Name <string>
```

### Start a specific node

```powershell
Start-DkvStore -Name <string> -InstanceName <string>
```

Optional execution parameters inherited from `DkvCmdletBase`:

```powershell
[-Managers <string[]>] [-Port <int>] [-TimeoutSec <int>] [-Parallel] [-FailFast]
```

---

# Parameters

## -Name

Name of the store whose nodes should be started.

Example:

```
OrdersStore
```

Required: **Yes**

---

## -InstanceName

Name of a specific node to start.

If omitted, **all nodes of the store will be started**.

Example:

```
orders-1
```

Required: **No**

---

## -Managers

Target Clustron manager services.

Example:

```powershell
-Managers 10.0.0.11,10.0.0.12
```

If not specified, the cmdlet uses the active `Connect-DkvManager` session.

---

## -Port

Management API port used for the manager services.

Default:

```
7801
```

---

## -TimeoutSec

Maximum allowed time for the administrative operation.

Default:

```
30 seconds
```

---

## -Parallel

Executes the operation against multiple managers **concurrently**.

Useful for clusters with many manager services.

---

## -FailFast

Stops execution immediately when a failure occurs.

Without this flag the cmdlet continues processing remaining managers.

---

# Examples

## Example 1 — Start all nodes of a store

```powershell
Start-DkvStore -Name OrdersStore
```

This starts every node belonging to the store.

---

## Example 2 — Start a specific node

```powershell
Start-DkvStore -Name OrdersStore -InstanceName orders-1
```

Only the specified node will be started.

---

## Example 3 — Start nodes using a connected manager session

```powershell
Connect-DkvManager -Managers 10.0.0.11,10.0.0.12

Start-DkvStore -Name OrdersStore
```

The command automatically uses the connected manager context.

---

## Example 4 — Start nodes on specific managers

```powershell
Start-DkvStore `
    -Name OrdersStore `
    -Managers 10.0.0.11,10.0.0.12
```

---

## Example 5 — Start nodes across multiple managers in parallel

```powershell
Start-DkvStore `
    -Name OrdersStore `
    -Managers 10.0.0.11,10.0.0.12,10.0.0.13 `
    -Parallel
```

---

## Example 6 — Stop execution if any node fails

```powershell
Start-DkvStore `
    -Name OrdersStore `
    -FailFast
```

---

# Output

The command writes results to the console in table format.

Example:

```
Manager               Action                      Result   Message
------------------------------------------------------------------
10.0.0.11:7801        StartInstance:orders-1      SUCCESS  Started
10.0.0.12:7801        StartInstance:orders-2      SUCCESS  Started
```

Each row represents the result returned by a manager.

---

# Notes

## Manager Context Requirement

If neither `-Managers` nor an active `Connect-DkvManager` session is present, the cmdlet terminates with an error.

Example error:

```
No managers connected. Use Connect-DkvManager or specify -Managers.
```

---

## Node Discovery

The cmdlet first queries the manager API:

```
GET /admin/v1/stores/{StoreName}
```

This returns the list of nodes associated with the store.

---

## Node Start API

Each node is started using the manager API:

```
POST /admin/v1/stores/{StoreName}/instances/{InstanceName}/start
```

---

## Example Production Cluster

| Server      | Node      | ClustronPort | ClientPort |
|-------------|-----------|--------------|------------|
| 10.0.0.11   | orders-1  | 7811         | 7861       |
| 10.0.0.12   | orders-2  | 7811         | 7861       |
| 10.0.0.13   | orders-3  | 7811         | 7861       |

Starting the store without `-InstanceName` starts all nodes.

---

# Related Cmdlets

- Connect-DkvManager
- New-DkvStore
- Add-DkvInstance
- Stop-DkvStore
- Get-DkvStore
- Watch-DkvStoreMetrics
