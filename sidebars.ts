import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Clustron',
      items: [
        // ------------------------------------------------
        // PLATFORM / GEO PAGES
        // ------------------------------------------------
        'clustron/what-is-clustron',
        'clustron/distributed-cache-dotnet',
        'clustron/distributed-coordination',
        'clustron/clustron-vs-redis',

        // ------------------------------------------------
        // PRODUCTS
        // ------------------------------------------------
        {
          type: 'category',
          label: 'Products',
          items: [
            {
              type: 'category',
              label: 'Clustron DKV',
              link: {
                type: 'doc',
                id: 'clustron/dkv/overview',
              },
              items: [
                {
				  type: 'category',
				  label: 'Getting Started',
				  link: {
					type: 'doc',
					id: 'clustron/dkv/getting-started/overview',
				  },
				  items: [
					  'clustron/dkv/getting-started/overview',
					  'clustron/dkv/getting-started/run-inproc',
					  'clustron/dkv/getting-started/installation',
					  'clustron/dkv/getting-started/create-first-store',
					  'clustron/dkv/getting-started/run-distributed',
					  'clustron/dkv/getting-started/configuration',
					  'clustron/dkv/getting-started/first-operations',
					],
				},
				{
				  type: 'category',
				  label: 'Core Concepts',
				  link: {
					type: 'doc',
					id: 'clustron/dkv/core-concepts/overview',
				  },
				  items: [
					'clustron/dkv/core-concepts/overview',
					'clustron/dkv/core-concepts/architecture',
					'clustron/dkv/core-concepts/store',
					'clustron/dkv/core-concepts/inproc-vs-remote',
					'clustron/dkv/core-concepts/key-value',
					'clustron/dkv/core-concepts/ttl-expiration',
					'clustron/dkv/core-concepts/consistency',
					'clustron/dkv/core-concepts/leases',
					'clustron/dkv/core-concepts/coordination',
				  ],
				},
				{
				  type: 'category',
				  label: 'Admin Guide',
				  link: {
					type: 'doc',
					id: 'clustron/dkv/admin-guide/overview',
				  },
				  items: [
					'clustron/dkv/admin-guide/overview',
					'clustron/dkv/admin-guide/connecting',
					'clustron/dkv/admin-guide/creating-store',
					'clustron/dkv/admin-guide/start-stop',
					'clustron/dkv/admin-guide/get-store',
					'clustron/dkv/admin-guide/multi-node',
					'clustron/dkv/admin-guide/ports',
					'clustron/dkv/admin-guide/monitoring',
					'clustron/dkv/admin-guide/troubleshooting',
				  ],
				},
				{
				  type: 'category',
				  label: 'Developer Guide',
				  link: {
					type: 'doc',
					id: 'clustron/dkv/developer-guide/overview',
				  },
				  items: [
					'clustron/dkv/developer-guide/overview',
					'clustron/dkv/developer-guide/getting-client',
					'clustron/dkv/developer-guide/basic-operations',
					'clustron/dkv/developer-guide/bulk-operations',
					'clustron/dkv/developer-guide/batch-operations',
					'clustron/dkv/developer-guide/clear-operations',
					'clustron/dkv/developer-guide/leases',
					'clustron/dkv/developer-guide/locks',
					'clustron/dkv/developer-guide/counters',
					'clustron/dkv/developer-guide/watch',
					'clustron/dkv/developer-guide/scan-query',
					'clustron/dkv/developer-guide/transactions',
					'clustron/dkv/developer-guide/serialization',
					'clustron/dkv/developer-guide/options',
					'clustron/dkv/developer-guide/error-handling',
					'clustron/dkv/developer-guide/client-lifecycle',
				  ],
				},
                {
                  type: 'category',
                  label: 'PowerShell CLI',
                  link: {
                    type: 'doc',
                    id: 'clustron/dkv/powershell-cli/overview',
                  },
                  items: [
                    {
                      type: 'category',
                      label: 'AdminShell',
                      link: {
                        type: 'doc',
                        id: 'clustron/dkv/powershell-cli/adminshell/overview',
                      },
                      items: [
                        'clustron/dkv/powershell-cli/adminshell/Connect-DkvManager',
                        'clustron/dkv/powershell-cli/adminshell/New-DkvStore',
                        'clustron/dkv/powershell-cli/adminshell/Get-DkvStore',
                        'clustron/dkv/powershell-cli/adminshell/Add-DkvInstance',
                        'clustron/dkv/powershell-cli/adminshell/Start-DkvStore',
                        'clustron/dkv/powershell-cli/adminshell/Stop-DkvStore',
                        'clustron/dkv/powershell-cli/adminshell/Watch-DkvStoreMetrics',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'ClientShell',
                      link: {
                        type: 'doc',
                        id: 'clustron/dkv/powershell-cli/clientshell/overview',
                      },
                      items: [
                        'clustron/dkv/powershell-cli/clientshell/Connect-DkvStore',
                        'clustron/dkv/powershell-cli/clientshell/Disconnect-DkvStore',
                        'clustron/dkv/powershell-cli/clientshell/Get-DkvConnection',
                        'clustron/dkv/powershell-cli/clientshell/Test-DkvConnection',

                        'clustron/dkv/powershell-cli/clientshell/Get-DkvItem',
                        'clustron/dkv/powershell-cli/clientshell/Get-DkvItems',
                        'clustron/dkv/powershell-cli/clientshell/Set-DkvItem',
                        'clustron/dkv/powershell-cli/clientshell/Set-DkvItems',
                        'clustron/dkv/powershell-cli/clientshell/Remove-DkvItem',
                        'clustron/dkv/powershell-cli/clientshell/Remove-DkvItems',
                        'clustron/dkv/powershell-cli/clientshell/Refresh-DkvItem',
                        'clustron/dkv/powershell-cli/clientshell/Set-DkvItemExpiration',
                        'clustron/dkv/powershell-cli/clientshell/Get-DkvItemMetadata',

                        'clustron/dkv/powershell-cli/clientshell/Get-DkvCounter',
                        'clustron/dkv/powershell-cli/clientshell/Set-DkvCounter',
                        'clustron/dkv/powershell-cli/clientshell/Increment-DkvCounter',
                        'clustron/dkv/powershell-cli/clientshell/Decrement-DkvCounter',

                        'clustron/dkv/powershell-cli/clientshell/Grant-DkvLease',
                        'clustron/dkv/powershell-cli/clientshell/Refresh-DkvLease',
                        'clustron/dkv/powershell-cli/clientshell/Revoke-DkvLease',
                        'clustron/dkv/powershell-cli/clientshell/Test-DkvLease',

                        'clustron/dkv/powershell-cli/clientshell/Watch-DkvKey',
                        'clustron/dkv/powershell-cli/clientshell/Watch-DkvPrefix',

                        'clustron/dkv/powershell-cli/clientshell/Test-DkvLatency',
                        'clustron/dkv/powershell-cli/clientshell/Test-DkvThroughput',
                        'clustron/dkv/powershell-cli/clientshell/Test-DkvItem',

                        'clustron/dkv/powershell-cli/clientshell/Benchmark-DkvStore',
                        'clustron/dkv/powershell-cli/clientshell/Stress-DkvStore',
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;