# Ports & Networking

Clustron DKV uses different types of ports for communication between managers, nodes, and clients.

Understanding these ports is essential for proper setup and troubleshooting.

---

## Port Types Overview

Clustron uses three categories of ports:

* **Management Port** → manager communication
* **Cluster Ports** → node-to-node communication
* **Client Ports** → client-to-node communication

---

## Firewall Configuration

The Clustron installer automatically opens the required firewall ports on the local machine.

The following ranges are configured during installation:

```text
Management:              7801–7810
Cluster Communication:   7811–7860
Client Communication:    7861–7899
```

These ranges are designed to support multiple nodes on a single machine.

### Important

* These rules apply to the local machine only
* In multi-machine setups, ensure ports are accessible between machines
* Network firewalls or cloud security groups must allow this traffic

---

## Management Port (7801)

Each machine runs one manager on the **management port**.

```text id="mgmt_port"
Default: 7801
```

### Purpose

* Administrative commands
* Store creation and management
* Cluster coordination

### Usage

```powershell id="mgmt_connect"
Connect-DkvManager -Managers 10.0.0.11:7801
```

---

## Cluster Ports

Cluster ports are used for **communication between nodes**.

These ports are defined using `ClustronPort` when creating a store.

### Example

```text id="cluster_ports"
ClustronPort = 7811 → nodes use 7811, 7812, ...
```

### Purpose

* Node-to-node communication
* Data synchronization
* Cluster coordination

---

## Client Ports

Client ports are used for **client connections**.

These are defined using `ClientPort`.

### Example

```text id="client_ports"
ClientPort = 7861 → nodes use 7861, 7862, ...
```

### Purpose

* Application connections
* Client operations (Put/Get/Delete, etc.)

---

## How Ports Work Together

```text id="port_flow"
Client → Client Port → Node  
Node ↔ Cluster Port ↔ Node  
Admin → Management Port → Manager
```

---

## Single Machine Setup

* All ports run on the same machine
* No external networking required
* Ensure ports do not conflict

---

## Multi-Machine Setup

* Ports must be accessible across machines
* Firewall rules must allow traffic
* Use reachable IP addresses (not localhost)

---

## Common Issues

### Port Already in Use

* Ensure selected ports are free
* Avoid overlapping ranges

---

### Clients Cannot Connect

* Verify client port is open
* Check firewall rules
* Ensure store is running

---

### Nodes Not Joining Cluster

* Verify cluster ports are open
* Check connectivity between machines

---

## What’s Next

👉 Continue to **Monitoring & Metrics** to observe store behavior
