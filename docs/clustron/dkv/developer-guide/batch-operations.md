# Batch Operations

Batch operations allow you to execute **multiple operations together as a group**.

Unlike bulk operations, batches are about **grouping logic**, not just improving performance.

---

## When to Use Batch Operations

Use batch operations when:

* You want to group multiple operations together
* You want to reduce round trips
* You want to execute related operations in sequence

---

## Command: ExecuteBatchAsync

Use `ExecuteBatchAsync` to run multiple operations in one batch.

### Example

```csharp id="batch_example"
await client.ExecuteBatchAsync(batch =>
{
    batch.Put("user:1", "Ali");
    batch.Put("user:2", "Sarah");
    batch.Delete("user:3");
});
```

---

## What Happens in a Batch?

* Operations are sent together in one request
* They are executed in order
* The system processes them as a group

---

## Batch vs Bulk

| Aspect         | Bulk Operations           | Batch Operations          |
| -------------- | ------------------------- | ------------------------- |
| Purpose        | Process many keys         | Group multiple operations |
| Operation Type | Same type (PutMany, etc.) | Mixed (Put, Delete, etc.) |
| Execution      | Independent               | Sequential                |
| Use Case       | Performance optimization  | Logical grouping          |

---

## Important Notes

* Batch operations are **not transactional**
* Some operations may succeed while others fail
* Use transactions for strict consistency

---

## Example Use Case

```csharp id="batch_usecase"
await client.ExecuteBatchAsync(batch =>
{
    batch.Put("order:1001", "created");
    batch.Put("inventory:item1", "reserved");
});
```

This ensures related updates are sent and executed together.

---

## When to Use Batch vs Transactions

* Use **Batch** when:

  * You want grouped execution
  * Partial success is acceptable

* Use **Transactions** when:

  * You need all-or-nothing behavior
  * Consistency is critical

---

## What’s Next

👉 Continue to **Clear Operations** for removing large sets of data
