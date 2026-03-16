# Getting Started with Clustron DKV (Windows)

This guide helps you install and run **Clustron DKV** on Windows.

You can follow this guide whether you have:

-   **A single machine** (run multiple instances on one server)
-   **Multiple machines** (run one instance per server)

Both scenarios are explained below.

------------------------------------------------------------------------

# 1. Download Clustron DKV

Download the latest release from:

    https://clustron.io/download/

Download the Windows package:

    clustron-dkv-x.x.x-win-x64.zip

Extract the ZIP file to a folder of your choice.

Example:

    C:\temp\clustron

------------------------------------------------------------------------

# 2. Install or Upgrade PowerShell

Clustron DKV requires **PowerShell 7.5.4 or later**.

Install or upgrade PowerShell using:

``` powershell
winget install --id Microsoft.PowerShell -e
```

After installation, open **PowerShell 7**.

------------------------------------------------------------------------

# 3. Run PowerShell as Administrator

Open **PowerShell 7** with administrative privileges.

This is required for installation.

------------------------------------------------------------------------

# 4. Install Clustron DKV

Navigate to the extracted folder:

``` powershell
cd C:\temp\clustron
```

Run the installer:

``` powershell
install.cmd
```

This installs Clustron DKV to:

    C:\Program Files\Clustron

The installer automatically opens the recommended firewall port range:

    7801 – 7899

------------------------------------------------------------------------

# 5. Recommended Port Ranges

Clustron recommends the following port ranges.

| Purpose | Port Range |
|--------|------------|
| Management Service | 7801 – 7810 |
| Cluster Communication | 7811 – 7860 |
| Client Connections | 7861 – 7899 |

You may use different ports if required, but ensure they are **open in the firewall on all machines**.

------------------------------------------------------------------------

# 6. Connect to the Management Service

Example:

``` powershell
Connect-DkvManager -Managers localhost:7801
```

or

``` powershell
Connect-DkvManager -Managers 10.0.0.4:7801
```

------------------------------------------------------------------------

## Scenario 1 --- Single Machine Cluster

Create a store:

``` powershell
New-DkvStore `
  -Name TestStore `
  -InstancePrefix node `
  -InstanceCount 2 `
  -ClustronPort 7811 `
  -ClientPort 7861
```

Start the store:

``` powershell
Start-DkvStore TestStore
```

Monitor metrics:

``` powershell
Watch-DkvStoreMetrics -StoreName TestStore
```

Connect a client:

``` powershell
Connect-DkvStore `
  -StoreName TestStore `
  -Endpoints localhost:7861
```

Generate load:

``` powershell
Stress-DkvStore `
  -StoreName TestStore `
  -Concurrency 32 `
  -DurationSec 120
```

------------------------------------------------------------------------

## Scenario 2 --- Multi Server Cluster

Connect to managers:

``` powershell
Connect-DkvManager -Managers 10.0.0.11:7801,10.0.0.12:7801,10.0.0.13:7801
```

Create the store:

``` powershell
New-DkvStore `
  -Name TestStore `
  -InstancePrefix node `
  -InstanceCount 1 `
  -ClustronPort 7811 `
  -ClientPort 7861
```

Start cluster:

``` powershell
Start-DkvStore TestStore
```

Connect client:

``` powershell
Connect-DkvStore `
  -StoreName TestStore `
  -Endpoints 10.0.0.11:7861
```

------------------------------------------------------------------------

# 7. Monitor Cluster

``` powershell
Watch-DkvStoreMetrics -StoreName TestStore
```

------------------------------------------------------------------------

# 8. Using Clustron from .NET

Install client:

``` bash
dotnet add package Clustron.DKV.Client
```

QuickStart_InProc.cs

``` csharp
using Clustron.DKV.Client;

var client = await DKVClient.InitializeInProc("demo");

await client.PutAsync("hello", "world");

var value = await client.GetAsync<string>("hello");

Console.WriteLine(value);
```

QuickStart_Remote.cs

``` csharp
using Clustron.DKV.Client;

var client = await DKVClient.InitializeRemote(
    "TestStore",
    new[]
    {
        new DkvServerInfo("localhost", 7861)
    });

await client.PutAsync("hello", "world");

var value = await client.GetAsync<string>("hello");

Console.WriteLine(value);
```

------------------------------------------------------------------------

# 9. Samples

Clustron includes several **ready-to-run sample applications** that demonstrate
how to use the platform in real-world scenarios.

These samples show how to:

- Perform basic **key-value operations**
- Connect to a **distributed cluster**
- Use **transactions**
- Use **Locks & Leases**
- Integrate Clustron into **production-style .NET applications**

Browse the samples repository:

https://github.com/zeroheartbeat/clustron-dkv/tree/main/Samples