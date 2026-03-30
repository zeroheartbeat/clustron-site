# Overview

The Admin Guide covers how to **create, run, and manage Clustron DKV stores**.

It is focused on operational tasks such as:

* Connecting to a cluster
* Creating and starting stores
* Managing nodes and ports
* Monitoring system behavior

---

## What is Administration in Clustron?

Administration involves managing the **lifecycle of a store**.

A typical workflow looks like:

```text id="admin_flow"
Connect → Create → Start → Monitor → Stop
```

---

## Core Responsibilities

As an administrator, you will:

* Connect to one or more managers
* Create stores with the desired configuration
* Start and stop stores
* Manage multi-node deployments
* Monitor performance and health

---

## Managers and Nodes

Clustron separates responsibilities:

* **Manager** → controls and manages stores (one per machine)
* **Node (store instance)** → runs the actual data and coordination

```text id="admin_model"
Machine
  ├── Manager (7801)
  └── Node(s) (cluster + client ports)
```

---

## Command-Line Interface

Clustron is managed using PowerShell commands.

Common commands include:

* `Connect-DkvManager` → connect to managers
* `New-DkvStore` → create a store
* `Start-DkvStore` → start a store
* `Stop-DkvStore` → stop a store
* `Get-DkvStore` → view store information

---

## Single Machine vs Multi-Machine

You can run Clustron in different topologies:

### Single Machine

* One manager
* Multiple nodes (using `InstanceCount`)
* Ideal for development and testing

---

### Multiple Machines

* One manager per machine
* One or more nodes per machine
* Suitable for production and scale

---

## Ports Overview

Clustron uses three types of ports:

* **Management Port (7801)** → manager communication
* **Cluster Ports** → node-to-node communication
* **Client Ports** → client connections

---

## What This Guide Covers

This guide will walk you through:

* Connecting to managers
* Creating and managing stores
* Configuring multi-node deployments
* Understanding ports and networking
* Monitoring and troubleshooting

---

## What’s Next

👉 Continue to **Connecting to Cluster** to connect to managers
