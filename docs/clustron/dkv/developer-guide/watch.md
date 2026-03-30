# Watch

Watch allows you to build **event-driven systems** by subscribing to changes in real time.

Instead of polling for updates, your application receives events whenever data changes.

---

## Why Watch Matters

In traditional systems, you often:

* Poll for changes repeatedly
* Waste resources checking state
* Introduce delays in reacting to updates

Watch replaces this with:

```text
Push-based updates → instant reaction
```

---

## How Watch Works

You subscribe to changes using a handler:

* Events are delivered when data changes
* You process them in real time
* Subscription continues until stopped

---

## Watching a Single Key

```csharp
var (subscription, initialRecord) = await client.Watch.WatchKeyAsync(
    "order:1001",
    new WatchOptions { IncludeInitialSnapshot = true },
    ev =>
    {
        Console.WriteLine($"{ev.EventType} → {ev.Key} = {ev.Value}");
    });
```

---

### Initial Snapshot

If `IncludeInitialSnapshot = true`:

* You immediately receive the current value
* Then real-time updates follow

```text
Snapshot → then stream of changes
```

---

### Example Flow

1. Key already exists
2. You start watching
3. You receive initial value
4. Future updates are streamed

---

## Watching a Prefix

```csharp
var subscription = await client.Watch.WatchPrefixAsync(
    "orders:",
    new WatchOptions { IncludeInitialSnapshot = false },
    ev =>
    {
        Console.WriteLine($"{ev.Key} changed");
    });
```

* Watches all keys matching the prefix
* Useful for groups of data

---

## Event Model

Each event (`WatchEvent`) contains:

* `Key` → affected key
* `Value` → new value (if applicable)
* `EventType` → `Put` or `Delete`
* `Revision` → change version

Example:

```text
Put → key updated or created  
Delete → key removed
```

---

## Example: Reacting to Changes

```csharp
await client.Watch.WatchPrefixAsync(
    "jobs:",
    null,
    ev =>
    {
        if (ev.EventType == WatchEventType.Put)
        {
            Console.WriteLine($"Job updated: {ev.Key}");
        }
    });
```

---

## Subscription Lifecycle

Watch returns a **subscription handle**.

```csharp
await subscription.StopAsync();
```

* Stops receiving events
* Releases resources

---

## Important Behavior

### 1. Only Matching Keys Trigger Events

From your test:

* Watching a key → only that key triggers events
* Watching a prefix → only matching keys trigger events

Unrelated keys are ignored 

---

### 2. Snapshot + Streaming

With snapshot enabled:

```text
Initial state → then live updates
```

Without snapshot:

```text
Only future changes
```

---

### 3. Multiple Watchers Are Isolated

Different watchers:

* Do not interfere
* Only receive relevant events

Example:

```text
prefixA watcher → only prefixA keys  
prefixB watcher → only prefixB keys
```

✔ Verified in tests 

---

### 4. Events Are Delivered Continuously

* Watch runs until explicitly stopped
* Designed for long-running subscriptions

---

## Thread Safety

Your handler may be called concurrently.

Use synchronization if needed:

```csharp
lock (events)
{
    events.Add(ev);
}
```

✔ This pattern is used in tests 

---

## When to Use Watch

Use watch when you need:

* Real-time updates
* Event-driven workflows
* Reactive systems
* Monitoring changes
* Eliminating polling

---

## Common Use Cases

### 1. Job Processing

* Watch for new jobs
* Process immediately

---

### 2. Cache Invalidation

* Watch keys
* Update local cache

---

### 3. Distributed Coordination

* React to lease or lock changes
* Trigger failover

---

### 4. Presence Tracking

* Watch active workers
* Detect joins/leaves

---

## Best Practices

* Use prefix watch for groups
* Enable snapshot when you need initial state
* Stop subscriptions when no longer needed
* Keep handlers lightweight
* Avoid blocking operations inside handlers

---

## Key Takeaway

```text
Watch = Real-time event stream over your data
```

It transforms your system from:

```text
Polling → Reactive
```

---

## What’s Next

👉 Continue to **Scan & Query** to explore data
