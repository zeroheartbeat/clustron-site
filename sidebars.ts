import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Clustron',
      items: [
        {
          type: 'category',
          label: 'DKV',
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
              items: [],
            },
			{
              type: 'category',
              label: 'Architecture',
              link: {
                type: 'doc',
                id: 'clustron/dkv/architecture/overview',
              },
              items: [],
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
};

export default sidebars;