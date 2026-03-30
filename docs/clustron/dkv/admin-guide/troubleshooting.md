# Troubleshooting

This section covers common issues you may encounter when running Clustron DKV and how to resolve them.

---

## Node Connectivity Issues

### Symptoms

* Nodes do not join the cluster
* Cluster appears incomplete
* Commands fail across machines

---

### Possible Causes

* Cluster ports are blocked
* Machines cannot reach each other
* Incorrect IP addresses used

---

### How to Fix

* Ensure cluster ports are open (e.g., 7811–7860)
* Verify network connectivity between machines
* Use reachable IP addresses (not `localhost` in multi-machine setups)

---

## Port Conflicts

### Symptoms

* Store fails to start
* Errors during store creation
* Nodes fail to launch

---

### Possible Causes

* Ports already in use by another application
* Overlapping port ranges
* Incorrect `InstanceCount` configuration

---

### How to Fix

* Choose unused port ranges
* Adjust `ClustronPort` and `ClientPort`
* Reduce `InstanceCount` if necessary

---

## Cannot Connect to Manager

### Symptoms

* `Connect-DkvManager` fails
* Timeout or connection errors

---

### Possible Causes

* Manager not running
* Firewall blocking port `7801`
* Incorrect endpoint

---

### How to Fix

* Ensure Clustron is installed and running
* Verify port `7801` is open
* Use correct machine IP or hostname

---

## Clients Cannot Connect

### Symptoms

* Client connection fails
* Application cannot access the store

---

### Possible Causes

* Store is not started
* Client ports are blocked
* Incorrect endpoint provided

---

### How to Fix

* Ensure the store is running (`Start-DkvStore`)
* Verify client ports (e.g., 7861–7899) are open
* Use correct `<host>:<clientPort>`

---

## Nodes Not Joining Cluster

### Symptoms

* Only some nodes are visible
* Cluster does not form correctly

---

### Possible Causes

* Cluster ports blocked
* Manager not connected to all machines
* Network connectivity issues

---

### How to Fix

* Verify cluster port range is open
* Ensure all managers are connected
* Check connectivity between machines

---

## No Metrics Displayed

### Symptoms

* `Watch-DkvStoreMetrics` shows no activity

---

### Possible Causes

* Store is not running
* No client activity
* Connection issue

---

### How to Fix

* Start the store
* Generate some load (Put/Get operations)
* Verify manager connection

---

## General Tips

* Always connect to managers before running commands
* Verify ports and firewall settings early
* Use `Get-DkvStore` to inspect system state
* Start with a single machine setup before scaling

---

## What’s Next

👉 Return to previous sections to reconfigure your setup
