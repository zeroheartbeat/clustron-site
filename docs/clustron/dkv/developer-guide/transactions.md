# Transactions

Transactions allow you to execute **multiple operations as a single consistent unit**.

They ensure that your application behaves correctly even when multiple clients are modifying data concurrently.

---

## Why Transactions Matter

In distributed systems, multiple clients may update the same data at the same time.

Without transactions, this can lead to:

* Lost updates
* Partial updates
* Inconsistent state

Transactions ensure that:

```text id="tx_model"
All operations succeed together → OR → none are applied
```

---

## Starting a Transaction

```csharp
await using var tx = await client.BeginTransactionAsync();
```

* Creates a transaction context
* All operations inside the transaction are isolated

---

## Reading Inside a Transaction

```csharp
var value = await tx.GetAsync<int>("keyA");
```

* Reads are part of the transaction
* Used to make decisions before writing

---

## Writing Inside a Transaction

```csharp
await tx.PutAsync("keyA", 100);
await tx.DeleteAsync("keyB");
```

* Changes are not visible until committed
* Writes are staged inside the transaction

---

## Committing a Transaction

```csharp
var result = await tx.CommitAsync();

if (result.IsSuccess)
{
    Console.WriteLine("Transaction committed");
}
else
{
    Console.WriteLine("Transaction failed");
}
```

* Applies all changes atomically
* May fail if conflicts occur

---

## Rolling Back a Transaction

```csharp
await tx.RollbackAsync();
```

* Discards all changes
* No updates are applied

---

## Example: Updating Multiple Values

```csharp
await using var tx = await client.BeginTransactionAsync();

var a = await tx.GetAsync<int>("keyA");
var b = await tx.GetAsync<int>("keyB");

await tx.PutAsync("keyA", a.Value + 5);
await tx.PutAsync("keyB", b.Value + 5);

await tx.CommitAsync();
```

This ensures both updates happen together.

---

## Conflict Handling (Important)

Transactions use **optimistic concurrency**.

This means:

* Data is read
* If data changes before commit → transaction fails

---

### Example

```csharp
await using var tx = await client.BeginTransactionAsync();

var value = await tx.GetAsync<int>("keyA");

// External update happens here
await client.PutAsync("keyA", 500);

await tx.PutAsync("keyA", value.Value + 1);

var result = await tx.CommitAsync();

if (!result.IsSuccess)
{
    Console.WriteLine("Transaction failed due to conflict");
}
```

---

### Why This Happens

```text
TX reads old value → external update changes value → commit detects mismatch → fails
```

This prevents overwriting newer data.

---

## Delete Inside Transactions

```csharp
await using var tx = await client.BeginTransactionAsync();

await tx.DeleteAsync("keyB");

var inside = await tx.GetAsync<int>("keyB");

Console.WriteLine(inside.IsSuccess); // false inside TX

await tx.CommitAsync();
```

Deletes behave consistently within the transaction.

---

## Batch vs Transaction

| Feature        | Batch                    | Transaction        |
| -------------- | ------------------------ | ------------------ |
| Purpose        | Group operations         | Ensure consistency |
| Execution      | Sequential               | Atomic             |
| Failure        | Partial success possible | All-or-nothing     |
| Conflict check | No                       | Yes                |

---

## When to Use Transactions

Use transactions when:

* Multiple updates must succeed together
* You need strong consistency
* You are modifying related data
* You want conflict detection

---

## Important Notes

* Transactions may fail due to conflicts
* Always check `CommitAsync()` result
* Keep transactions short-lived
* Avoid long-running logic inside transactions

---

## Best Practices

* Read before writing when needed
* Retry transactions on conflict if appropriate
* Minimize number of operations inside a transaction
* Use batch if consistency is not required

---

## Key Takeaway

```text id="tx_takeaway"
Transactions = Consistency + Conflict Safety
```

They ensure your system behaves correctly under concurrency.

---

## What’s Next

👉 Continue to **Serialization** to control how data is stored
