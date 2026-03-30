# Locks

Locks allow you to ensure that **only one client can access a resource at a time**.

They are built on top of **leases**, which means they are safe even in the presence of failures.

---

## Why Use Locks?

In distributed systems, multiple instances may try to perform the same operation at the same time.

Without coordination, this can lead to:

* Duplicate processing
* Data corruption
* Inconsistent state

Locks ensure that only one instance performs a critical operation.

---

## How Locks Work

When a client acquires a lock:

* It becomes the **exclusive owner** of that lock
* Other clients cannot acquire it until it is released
* The lock is backed by a lease

```text id="lock_model"
Lock = Exclusive access + Lease-based ownership
```

---

## Acquiring a Lock

```csharp id="lock_acquire"
var lease = await client.Leases.GrantAsync(TimeSpan.FromSeconds(10));

var lockHandle = await client.Locks.AcquireAsync(
    "lock:order:1001",
    lease.Id);
```

* The lock is tied to the lease
* Ownership lasts as long as the lease is active

---

## Releasing a Lock

Locks are released automatically when:

* The lease expires
* The lease is revoked

You typically do not need to release locks manually.

---

## Example: Prevent Duplicate Processing

```csharp id="lock_example"
var lease = await client.Leases.GrantAsync(TimeSpan.FromSeconds(10));

var lockHandle = await client.Locks.AcquireAsync("lock:job:1", lease.Id);

if (lockHandle.Acquired)
{
    await client.PutAsync("job:1", "processing");

    // do work here

    await client.Leases.RevokeAsync(lease.Id);
}
```

If another worker tries to acquire the same lock:

* It will fail until the lock is released

---

## What Happens on Failure?

If the process crashes:

* The lease is not renewed
* The lease expires
* The lock is automatically released

This prevents deadlocks.

---

## TTL Behavior

Locks do not rely on TTL directly.

Instead:

* The lease duration acts as the lifetime of the lock
* If not renewed, the lock expires automatically

---

## Best Practices

* Use a meaningful key for the lock (e.g., `lock:order:1001`)
* Keep lease duration aligned with expected work time
* Renew leases for long-running operations
* Avoid holding locks longer than necessary

---

## When to Use Locks

Use locks when:

* Only one instance should perform an operation
* You need to protect shared resources
* You want to prevent duplicate execution

---

## Important Notes

* Locks are exclusive
* Locks are lease-backed (auto-expire)
* No manual cleanup is required

---

## What’s Next

👉 Continue to **Counters** to manage shared state
