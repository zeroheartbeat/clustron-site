
---
title: Add-DkvInstance
sidebar_position: 1
---

# Add-DkvInstance

## Synopsis

Adds one or more **instances (nodes)** to an existing Clustron Distributed Key-Value (DKV) store.

---

# Description

`Add-DkvInstance` expands an existing store by adding additional instances to it.

Each instance represents a **store node** running on a cluster machine. Adding instances allows the store to scale horizontally and distribute workload across multiple servers.

The cmdlet supports two modes:

1. **Single Instance Mode** — Add one instance.
2. **Multi Instance Mode** — Add multiple instances in a single command.

The operation is executed against one or more **manager services** resolved through:

- `-Managers` parameter
- Active `Connect-DkvManager` session context

For each manager service the cmdlet sends the following API request:

POST /admin/v1/stores/&#123;StoreName&#125;/instances

Note: This cmdlet is currently **planned for a future release of Clustron**.

---

# Syntax

### Add a single instance

```powershell
Add-DkvInstance -StoreName <string> -InstanceName <string> -ClustronPort <int> -ClientPort <int>
```

### Add multiple instances

```powershell
Add-DkvInstance -StoreName <string> -Nodes <InstanceDefinition[]>
```

Optional execution parameters inherited from `DkvCmdletBase`:

```powershell
[-Managers <string[]>] [-Port <int>] [-TimeoutSec <int>] [-Parallel] [-FailFast]
```

---

# Parameters

## -StoreName

Name of the store to which the instance(s) should be added.

Example:

OrdersStore

Required: **Yes**

---

## -InstanceName

Name of the instance being added when using **Single Instance mode**.

Example:

orders-2

Required: **Yes** (Single parameter set)

---

## -ClustronPort

Internal **cluster communication port** used by the instance.

Example:

7812

Required: **Yes** (Single parameter set)

---

## -ClientPort

Port exposed for **client applications** to connect to the instance.

Example:

7862

Required: **Yes** (Single parameter set)

---

## -Nodes

Defines multiple instance definitions when using **Multi Instance mode**.

Each node definition includes:

Property | Description
-------- | -----------
InstanceName | Instance identifier
ClustronPort | Internal cluster port
ClientPort | Client access port

Required: **Yes** (Multi parameter set)

---

## -Managers

Target Clustron manager services.

Example:

-Managers 10.0.0.11,10.0.0.12

If omitted, the cmdlet uses the active `Connect-DkvManager` session.

---

## -Port

Manager API port used when resolving managers.

Default:

7801

---

## -TimeoutSec

Maximum allowed time for the operation.

Default:

30 seconds

---

## -Parallel

Executes the operation across manager services concurrently.

---

## -FailFast

Stops execution immediately when a failure occurs.

---

# Examples

## Example 1 — Add a single instance

```powershell
Add-DkvInstance `
    -StoreName OrdersStore `
    -InstanceName orders-2 `
    -ClustronPort 7812 `
    -ClientPort 7862
```

---

## Example 2 — Add instance using explicit manager services

```powershell
Add-DkvInstance `
    -StoreName OrdersStore `
    -InstanceName orders-2 `
    -ClustronPort 7812 `
    -ClientPort 7862 `
    -Managers 10.0.0.11,10.0.0.12
```

---

## Example 3 — Add instance using connected manager session

```powershell
Connect-DkvManager -Managers 10.0.0.11,10.0.0.12

Add-DkvInstance `
    -StoreName OrdersStore `
    -InstanceName orders-2 `
    -ClustronPort 7812 `
    -ClientPort 7862
```

---

## Example 4 — Add multiple instances

```powershell
$nodes = @(
    [InstanceDefinition]@{
        InstanceName = "orders-2"
        ClustronPort = 7812
        ClientPort   = 7862
    },
    [InstanceDefinition]@{
        InstanceName = "orders-3"
        ClustronPort = 7813
        ClientPort   = 7863
    }
)

Add-DkvInstance -StoreName OrdersStore -Nodes $nodes
```

---

# Output

The command writes results to the console in table format.

Example:

Manager               Action       Result   Message
------------------------------------------------------
10.0.0.11:7801        AddInstance  SUCCESS  Instance added
10.0.0.12:7801        AddInstance  SUCCESS  Instance added

Each row represents the result returned by a manager.

---

# Related Cmdlets

- Connect-DkvManager
- New-DkvStore
- Start-DkvStore
- Stop-DkvStore
- Get-DkvStore
- Watch-DkvStoreMetrics
