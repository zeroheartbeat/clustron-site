# Viewing Store Information

You can view details about your stores using the `Get-DkvStore` command.

This helps you:

* Check if a store is running
* Inspect node configuration
* Verify ports and instance details

---

## Command: Get-DkvStore

Retrieves information about one or more stores.

### Syntax

```powershell id="get_syntax"
Get-DkvStore [<StoreName>]
```

---

## Examples

### View All Stores

```powershell id="get_all"
Get-DkvStore
```

---

### View Specific Store

```powershell id="get_one"
Get-DkvStore TestStore
```

---

## What Information is Shown?

The output typically includes:

* Store name
* Status (Running / Stopped)
* Number of nodes
* Node details (names, ports)
* Client endpoints

---

## Example Output (Conceptual)

```text id="get_output"
Store: TestStore
Status: Running

Nodes:
  node1 → ClustronPort: 7811, ClientPort: 7861
  node2 → ClustronPort: 7812, ClientPort: 7862
```

---

## When to Use This Command

Use `Get-DkvStore` to:

* Confirm the store is running
* Verify node count and configuration
* Check assigned ports
* Debug connectivity issues

---

## Common Issues

### Store Not Found

* Ensure the store name is correct
* Verify you are connected to the manager

---

### Store is Stopped

* Use `Start-DkvStore` to start the store

---

## What’s Next

👉 Continue to **Multi-Node Configuration** to understand how to scale stores
