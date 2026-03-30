# InProc vs Remote

Clustron DKV supports two execution modes:

* **In-Process (InProc)**
* **Distributed (Remote)**

Both modes use the **same API and programming model**.

---

## The Key Idea

You can start local and scale to distributed without changing your code.

```text id="model_shift"
InProc → Remote  
(no code changes)
```

This is a core design principle of Clustron.

---

## In-Process (InProc)

InProc mode runs entirely inside your application.

```text id="inproc_model"
Application
  └── Store (InProc)
```

### Characteristics

* No infrastructure required
* No network communication
* Extremely fast (in-memory)
* Ideal for development and testing

### When to Use

* Local development
* Unit and integration testing
* Single-instance applications

---

## Distributed (Remote)

Remote mode runs the store across multiple nodes.

```text id="remote_model"
Machine A → Node 1
Machine B → Node 2
Machine C → Node 3
```

### Characteristics

* Runs across machines
* Enables coordination between instances
* Provides high availability and scalability
* Uses network communication

### When to Use

* Production systems
* Multi-instance applications
* Distributed workloads

---

## Same API, Different Execution

The same code works in both modes:

```csharp id="same_api"
await client.PutAsync("key", "value");
```

No changes are required when switching modes.

---

## Configuration-Based Switching

You can switch modes using configuration:

```json id="switch_config"
{
  "Mode": "InProc"
}
```

```json id="switch_config_remote"
{
  "Mode": "Remote",
  "Seeds": [
    { "Host": "localhost", "Port": 7861 }
  ]
}
```

---

## What Actually Changes?

| Aspect       | InProc             | Remote                |
| ------------ | ------------------ | --------------------- |
| Execution    | Inside application | Across nodes          |
| Network      | None               | Required              |
| Setup        | None               | Installation required |
| Scale        | Single instance    | Multiple instances    |
| Coordination | Local              | Distributed           |

---

## Why This Matters

Most systems force you to choose upfront:

* Local cache → simple but limited
* Distributed system → powerful but complex

Clustron lets you:

* Start simple
* Scale when needed
* Keep the same programming model

---

## What’s Next

👉 Continue to **Keys & Values** to understand how data is stored
