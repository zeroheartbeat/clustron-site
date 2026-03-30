# Configuration (appsettings.json)

Clustron DKV can be configured using standard .NET configuration via `appsettings.json`.

This allows you to define one or more stores and control how they connect (InProc or Remote) without changing application code.

Use this approach when you want to manage Clustron configuration externally instead of hardcoding setup in your application.

---

## Basic Configuration

```json id="cfg_basic"
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

## Configuration Fields

### Mode

* `InProc` → Runs inside the application (no infrastructure)
* `Remote` → Connects to a distributed cluster

---

### Seeds

Used only in `Remote` mode.

Defines the initial nodes (endpoints) to connect to.

```json id="cfg_seeds"
"Seeds": [
  { "Host": "10.0.0.11", "Port": 7861 },
  { "Host": "10.0.0.12", "Port": 7861 }
]
```

You only need to provide **one valid seed**.

* The client will automatically discover all nodes in the cluster
* Additional seeds can be added for resilience

An endpoint is:

```text id="cfg_endpoint"
<Machine/IP>:<ClientPort>
```

---

## Registering Configuration

```csharp id="cfg_register"
using Clustron.DKV.Client.DependencyInjection;

services.AddClustronDkvStores(
    configuration.GetSection("Dkv:Stores"));
```

---

## Getting a Client

```csharp id="cfg_client"
var client = await services
    .GetRequiredService<IDkvClientProvider>()
    .GetAsync("default");
```

---

## Multiple Stores

You can define multiple stores:

```json id="cfg_multi"
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

---

## Key Benefits

* Centralized configuration
* No code changes when switching modes
* Supports multiple stores
* Works seamlessly with dependency injection

---

## What’s Next

👉 Continue to **First Operations (Put / Get / Delete)** to start using the API
