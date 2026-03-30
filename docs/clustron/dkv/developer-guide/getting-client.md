# Getting a Client

All operations in Clustron DKV are performed through a **client**.

Before you can use the API, you need to:

1. Register stores
2. Resolve a client
3. Start using it

---

## Registering Stores

Use dependency injection to register your stores.

```csharp id="register_stores"
using Clustron.DKV.Client.DependencyInjection;

services.AddClustronDkvStores(
    configuration.GetSection("Dkv:Stores"));
```

This reads store configuration from `appsettings.json`.

---

## Example Configuration

```json id="client_config"
{
  "Dkv": {
    "Stores": {
      "default": {
        "Mode": "Remote",
        "Seeds": [
          { "Host": "localhost", "Port": 7861 }
        ]
      }
    }
  }
}
```

---

## Resolving a Client

Use `IDkvClientProvider` to get a client for a store.

```csharp id="resolve_client"
var provider = services.GetRequiredService<IDkvClientProvider>();

var client = await provider.GetAsync("default");
```

---

## What is IDkvClientProvider?

`IDkvClientProvider`:

* Manages connections to stores
* Creates and caches client instances
* Ensures efficient reuse

You should use it instead of creating clients manually.

---

## Multiple Stores

You can define and use multiple stores:

```json id="multi_store_config"
{
  "Dkv": {
    "Stores": {
      "orders": {
        "Mode": "Remote",
        "Seeds": [
          { "Host": "orders-node", "Port": 7861 }
        ]
      },
      "local": {
        "Mode": "InProc"
      }
    }
  }
}
```

Resolve a specific store:

```csharp id="multi_store_client"
var ordersClient = await provider.GetAsync("orders");
var localClient  = await provider.GetAsync("local");
```

---

## InProc vs Remote

The client API is identical for both modes.

### InProc

```json id="inproc_config"
{
  "Mode": "InProc"
}
```

---

### Remote

```json id="remote_config"
{
  "Mode": "Remote",
  "Seeds": [
    { "Host": "localhost", "Port": 7861 }
  ]
}
```

No code changes are required when switching modes.

---

## Best Practices

* Register stores once during application startup
* Reuse `IDkvClientProvider`
* Avoid creating clients manually
* Use configuration to switch environments

---

## What’s Next

👉 Continue to **Basic Operations** to start working with data
