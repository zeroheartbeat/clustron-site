# Basic Operations

Clustron DKV provides simple APIs to store, retrieve, and delete data.

These are the most commonly used operations.

---

## Put (Store a Value)

```csharp id="put_basic"
await client.PutAsync("hello", "world");
```

* Stores a value for the given key
* If the key already exists, it is overwritten

---

## Get (Retrieve a Value)

```csharp id="get_basic"
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

* Returns the value if the key exists
* If not found, `Success` will be `false`

---

## Delete (Remove a Value)

```csharp id="delete_basic"
await client.DeleteAsync("hello");
```

* Removes the key and its value

---

## Handling Results

Most operations return a `KvResult`:

```csharp id="result_basic"
var result = await client.PutAsync("key", "value");

if (!result.Success)
{
    Console.WriteLine(result.ErrorMessage);
}
```

---

## Key Characteristics

* Operations are asynchronous
* Values are serialized automatically
* Same API works in InProc and Distributed modes

---

## Example Flow

```csharp id="flow_basic"
await client.PutAsync("user:1", "Ali");

var result = await client.GetAsync<string>("user:1");

if (result.Success)
{
    Console.WriteLine(result.Value);
}

await client.DeleteAsync("user:1");
```

---

## What’s Next

👉 Continue to **Bulk Operations** for working with multiple keys
