# Connecting to Cluster

Before you can manage stores, you must connect to one or more **Clustron managers**.

All administrative operations are performed through managers.

---

## What is a Manager?

A **manager** runs on each machine and is responsible for:

* Creating stores
* Starting and stopping nodes
* Managing cluster state

Each machine runs **one manager**, typically on port `7801`.

---

## Connection Model

How you connect depends on your setup.

---

### Single Machine

* Only one manager exists
* Connect using `localhost`

```powershell id="connect_single"
Connect-DkvManager -Managers localhost:7801
```

---

### Multiple Machines

* Each machine has its own manager
* You must connect to **all managers**

```powershell id="connect_multi"
Connect-DkvManager -Managers 10.0.0.11:7801,10.0.0.12:7801
```

---

## Command: Connect-DkvManager

Use this command to establish a connection with one or more managers.

### Syntax

```powershell id="connect_syntax"
Connect-DkvManager -Managers <host1:port>,<host2:port>,...
```

---

### Parameters

| Parameter   | Description                               |
| ----------- | ----------------------------------------- |
| `-Managers` | Comma-separated list of manager endpoints |

---

### Examples

#### Single Machine

```powershell id="example_single"
Connect-DkvManager -Managers localhost:7801
```

---

#### Multiple Machines

```powershell id="example_multi"
Connect-DkvManager -Managers 10.0.0.11:7801,10.0.0.12:7801
```

---

## What Happens After Connecting?

Once connected:

* You can create and manage stores
* Commands are executed across the cluster
* The system is ready for administration

---

## Important Notes

* One manager per machine
* Default management port is `7801`
* In multi-machine setups, include all managers
* Connection is required before running other admin commands

---

## Common Issues

### Cannot Connect to Manager

* Ensure Clustron is installed
* Verify the manager is running
* Check firewall rules for port `7801`

---

### Partial Connection (Multi-Machine)

* Ensure all manager endpoints are reachable
* Verify network connectivity between machines

---

## What’s Next

👉 Continue to **Creating a Store** to define and configure your first store
