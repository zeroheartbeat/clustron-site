---
title: ClientShell Overview
sidebar_position: 1
---

# Clustron ClientShell

The **Clustron ClientShell** PowerShell module provides command-line access to a **Clustron Distributed Key-Value (DKV) store**.

It allows administrators, developers, and operators to interact with a store without writing application code.

ClientShell is typically used for:

- Testing store connectivity
- Inspecting or modifying key-value data
- Working with distributed counters
- Managing leases
- Observing changes in keys
- Running performance benchmarks
- Stress testing clusters

ClientShell communicates directly with **DKV client endpoints** exposed by store instances.

---

# Installing the Module

ClientShell is distributed as the PowerShell module:

```
Clustron.DKV.ClientShell
```

Import the module:

```powershell
Import-Module Clustron.DKV.ClientShell
```

Verify available commands:

```powershell
Get-Command -Module Clustron.DKV.ClientShell
```

---

# Connecting to a Store

Before executing most commands you must connect to a store.

Example:

```powershell
Connect-DkvStore `
    -StoreName OrdersStore `
    -Servers 10.0.0.11:7101,10.0.0.12:7102
```

Check connection status:

```powershell
Get-DkvConnection
```

Disconnect when finished:

```powershell
Disconnect-DkvStore
```

---

# Key-Value Operations

These cmdlets allow reading and writing items in the store.

| Cmdlet | Description |
|------|-------------|
| Set-DkvItem | Stores or updates a key-value item |
| Get-DkvItem | Retrieves a single item |
| Get-DkvItems | Retrieves multiple items |
| Remove-DkvItem | Deletes an item |
| Remove-DkvItems | Deletes multiple items |
| Refresh-DkvItem | Refreshes expiration |
| Set-DkvItemExpiration | Updates item expiration |
| Get-DkvItemMetadata | Returns metadata for a key |
| Test-DkvItem | Checks if a key exists |

Example:

```powershell
Set-DkvItem -Key "order:1001" -Value "confirmed"

Get-DkvItem -Key "order:1001"
```

---

# Distributed Counters

Clustron provides **atomic distributed counters** that can be updated safely across cluster nodes.

| Cmdlet | Description |
|------|-------------|
| Get-DkvCounter | Returns the counter value |
| Increment-DkvCounter | Atomically increments the counter |
| Decrement-DkvCounter | Atomically decrements the counter |
| Set-DkvCounter | Sets a counter value |

Example:

```powershell
Increment-DkvCounter -Key "orders:processed"
```

---

# Distributed Leases

Leases provide a **distributed coordination primitive** used for leader election, locks, and coordination.

| Cmdlet | Description |
|------|-------------|
| Grant-DkvLease | Attempts to acquire a lease |
| Refresh-DkvLease | Extends a lease |
| Revoke-DkvLease | Releases a lease |
| Test-DkvLease | Tests lease validity |

Example:

```powershell
Grant-DkvLease -Key "leader-election" -TtlSec 15
```

---

# Observability and Watching Keys

ClientShell allows monitoring changes in the store.

| Cmdlet | Description |
|------|-------------|
| Watch-DkvKey | Watches changes for a specific key |
| Watch-DkvPrefix | Watches keys with a prefix |

Example:

```powershell
Watch-DkvPrefix -Prefix "orders:"
```

This continuously displays updates to matching keys.

---

# Benchmarking and Performance Testing

ClientShell includes built-in benchmarking tools.

| Cmdlet | Description |
|------|-------------|
| Benchmark-DkvStore | Runs a benchmark workload |
| Stress-DkvStore | Performs sustained load testing |
| Test-DkvLatency | Measures request latency |
| Test-DkvThroughput | Measures cluster throughput |

Example:

```powershell
Test-DkvThroughput -DurationSec 30
```

---

# Connection and Diagnostics

These cmdlets help validate connectivity and cluster health.

| Cmdlet | Description |
|------|-------------|
| Connect-DkvStore | Connects to a DKV store |
| Disconnect-DkvStore | Closes the active connection |
| Get-DkvConnection | Displays connection details |
| Test-DkvConnection | Tests connectivity |

---

# Typical Workflow

A typical ClientShell session might look like this:

```powershell
Connect-DkvStore -StoreName OrdersStore -Servers 10.0.0.11:7101

Set-DkvItem -Key "order:1" -Value "created"

Get-DkvItem -Key "order:1"

Increment-DkvCounter -Key "orders:processed"

Test-DkvThroughput -DurationSec 10
```

---

# Related Documentation

- Getting Started
- Programmer Guide
- Architecture
- PowerShell AdminShell
- API Reference
