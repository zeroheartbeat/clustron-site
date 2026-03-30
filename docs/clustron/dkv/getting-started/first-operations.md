# First Operations (Put / Get / Delete)

This section shows the basic operations you will use most frequently with Clustron DKV.

These operations follow a simple pattern:

```text id="flow_ops"
Put → Get → Delete
```

---

## Prerequisites

You should already have:

* A running store
* A connected client (InProc or Remote)

---

## Put (Store a Value)

```csharp id="put_code"
await client.PutAsync("hello", "world");
```

* Stores a value for the given key
* If the key already exists, it is overwritten

---

## Get (Retrieve a Value)

```csharp id="get_code"
var result = await client.GetAsync<string>("hello");

if (result.Success)
{
    Console.WriteLine(result.Value);
}
else
{
    Console.WriteLine("Key not found");
}
```

* Returns the stored value if the key exists
* If not found, `Success` will be `false`

---

## Delete (Remove a Value)

```csharp id="delete_code"
await client.DeleteAsync("hello");
```

* Removes the key and its value from the store

---

## Handling Results

Most operations return a `KvResult`:

```csharp id="result_code"
var result = await client.PutAsync("key", "value");

if (!result.Success)
{
    Console.WriteLine(result.ErrorMessage);
}
```

This allows you to handle errors and validate operations safely.

---

## Notes

* Keys are strings
* Values are serialized automatically
* All operations are asynchronous
* The same API works for both InProc and Distributed modes

---

## What’s Next

You can now:

- Explore the **Developer Guide** for advanced usage  
- Try **Samples** for real-world scenarios  
- Use **Locks, Leases, and Transactions** for coordination  

For complete working examples, see:

👉 https://github.com/zeroheartbeat/clustron-dkv/tree/main/Samples
