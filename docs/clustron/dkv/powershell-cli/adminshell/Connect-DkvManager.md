---
title: Connect-DkvManager
sidebar_position: 2
---

# Connect-DkvManager

## Synopsis

Connects the current PowerShell session to one or more **Clustron DKV Manager services**.

---

# Description

`Connect-DkvManager` establishes a **manager context** used by all other Clustron administrative cmdlets.

Once connected, the specified manager endpoints become the **default targets** for subsequent administrative operations such as:

- Creating stores
- Starting and stopping nodes
- Adding instances
- Monitoring metrics

The connection information is stored in the **PowerShell session context**, meaning you only need to connect once per session.

If a connection already exists, the cmdlet fails unless **`-Force`** is specified.

In a Clustron deployment, the **Manager service runs on each cluster server**. Administrative operations must therefore be executed on **all manager services participating in the cluster**.

For this reason, `Connect-DkvManager` accepts **multiple manager endpoints** representing the full set of cluster managers. Subsequent administrative commands will execute operations against **all connected managers** to keep the cluster configuration consistent.

If one or more managers are unavailable, administrative operations may fail because the operation cannot be applied across the entire cluster.

---

# Syntax

```powershell
Connect-DkvManager -Managers <string[]> [-Port <int>] [-Force]
```

---

# Parameters

## -Managers

One or more Clustron **Manager service endpoints** to connect to.

Managers may be specified in multiple formats:

| Format | Example |
|------|------|
| Hostname | server1 |
| Host + port | server1:7801 |
| IP address | 10.0.0.11 |
| Full URI | http://10.0.0.11:7801 |

Example:

```powershell
-Managers 10.0.0.11,10.0.0.12,10.0.0.13
```

Required: **Yes**

---

## -Port

Default manager port used when a port is not explicitly specified in `-Managers`.

Default value:

```
7801
```

Example:

```powershell
-Port 7801
```

Required: **No**

---

## -Force

Forces replacement of an existing manager connection.

If a connection already exists, the cmdlet normally fails to prevent accidental context replacement.

Using `-Force` clears the current context and replaces it with the new manager list.

Required: **No**

---

# Examples

## Example 1 — Connect to a single manager

```powershell
Connect-DkvManager -Managers 10.0.0.11
```

Output:

```
Manager               Action        Result   Message
----------------------------------------------------
10.0.0.11:7801        Connect       SUCCESS  Connected
```

---

## Example 2 — Connect to multiple cluster managers

```powershell
Connect-DkvManager -Managers 10.0.0.11,10.0.0.12,10.0.0.13
```

This connects the PowerShell session to **all cluster managers** so that administrative operations can be executed across the entire cluster.

---

## Example 3 — Specify managers with explicit ports

```powershell
Connect-DkvManager -Managers 10.0.0.11:7801,10.0.0.12:7801
```

---

## Example 4 — Use full HTTP URIs

```powershell
Connect-DkvManager -Managers http://10.0.0.11:7801,http://10.0.0.12:7801
```

---

## Example 5 — Override the default port

```powershell
Connect-DkvManager -Managers 10.0.0.11,10.0.0.12 -Port 7801
```

When a port is not specified per manager, the value provided via `-Port` is used.

---

## Example 6 — Replace an existing connection

```powershell
Connect-DkvManager -Managers 10.0.0.11,10.0.0.12 -Force
```

This clears the existing manager context and replaces it.

---

## Example 7 — Connect using hostnames

```powershell
Connect-DkvManager -Managers server1,server2,server3
```

Hostnames must resolve to reachable cluster managers.

---

# Output

`Connect-DkvManager` writes the connection results to the console in table format.

Example:

```
Manager               Action        Result   Message
----------------------------------------------------
10.0.0.11:7801        Connect       SUCCESS  Connected
10.0.0.12:7801        Connect       SUCCESS  Connected
10.0.0.13:7801        Connect       SUCCESS  Connected
```

The cmdlet **does not return an object**. Instead, it stores the manager connection information in the **PowerShell session context**.

---

# Notes

## Manager Context

Once connected, the manager endpoints are stored in the **session manager context**.

Subsequent administrative cmdlets automatically use this context.

Example:

```powershell
Connect-DkvManager -Managers 10.0.0.11,10.0.0.12

New-DkvStore -Name OrdersStore
```

The store creation command will automatically target the connected managers.

---

## Invalid Addresses

The following addresses are **not allowed** as connection targets:

```
0.0.0.0
::
::0
```

These represent unspecified bind addresses and cannot be used to initiate connections.

---

## Recommended Production Configuration

For production environments, connect to **all cluster manager services**.

Example:

```powershell
Connect-DkvManager -Managers 10.0.0.11,10.0.0.12,10.0.0.13
```

This ensures administrative operations are executed consistently across the cluster.

---

# Related Cmdlets

- Add-DkvInstance
- New-DkvStore
- Start-DkvStore
- Stop-DkvStore
- Get-DkvStore
- Watch-DkvStoreMetrics
