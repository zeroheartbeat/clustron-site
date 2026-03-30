# Create Your First Store

This guide walks you through creating and running your first Clustron DKV store using the CLI.

By the end, you will have a running distributed store and a connected client.

> ⚠️ This guide assumes Clustron is already installed.

---

## 1. Connect to the Manager

```powershell
Connect-DkvManager -Managers localhost:7801
```

---

## 2. Create a Store

```powershell
New-DkvStore `
  -Name TestStore `
  -InstancePrefix node `
  -InstanceCount 2 `
  -ClustronPort 7811 `
  -ClientPort 7861
```

---

## 3. Start the Store

```powershell
Start-DkvStore TestStore
```

---

## 4. Connect a Client

```powershell
Connect-DkvStore `
  -StoreName TestStore `
  -Endpoints localhost:7861
```

---

## 5. Perform Your First Operation

```powershell
Set-DkvItem -Key "order:1001" -Value "confirmed"

Get-DkvItem -Key "order:1001"
```

---

## That’s It

You now have a running distributed Clustron DKV store and a connected client.

Next, you can:

* Configure your store for production
* Connect using .NET applications
* Start using locks, leases, and counters

---

## What’s Next

👉 Continue to **Run Distributed (2-Node Setup)** to understand how clustering works  
👉 Or explore **Configuration (appsettings.json)** for setup options  