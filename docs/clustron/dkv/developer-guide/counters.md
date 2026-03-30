# Counters

Counters allow you to maintain **shared numeric state** across multiple clients.

They provide **atomic updates**, ensuring consistency even in distributed environments.

---

## Why Use Counters?

In distributed systems, multiple instances may update the same value.

Without coordination, this can lead to:

* Lost updates
* Incorrect counts
* Race conditions

Counters ensure updates are applied safely.

---

## Incrementing a Counter

```csharp id="counter_add"
await client.Counters.AddAsync("counter:orders", 1);
```

* Increments the counter by the given value
* Safe across multiple clients

---

## Getting the Value

```csharp id="counter_get"
var result = await client.Counters.GetAsync("counter:orders");

if (result.Success)
{
    Console.WriteLine(result.Value);
}
```

---

## Setting a Value

```csharp id="counter_set"
await client.Counters.SetAsync("counter:orders", 100);
```

* Sets the counter explicitly

---

## Example: Tracking Active Workers

```csharp id="counter_example"
await client.Counters.AddAsync("workers:active", 1);

// do work

await client.Counters.AddAsync("workers:active", -1);
```

This ensures accurate tracking even with multiple instances.

---

## Key Properties

* Atomic updates
* Consistent across nodes
* No manual locking required

---

## When to Use Counters

Use counters when you need:

* Tracking counts (users, jobs, requests)
* Rate limiting
* Shared numeric state

---

## Important Notes

* Counters are safe for concurrent updates
* Values are numeric
* Works the same in InProc and Distributed modes

---

## What’s Next

👉 Continue to **Watch** to react to changes in real time
