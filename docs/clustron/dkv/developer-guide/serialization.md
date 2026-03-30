# Serialization

Clustron DKV automatically handles **serialization and deserialization** of values.

You can store objects directly without manually converting them.

---

## Storing Objects

```csharp
await client.PutAsync("user:1", new User
{
    Name = "Ali",
    Age = 30
});
```

* Objects are serialized automatically
* No manual conversion required

---

## Retrieving Objects

```csharp
var result = await client.GetAsync<User>("user:1");

if (result.Success)
{
    Console.WriteLine(result.Value.Name);
}
```

* Values are deserialized into the requested type
* Generic type parameter controls the output

---

## How It Works

```text
Object → Serialized → Stored  
Stored → Deserialized → Object
```

Serialization is handled internally by the client.

---

## Content Type (Advanced)

You can specify a content type when storing data:

```csharp
var putOpts = Put.WithEntity("customer")
    .WithContentType("application/json");

await client.PutAsync("cust:1", customer, putOpts);
```

* Useful for interoperability
* Helps identify how data is encoded

---

## Best Practices

* Use strongly typed models
* Keep models consistent across services
* Avoid frequent schema changes
* Use content type when integrating with external systems

---

## Important Notes

* Serialization is automatic by default
* Works the same in InProc and Distributed modes
* Type mismatches may result in deserialization errors

---

## What’s Next

👉 Continue to **Options** to control request behavior
