# Creating a Store

A **store** is the primary unit in Clustron DKV.

It represents a logical cluster where data and coordination are managed.

---

## What You Will Do

Creating a store defines:

* How many nodes will run
* How they are named
* Which ports they will use

---

## Command: New-DkvStore

Use this command to create a new store.

### Syntax

```powershell id="store_syntax"
New-DkvStore `
  -Name <StoreName> `
  -InstancePrefix <Prefix> `
  -InstanceCount <Count> `
  -ClustronPort <Port> `
  -ClientPort <Port>
```

---

## Parameters

| Parameter         | Description                         |
| ----------------- | ----------------------------------- |
| `-Name`           | Name of the store                   |
| `-InstancePrefix` | Prefix used to name nodes           |
| `-InstanceCount`  | Number of nodes to create           |
| `-ClustronPort`   | Starting cluster communication port |
| `-ClientPort`     | Starting client connection port     |

---

## Understanding InstanceCount

`InstanceCount` controls how many nodes will be created.

### Single Machine

* Set `InstanceCount > 1`
* Multiple nodes run on the same machine

```text id="single_machine"
InstanceCount = 2 → node1, node2 (same machine)
```

---

### Multiple Machines

* Use `InstanceCount = 1` per machine
* Each machine runs its own node

```text id="multi_machine"
Machine A → node1  
Machine B → node2  
```

---

## Understanding Ports

Ports are assigned starting from the values you provide.

For multiple nodes, ports are automatically incremented.

### Example

```text id="port_example"
ClustronPort = 7811 → 7811, 7812, ...
ClientPort   = 7861 → 7861, 7862, ...
```

Each node gets its own unique ports.

---

## Example: Single Machine (2 Nodes)

```powershell id="example_single_store"
New-DkvStore `
  -Name TestStore `
  -InstancePrefix node `
  -InstanceCount 2 `
  -ClustronPort 7811 `
  -ClientPort 7861
```

---

## Example: Multi-Machine Setup

Run on each machine:

```powershell id="example_multi_store"
New-DkvStore `
  -Name TestStore `
  -InstancePrefix node `
  -InstanceCount 1 `
  -ClustronPort 7811 `
  -ClientPort 7861
```

---

## What Happens After Creation?

* The store configuration is registered
* Nodes are defined but not yet running
* You must start the store to activate it

---

## Common Issues

### Port Already in Use

* Ensure selected ports are free
* Avoid overlapping ranges between nodes

---

### Incorrect InstanceCount

* Too high → port conflicts
* Too low → insufficient nodes

---

## What’s Next

👉 Continue to **Starting & Stopping Stores** to activate your store
