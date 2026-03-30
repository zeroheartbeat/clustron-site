# Error Handling

Clustron DKV operations return structured results using `KvResult`.

Instead of relying on exceptions, you handle outcomes explicitly based on **status and metadata**.

---

## Understanding `KvResult`

Every operation returns a `KvResult` (or `KvResult<T>`).

```csharp
var result = await client.PutAsync("key", "value");
```

---

## Core Properties

### Status

```csharp
result.Status
```

Indicates the outcome of the operation.

Common values:

* `Success`
* `NotFound`
* `Conflict`
* `InvalidInput`
* `Unavailable`
* `TransportError`
* `Locked`

---

### IsSuccess

```csharp
if (result.IsSuccess)
{
    // operation succeeded
}
```

Derived helper:

```text
Status == Success AND no error
```

---

### Error

```csharp
result.Error
```

* Contains error message if operation failed
* Useful for logging and debugging

---

## Working with `KvResult<T>`

```csharp
var result = await client.GetAsync<int>("key");

if (result.IsSuccess)
{
    Console.WriteLine(result.Value);
}
```

* `Value` is available only on success
* Always check `IsSuccess` first

---

## Status-Based Handling (Important)

You should handle results based on `KvStatus`.

---

### NotFound

```csharp
if (result.Status == KvStatus.NotFound)
{
    // key does not exist
}
```

---

### Conflict (Optimistic Concurrency)

```csharp
if (result.Status == KvStatus.Conflict)
{
    // retry logic
}
```

Occurs when:

* `IfMatch` fails
* Transaction commit fails

---

### Locked

```csharp
if (result.Status == KvStatus.Locked)
{
    // resource is locked
}
```

---

### InvalidInput

```csharp
if (result.Status == KvStatus.InvalidInput)
{
    // developer or validation issue
}
```

---

### Unavailable / TransportError

```csharp
if (result.Status == KvStatus.Unavailable ||
    result.Status == KvStatus.TransportError)
{
    // transient issue → retry
}
```

---

## Mutation Semantics

### Mutated

```csharp
if (result.Mutated)
{
    // state actually changed
}
```

---

### IsUpdate

```csharp
if (result.IsUpdate)
{
    // existing value was overwritten
}
```

---

### Example

```csharp
var result = await client.PutAsync("key", "value");

if (result.IsSuccess)
{
    if (result.IsUpdate)
        Console.WriteLine("Updated existing value");
    else
        Console.WriteLine("Created new value");
}
```

---

## Version & Concurrency

```csharp
var version = result.Version;
```

* Used for optimistic concurrency
* Required for `IfMatch` operations

---

## TTL & Expiry

```csharp
var ttl = result.TimeToLive;
var expiry = result.ExpiryUtc;
```

* Indicates remaining lifetime
* Useful for monitoring and debugging

---

## Metadata Access

```csharp
var metadata = result.Metadata;
```

Includes:

* Labels
* Entity
* Lease
* Other entry metadata

---

## Retry Strategy

Retry only for **transient or conflict scenarios**.

---

### Example: Retry on Conflict

```csharp
for (int i = 0; i < 3; i++)
{
    var result = await client.PutAsync(
        "key",
        "value",
        Put.WithIfMatch(version));

    if (result.IsSuccess)
        break;

    if (result.Status != KvStatus.Conflict)
        break;

    await Task.Delay(50);
}
```

---

## When to Retry

Retry when:

* `Conflict`
* `Locked`
* `Unavailable`
* `TransportError`

---

## When NOT to Retry

Do not retry when:

* `InvalidInput`
* `NotFound` (depends on logic)
* Logical/business errors

---

## Exceptions vs Results

| Scenario           | Behavior   |
| ------------------ | ---------- |
| Expected outcome   | `KvResult` |
| Unexpected failure | Exception  |

Examples of exceptions:

* Serialization failure
* Invalid arguments
* Internal system errors

---

## Best Practices

* Always check `IsSuccess` or `Status`
* Use `Status` for precise handling
* Retry only for transient failures
* Use `Version` for safe updates
* Use `Mutated` to detect actual changes

---

## Key Takeaway

```text
KvResult = Status + Metadata + Concurrency + Outcome
```

It is not just success/failure — it describes the full result of the operation.

---

## What’s Next

👉 Continue to **Client Lifecycle** to manage resources and usage patterns
