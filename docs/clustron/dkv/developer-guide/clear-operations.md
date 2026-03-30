# Clear Operations

Clear operations allow you to remove **large sets of data efficiently**.

Instead of deleting keys one by one, you can clear multiple keys based on patterns.

---

## Clear All Data

Remove all keys from a store:

```csharp id="clear_all"
await client.ClearAsync();
```

* Deletes all data in the store
* Use with caution

---

## Clear by Prefix

Remove keys that share a common prefix:

```csharp id="clear_prefix"
await client.ClearAsync(prefix: "user:");
```

---

### Example

```text id="prefix_example"
"user:1"
"user:2"
"user:3"
```

All matching keys will be removed.

---

## Clear by Range

Remove keys within a specific range:

```csharp id="clear_range"
await client.ClearAsync(
    startKey: "user:1",
    endKey: "user:100");
```

---

## When to Use Clear Operations

* Removing temporary data
* Resetting application state
* Cleaning up test environments
* Managing large datasets

---

## Important Notes

* Clear operations may affect many keys
* Use prefixes carefully to avoid unintended deletions
* These operations are not transactional

---

## What’s Next

👉 Continue to **Leases** to manage ownership and lifecycle
