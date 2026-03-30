# Client Lifecycle

Clustron DKV clients are designed to be **reused, efficient, and safe for concurrent use**.

Understanding how to manage the client lifecycle is important for building reliable applications.

---

## Creating the Client

Clients are obtained through `IDkvClientProvider`:

```csharp id="create_client"
var client = await provider.GetAsync("default");
```

* The provider manages creation and reuse
* You should not create clients manually

---

## Reuse the Client

Clients are **intended to be reused**.

```text id="reuse_model"
Create once → reuse everywhere
```

---

### Recommended Pattern

```csharp id="reuse_pattern"
public class OrderService
{
    private readonly IDkvClient _client;

    public OrderService(IDkvClientProvider provider)
    {
        _client = provider.GetAsync("orders").GetAwaiter().GetResult();
    }
}
```

---

## Thread Safety

Clients are **thread-safe**.

```text id="thread_safe"
Multiple threads → same client → safe
```

You can:

* Share the same client across threads
* Use it in parallel operations
* Use it in async workflows

---

## Do NOT Create Clients Per Operation

Avoid this pattern:

```csharp id="bad_pattern"
var client = await provider.GetAsync("default");

await client.PutAsync("key", "value");
```

Repeated creation leads to:

* unnecessary overhead
* connection churn
* reduced performance

---

## Disposal

### Client

You typically **do not need to dispose the client manually**.

* Lifecycle is managed by the provider
* Reused across the application

---

### Transactions

Transactions must be disposed:

```csharp id="tx_dispose"
await using var tx = await client.BeginTransactionAsync();
```

---

### Watch Streams

Watch operations should be stopped when no longer needed:

```csharp id="watch_stop"
await foreach (var evt in client.Watch.WatchKeyAsync("key"))
{
    // use cancellation token or break to stop
}
```

---

## Application Lifetime

Clients should live as long as your application:

* Register once at startup
* Reuse across services
* Dispose automatically when application shuts down

---

## Multiple Stores

If you use multiple stores:

```csharp id="multi_client"
var orders = await provider.GetAsync("orders");
var cache  = await provider.GetAsync("cache");
```

Each client is:

* independently managed
* reusable
* thread-safe

---

## Best Practices

* Resolve client once and reuse
* Avoid creating clients inside loops
* Use provider for lifecycle management
* Dispose transactions properly
* Keep long-running operations outside transactions

---

## Key Takeaway

```text id="lifecycle_takeaway"
Client = shared, reusable, long-lived
```

You do not treat it like a short-lived object.

---

## What’s Next

👉 Explore **Samples** for real-world usage
