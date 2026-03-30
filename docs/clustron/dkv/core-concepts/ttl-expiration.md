# TTL & Expiration

Clustron DKV allows you to attach a **time-to-live (TTL)** to keys.

TTL automatically removes data after a specified duration.

---

## What is TTL?

TTL (time-to-live) defines how long a key should exist.

After the TTL expires:

* The key is automatically removed
* The value is no longer accessible

---

## Setting TTL

You can set TTL when storing a value:

```csharp id="ttl_put"
await client.PutAsync(
    "session:abc123",
    "active",
    ttl: TimeSpan.FromMinutes(10));
```

This key will expire after 10 minutes.

---

## Reading Expiring Keys

```csharp id="ttl_get"
var result = await client.GetAsync<string>("session:abc123");

if (result.Success)
{
    Console.WriteLine(result.Value);
}
```

Once the TTL expires:

* `Success` will be `false`
* The key behaves as if it does not exist

---

## Updating TTL

You can reset the TTL by writing the key again:

```csharp id="ttl_update"
await client.PutAsync(
    "session:abc123",
    "active",
    ttl: TimeSpan.FromMinutes(10));
```

This effectively extends the lifetime of the key.

---

## When to Use TTL

TTL is useful for:

* Sessions and temporary data
* Caching with automatic cleanup
* Time-based invalidation
* Resource tracking

---

## Expiration Behavior

* Expiration happens automatically
* No manual cleanup is required
* Expired keys are removed consistently across the cluster

---

## TTL in Distributed Mode

In distributed mode:

* TTL is managed across all nodes
* Expiration is coordinated
* All clients observe consistent behavior

---

## Beyond TTL

TTL introduces the idea of **lifecycle management**.

Clustron extends this further with:

* **Leases** → control ownership and lifecycle of resources
* **Coordination primitives** → react to state changes

---

## What’s Next

👉 Continue to **Consistency Model** to understand how data behaves across nodes
