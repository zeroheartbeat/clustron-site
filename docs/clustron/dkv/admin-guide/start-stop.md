# Starting & Stopping Stores

After creating a store, you need to **start it** before it can be used.

You can also **stop it** when it is no longer needed.

---

## Store Lifecycle

A store goes through the following states:

```text id="store_lifecycle"
Created → Started → Running → Stopped
```

* **Created** → configuration exists
* **Started** → nodes are launched
* **Running** → store is active and accepting requests
* **Stopped** → nodes are shut down

---

## Command: Start-DkvStore

Starts all nodes for a store.

### Syntax

```powershell id="start_syntax"
Start-DkvStore <StoreName>
```

---

### Example

```powershell id="start_example"
Start-DkvStore TestStore
```

---

### What Happens When You Start a Store?

* All configured nodes are launched
* Cluster is formed
* Store becomes available for clients

---

## Command: Stop-DkvStore

Stops all nodes for a store.

### Syntax

```powershell id="stop_syntax"
Stop-DkvStore <StoreName>
```

---

### Example

```powershell id="stop_example"
Stop-DkvStore TestStore
```

---

### What Happens When You Stop a Store?

* All nodes are shut down
* Clients can no longer connect
* In-memory state is cleared (unless persisted externally)

---

## Important Notes

* A store must be started before clients can connect
* Stopping a store disconnects all clients
* You can restart a store using `Start-DkvStore`

---

## Common Issues

### Store Does Not Start

* Ensure ports are available
* Verify managers are connected
* Check previous configuration

---

### Clients Cannot Connect

* Ensure the store is running
* Verify client port configuration
* Check firewall rules

---

## What’s Next

👉 Continue to **Viewing Store Information** to inspect store status and details
