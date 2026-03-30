# Monitoring & Metrics

Clustron DKV provides real-time visibility into store activity using built-in metrics.

This helps you:

* Observe system behavior
* Track performance
* Debug issues
* Understand load patterns

---

## Command: Watch-DkvStoreMetrics

Use this command to view live metrics for a store.

### Syntax

```powershell id="metrics_syntax"
Watch-DkvStoreMetrics <StoreName>
```

---

### Example

```powershell id="metrics_example"
Watch-DkvStoreMetrics TestStore
```

---

## What You Will See

The command displays live updates such as:

* Requests per second
* Read and write operations
* Latency
* Node activity

Metrics update continuously in real time.

---

## How to Use Metrics

### Check if the Store is Active

* Metrics updating → store is running
* No activity → store may be idle or stopped

---

### Observe Load

* High request rates → active workload
* Sudden spikes → bursts of activity

---

### Identify Issues

* No updates → connectivity issue
* High latency → possible bottleneck
* Uneven activity → imbalance across nodes

---

## Monitoring Multiple Nodes

In distributed setups:

* Metrics reflect activity across the cluster
* You can observe overall system behavior
* Node-level activity may vary

---

## When to Use This Command

Use `Watch-DkvStoreMetrics` during:

* Development and testing
* Load validation
* Troubleshooting
* Production monitoring

---

## Important Notes

* Metrics are real-time and continuously updated
* Use this command in a dedicated terminal
* Stop the command using `Ctrl + C`

---

## Common Issues

### No Metrics Displayed

* Ensure the store is running
* Verify you are connected to the manager

---

### Metrics Not Updating

* Check client activity
* Verify connectivity between nodes

---

## What’s Next

👉 Continue to **Troubleshooting** for common issues and solutions
