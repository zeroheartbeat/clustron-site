---
title: Stop-DkvStore
sidebar_position: 6
---

# Stop-DkvStore

## Synopsis

Stops one or more nodes of a **Clustron Distributed Key-Value (DKV) store**.

---

# Description

`Stop-DkvStore` stops running nodes of a Clustron store by issuing stop commands through the connected **manager services**.

The cmdlet performs the following steps:

1. Resolves the target managers.
2. Queries a manager to discover the store configuration.
3. Determines which nodes should be stopped.
4. Sends stop commands to each node.

The cmdlet can stop:

- **All nodes of a store**
- **A specific node**

Execution can be performed:

- Sequentially (default)
- In parallel using `-Parallel`

If an operation fails, execution can optionally stop immediately using `-FailFast`.

The cmdlet writes one **Result** per node stop operation.

---

# Syntax

### Stop all nodes

```powershell
Stop-DkvStore -Name <string>
```

### Stop a specific node

```powershell
Stop-DkvStore -Name <string> -InstanceName <string>
```

Optional execution parameters inherited from `DkvCmdletBase`:

```powershell
[-Managers <string[]>] [-Port <int>] [-TimeoutSec <int>] [-Parallel] [-FailFast]
```

---

# Parameters

## -Name

Name of the store whose nodes should be stopped.

Example:

```
OrdersStore
```

Required: **Yes**

---

## -InstanceName

Name of a specific node to stop.

If omitted, **all nodes of the store will be stopped**.

Example:

```
orders-1
```

Required: **No**

---

## -Force

Forces the node to stop immediately.

When specified, the manager API will be called with:

```
?force=true
```

This bypasses graceful shutdown checks and immediately terminates the node.

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

## Example 1 — Stop all nodes of a store

```powershell
Stop-DkvStore -Name OrdersStore
```

---

## Example 2 — Stop a specific node

```powershell
Stop-DkvStore -Name OrdersStore -InstanceName orders-1
```

---

## Example 3 — Force stop a node

```powershell
Stop-DkvStore -Name OrdersStore -InstanceName orders-1 -Force
```

This immediately terminates the node.

---

## Example 4 — Stop nodes using a connected manager session

```powershell
Connect-DkvManager -Managers 10.0.0.11,10.0.0.12

Stop-DkvStore -Name OrdersStore
```

---

## Example 5 — Stop nodes on specific managers

```powershell
Stop-DkvStore `
    -Name OrdersStore `
    -Managers 10.0.0.11,10.0.0.12
```

---

## Example 6 — Stop nodes across managers in parallel

```powershell
Stop-DkvStore `
    -Name OrdersStore `
    -Managers 10.0.0.11,10.0.0.12,10.0.0.13 `
    -Parallel
```

---

## Example 7 — Stop execution on first failure

```powershell
Stop-DkvStore `
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
10.0.0.11:7801        StopInstance:orders-1       SUCCESS  Stopped
10.0.0.12:7801        StopInstance:orders-2       SUCCESS  Stopped
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

## Node Stop API

Each node is stopped using the manager API:

```
POST /admin/v1/stores/{StoreName}/instances/{InstanceName}/stop
```

If `-Force` is specified:

```
POST /admin/v1/stores/{StoreName}/instances/{InstanceName}/stop?force=true
```

---

## Example Production Cluster

| Server      | Node      | ClustronPort | ClientPort |
|-------------|-----------|--------------|------------|
| 10.0.0.11   | orders-1  | 7811         | 7861       |
| 10.0.0.12   | orders-2  | 7811         | 7861       |
| 10.0.0.13   | orders-3  | 7811         | 7861       |

Stopping the store without `-InstanceName` stops all nodes.

---

# Related Cmdlets

- Connect-DkvManager
- New-DkvStore
- Add-DkvInstance
- Start-DkvStore
- Get-DkvStore
- Watch-DkvStoreMetrics
