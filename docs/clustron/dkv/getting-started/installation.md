# Installation

This guide walks you through installing Clustron DKV on Windows.

> This step is only required if you want to run Clustron in distributed mode.
> You can use In-Process mode without installing anything.

---

## Prerequisites

* Windows machine
* PowerShell 7.x (recommended)

Install PowerShell (if not already installed):

```powershell
winget install --id Microsoft.PowerShell -e
```

After installation, open **PowerShell 7**.

---

## 1. Download

Download the latest release:

https://clustron.io/download/

Download the Windows package:

```
clustron-dkv-x.x.x-win-x64.zip
```

---

## 2. Extract

Extract the ZIP file to a folder of your choice.

Example:

```
C:\temp\clustron
```

---

## 3. Run as Administrator

Open **PowerShell 7** with administrative privileges.

This is required for installation.

---

## 4. Install

Navigate to the extracted folder:

```powershell
cd C:\temp\clustron
```

Run the installer:

```powershell
install.cmd
```

Once the installation completes, Clustron commands will be available in PowerShell.

---

## Installation Location

By default, Clustron is installed to:

```
C:\Program Files\Clustron
```

---

## Firewall Configuration

The installer automatically opens the required port range:

```
7801 – 7899
```

Ensure these ports are accessible across machines if you plan to run a distributed cluster.

---

## What Gets Installed

* Clustron runtime
* PowerShell management modules
* CLI tools for managing stores

---

## What’s Next

👉 Continue to **Run Your First Distributed Store** to create and start a cluster  
👉 Or explore **Configuration (appsettings.json)** for advanced setup

