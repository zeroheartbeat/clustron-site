# PowerShell CLI

Clustron provides a powerful PowerShell-based command-line interface
(CLI) for interacting with and managing Clustron Distributed Key Value
(DKV) clusters.

The PowerShell CLI is designed for both developers and administrators
who want to automate tasks, manage clusters, test performance, and
interact with the distributed key-value store directly from scripts or
terminals.

## Components

The Clustron PowerShell CLI consists of two main modules:

### AdminShell

AdminShell is designed for **cluster administrators** responsible for
managing DKV stores and cluster nodes.

Typical operations include:

-   Creating new DKV stores
-   Starting and stopping stores
-   Adding instances to clusters
-   Monitoring cluster metrics

Example commands:

``` powershell
New-DkvStore
Start-DkvStore
Add-DkvInstance
Watch-DkvStoreMetrics
```

AdminShell enables administrators to manage clusters without directly
interacting with internal configuration files or services.

### ClientShell

ClientShell is designed for **developers and application operators** who
want to interact with a running DKV cluster.

Typical operations include:

-   Connecting to a DKV cluster
-   Reading and writing key-value data
-   Managing counters
-   Working with leases
-   Watching keys and prefixes
-   Running performance tests

Example commands:

``` powershell
Connect-DkvStore
Get-DkvItem
Set-DkvItem
Test-DkvThroughput
```

ClientShell is useful for:

-   Application testing
-   Operational debugging
-   Data inspection
-   Benchmarking cluster performance

## Why PowerShell CLI?

The PowerShell CLI enables:

-   Scriptable cluster automation
-   DevOps integration
-   Easy debugging and troubleshooting
-   Performance testing
-   Rapid experimentation with distributed primitives

Because the CLI is PowerShell-based, it integrates naturally with:

-   Windows administration tools
-   CI/CD pipelines
-   Automation scripts
-   Infrastructure provisioning workflows

## When to Use the CLI

The CLI is useful in several scenarios:

-   Creating and managing clusters during development
-   Inspecting live data in a running store
-   Testing distributed coordination primitives
-   Running performance benchmarks
-   Automating operational workflows

## Next Steps

Explore the specific CLI modules:

-   **AdminShell** -- Manage stores and cluster infrastructure
-   **ClientShell** -- Interact with DKV from applications and scripts
