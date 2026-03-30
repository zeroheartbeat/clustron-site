# Keys & Values

Clustron DKV stores data as **key-value pairs**.

This is the simplest way to interact with the system.

---

## Keys

A **key** is a unique identifier for a value.

* Keys are strings
* Each key exists within a store
* Keys must be unique within a store

### Examples

```text id="keys_examples"
"user:1001"
"order:5002"
"session:abc123"
```

---

## Values

A **value** is the data associated with a key.

* Values can be any serializable type
* Serialization is handled automatically
* You can store simple or complex objects

### Examples

```csharp id="value_examples"
await client.PutAsync("user:1001", new User { Name = "Ali", Age = 30 });

await client.PutAsync("count", 42);
```

---

## Basic Operations

```csharp id="kv_ops"
await client.PutAsync("key", "value");

var result = await client.GetAsync<string>("key");

await client.DeleteAsync("key");
```

These operations work the same in both InProc and Distributed modes.

---

## Key Design

Good key design helps keep your data organized.

### Use Namespacing

```text id="key_namespace"
"user:1001"
"user:1002"
"order:5001"
```

---

### Keep Keys Predictable

* Use consistent patterns
* Avoid random or ambiguous names

---

## Scope of Keys

Keys are scoped to a store:

* Keys in one store are not visible in another
* Each store maintains its own key space

---

## Beyond Simple Storage

Keys in Clustron are not just for storing data.

They can also participate in:

* **TTL (expiration)**
* **Leases (lifecycle control)**
* **Coordination primitives (locks, counters, watch)**

This makes keys part of a broader system, not just a dictionary.

---

## What’s Next

👉 Continue to **TTL & Expiration** to understand how data expires automatically
