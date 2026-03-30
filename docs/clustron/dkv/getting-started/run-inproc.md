# Run In-Process (No Infrastructure)

Clustron DKV can run entirely inside your application — no servers, no setup, no external dependencies.

This mode is called **InProc**, and it’s the fastest way to get a working system in seconds.

---

## Why Start with InProc?

InProc is the easiest way to experience Clustron:

* Zero infrastructure required
* Works immediately inside your app
* Same API as distributed mode
* Perfect for learning and rapid prototyping

You can switch to a distributed cluster later without changing your code.

---

## 1. Install the Package

```bash
dotnet add package Clustron.DKV.SDK
```

---

## 2. Configure an InProc Store

```csharp
using Clustron.DKV.Client.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection()
    .AddClustronDkvStores(cfg =>
    {
        cfg.AddStore("demo", s => s.UseInProc());
    })
    .BuildServiceProvider();
```

---

## 3. Get a Client

```csharp
var client = await services
    .GetRequiredService<IDkvClientProvider>()
    .GetAsync("demo");
```

---

## 4. Perform Your First Operation

```csharp
await client.PutAsync("hello", "world");

var value = await client.GetAsync<string>("hello");

Console.WriteLine(value.Value);
```

You now have a fully working key-value store running inside your application.

---

## What Just Happened?

* A store was created inside your process
* No network calls or external services were used
* You interacted with it using the same API used in distributed mode

---

## Key Characteristics

* Runs inside your process
* No ports, cluster, or configuration required
* Extremely fast (no network overhead)
* Same programming model as distributed mode

---

## Moving to Distributed Mode

When your application needs to scale or coordinate across multiple instances, switch to distributed mode:

```csharp
cfg.AddStore("demo", s =>
{
    s.UseRemote()
     .AddServer("localhost", 7861);
});
```

That’s it — no changes to your application logic are required.

---

## What’s Next

👉 Continue to **Installation** if you want to run Clustron in distributed mode  
👉 Or explore **First Operations (Put / Get / Delete)** to learn the core API
