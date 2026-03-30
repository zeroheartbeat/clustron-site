# Bulk Operations

Bulk operations allow you to work with **multiple keys in a single call**.

This improves performance by reducing round trips.

---

## When to Use Bulk Operations

Use bulk operations when:

* You need to process many keys at once
* You want better performance
* You want to reduce network overhead

---

## Put Many

Store multiple key-value pairs:

```csharp id="put_many"
await client.PutManyAsync(new Dictionary<string, object>
{
    ["user:1"] = "Ali",
    ["user:2"] = "Sarah",
    ["user:3"] = "John"
});
```

---

## Get Many

Retrieve multiple values:

```csharp id="get_many"
var result = await client.GetManyAsync<string>(
    new[] { "user:1", "user:2", "user:3" });

foreach (var item in result.Items)
{
    Console.WriteLine($"{item.Key} → {item.Value}");
}
```

---

## Delete Many

Remove multiple keys:

```csharp id="delete_many"
await client.DeleteManyAsync(new[]
{
    "user:1",
    "user:2",
    "user:3"
});
```

---

## Behavior

* Each operation processes multiple keys in one request
* Results may include partial success per key
* Order of keys is preserved in responses

---

## Bulk vs Basic Operations

| Scenario             | Recommended Approach |
| -------------------- | -------------------- |
| Few keys             | Basic operations     |
| Many keys            | Bulk operations      |
| Performance critical | Bulk operations      |

---

## Important Notes

* Bulk operations are **not transactional**
* Some keys may succeed while others fail
* Use transactions if you need all-or-nothing behavior

---

## What’s Next

👉 Continue to **Batch Operations** for grouped execution
