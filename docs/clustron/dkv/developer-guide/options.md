# Options

Clustron DKV allows you to control operation behavior using **options**.

Options extend the API without changing how you call it.

---

## Why Options Matter

Basic usage is simple:

```csharp
await client.PutAsync("key", "value");
```

But real applications need more control:

* Conditional writes
* Expiration (TTL)
* Indexing for search
* Ownership via leases
* Concurrency control

Options enable all of this.

---

## Put Options

`PutOptions` controls how data is written.

You can create options using helper methods:

```csharp
var opts = Put.WithEntity("customer")
    .WithLabel("city", "London")
    .WithTtl(TimeSpan.FromMinutes(5));

await client.PutAsync("cust:1", customer, opts);
```

---

## Core Capabilities

### Entity (Required for Search)

```csharp
Put.WithEntity("customer")
```

* Defines logical grouping
* Enables indexing
* Required for search queries

---

### Labels (Indexed Metadata)

```csharp
.WithLabel("city", "London")
.WithLabel("age", "30")
```

* Adds searchable fields
* Used in `SearchQuery`

---

### Indexed vs Non-Indexed Labels

```csharp
.WithLabel("debug", "value", indexed: false)
```

* `indexed: true` (default) → searchable
* `indexed: false` → metadata only

---

## TTL (Time-to-Live)

```csharp
Put.WithTtl(TimeSpan.FromMinutes(10))
```

* Automatically removes key after duration
* Used for expiration (not ownership)

---

## Lease Attachment

```csharp
Put.WithLease(lease.Id)
```

or

```csharp
await client.PutAsync("worker:1", "active",
    Put.WithEntity("worker").WithLease(lease.Id));
```

* Associates key with a lease
* Key is removed when lease expires

---

## Lock Attachment

```csharp
Put.WithLock(lockHandle)
```

* Ensures operation is performed under lock
* Used for safe coordination

---

## Conditional Writes

### IfAbsent

```csharp
Put.IfAbsent()
```

or chained:

```csharp
Put.WithEntity("order").IfAbsent()
```

* Only writes if key does not exist
* Prevents overwriting

---

### IfMatch (Optimistic Concurrency)

```csharp
Put.WithIfMatch(version)
```

* Writes only if version matches
* Prevents overwriting newer data

---

## Content Type

```csharp
Put.WithContentType("application/json")
```

* Describes stored data format
* Useful for interoperability

---

## Combining Options

All options are composable:

```csharp
var opts = Put.WithEntity("order")
    .WithLabel("status", "pending")
    .WithTtl(TimeSpan.FromMinutes(5))
    .IfAbsent();

await client.PutAsync("order:1", order, opts);
```

---

## Metadata Model (Conceptual)

Internally, options build metadata:

```text
Key → Value
    → Entity
    → Labels
    → TTL
    → Lease
    → Lock
```

This metadata drives:

* Search
* Expiration
* Coordination

---

## When to Use Which Option

| Requirement         | Option          |
| ------------------- | --------------- |
| Search / Query      | Entity + Labels |
| Expiration          | TTL             |
| Ownership           | Lease           |
| Concurrency control | IfMatch         |
| Prevent overwrite   | IfAbsent        |
| Coordination        | Lock            |

---

## Important Notes

* Options are optional but powerful
* Labels are required for search
* TTL and Lease serve different purposes
* Conditional options prevent data corruption

---

## Best Practices

* Always define **Entity + Labels** for queryable data
* Use TTL for data expiration
* Use Lease for ownership and lifecycle
* Use IfMatch for safe updates
* Keep option usage consistent across your system

---

## Key Takeaway

```text
Options = Control over behavior without changing API shape
```

They are the foundation of Clustron’s flexibility.

---

## What’s Next

👉 Continue to **Error Handling** to handle failures safely
