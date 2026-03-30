# Scan & Query

Clustron DKV allows you to work with **datasets**, not just individual keys.

To use querying effectively, you must understand:

```text
Entity → Labels → Indexing → Search
```

Search is not automatic — it is enabled through **entities and labels**.

---

## Why This Matters

Basic operations require exact keys:

```csharp
await client.GetAsync("user:1");
```

But real applications need:

* Find all customers in London
* Get users with age between 28–32
* Retrieve top 5 records by age

To support this, Clustron provides:

* **Scan** → iterate over data
* **Search** → query indexed data

---

## Entities & Labels (Foundation of Search)

Search works on **indexed metadata**, not raw values.

---

### What is an Entity?

An entity defines a **logical type of data**.

```text
Customer
Order
Session
```

It groups and indexes related data.

---

### What are Labels?

Labels are **indexed fields** attached to a key.

They enable:

* Filtering
* Sorting
* Aggregation
* Querying

---

## Storing Data with Labels

You must attach labels when storing data.

```csharp
var putOpts = Put.WithEntity("customer")
    .WithLabel("city", "London")
    .WithLabel("age", "30")
    .WithLabel("email", "user1@example.com");

await client.PutAsync("cust:1", customer, putOpts);
```

👉 Without labels, search cannot work efficiently.

---

## Scan (No Index Required)

Scan allows you to iterate over data.

```csharp
await foreach (var item in client.Scan.ScanAsync(prefix: "cust:"))
{
    Console.WriteLine(item.Key);
}
```

### Characteristics

* No labels required
* Streams results
* Sequential scan

---

## Search (Requires Labels)

Search uses indexed labels for efficient querying.

---

## Equality Query

```csharp
var query = SearchQuery
    .For("customer")
    .Eq("city", "London");
```

---

## Range Query

```csharp
var query = SearchQuery
    .For("customer")
    .Range("age", 28, 32);
```

---

## Prefix Query

```csharp
var query = SearchQuery
    .For("customer")
    .LikePrefix("email", "user1");
```

---

## Logical Queries

### AND

```csharp
var query = SearchQuery
    .For("customer")
    .And(
        new EqClause("city", "Berlin"),
        new EqClause("age", "32"));
```

---

### OR

```csharp
var query = SearchQuery
    .For("customer")
    .Or(
        new EqClause("city", "Lahore"),
        new EqClause("age", "25"));
```

---

### NOT

```csharp
var query = SearchQuery
    .For("customer")
    .Not(new EqClause("city", "Lahore"));
```

---

### Combined Conditions

```csharp
var query = new SearchQuery("customer", new IClause[]
{
    new AndClause(new List<IClause>
    {
        new RangeClause("age", 20, 65),
        new NotClause(new EqClause("city", "Lahore"))
    })
});
```

---

## Sorting & Limiting

```csharp
var query = SearchQuery
    .For("customer")
    .OrderBy("age", ascending: false)
    .Limit(5);
```

---

## Multi-field Sorting

```csharp
var query = SearchQuery
    .For("customer")
    .OrderBy("city", ascending: true)
    .OrderBy("age", ascending: true)
    .Limit(10);
```

---

## Result Shapes

Search results are streamed and can be consumed in different forms.

---

### Keys Only

```csharp
await using var reader =
    await (await client.Scan.SearchAsync(query)).AsKeys();
```

---

### Full Entries (with Metadata)

```csharp
await using var reader =
    await (await client.Scan.SearchAsync(query)).AsEntries();

while (await reader.ReadAsync())
{
    var labels = reader.Current.Metadata.Labels;
    Console.WriteLine(labels["city"].Value);
}
```

---

### Strongly Typed Entities

```csharp
await using var reader =
    await (await client.Scan.SearchAsync(query))
        .AsEntities<Customer>();
```

---

### Projection (Selected Fields)

```csharp
var query = SearchQuery
    .For("customer")
    .Eq("city", "New York")
    .Select("email");

await using var reader =
    await (await client.Scan.SearchAsync(query))
        .Select(new[] { "email" });
```

---

## Paging

Search results are paged internally.

```csharp
var opts = new SearchOptions
{
    PageSize = 100
};

await client.Scan.SearchAsync(query, opts);
```

Paging ensures efficient processing of large datasets.

---

## Streaming Model

All results are streamed:

* Incremental processing
* Low memory usage
* Suitable for large datasets

---

## Scan vs Search

| Feature         | Scan       | Search               |
| --------------- | ---------- | -------------------- |
| Requires labels | No         | Yes                  |
| Performance     | Sequential | Indexed              |
| Use case        | Iteration  | Filtering & querying |

---

## When to Use What

* Use **Scan** when:

  * You don’t have labels
  * You need simple iteration

* Use **Search** when:

  * You need filtering
  * You want performance
  * You have labeled/indexed data

---

## Best Practices

* Always define an entity for structured data
* Add labels for all searchable fields
* Use search instead of scan in production
* Use paging (`SearchOptions`) for large datasets
* Choose appropriate result shape (`AsKeys`, `AsEntries`, etc.)
* Use projection to reduce payload size
* Combine clauses for precise filtering

---

## Key Takeaway

```text
Entity + Labels → Index → Search → Fast queries
```

Search is only as powerful as your labeling strategy.

---

## What’s Next

👉 Continue to **Transactions** for consistent grouped operations
