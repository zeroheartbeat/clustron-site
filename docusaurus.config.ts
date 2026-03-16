import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Clustron',
  tagline: 'Distributed Cache & Key-Value Store for .NET',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://clustron.io',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'zeroheartbeat',
  projectName: 'clustron-site',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
	scripts: [
	  {
		src: "https://www.clarity.ms/tag/vty0pg5no0",
		async: true,
	  },
	],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:undefined,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
		gtag: {
		  trackingID: 'G-FDB40P68KW',
		  anonymizeIP: true,
		},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
	
	metadata: [
  {
    name: 'description',
    content:
      'Clustron is a distributed cache and key-value store for .NET with built-in coordination primitives like locks, leader election, transactions, and watches.',
  },
],

	announcementBar: {
	  id: 'clustron_launch',
	  content:
	  '🚀 Clustron DKV (<span style="color:#ef4444;font-weight:700">Beta</span>) is now available — build reliable distributed systems with .NET',
	  backgroundColor: '#fde047',
	  textColor: '#111827',
	  isCloseable: false,
	},
	
	colorMode: {
	  defaultMode: 'light',
	  disableSwitch: true,
	  respectPrefersColorScheme: false,
	},

	stylesheets: [
		{
		  href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
		  type: "text/css",
		},
	],
    navbar: {
		title: 'Clustron',
	  logo: {
		alt: 'Clustron Logo',
		src: 'img/logo.svg',
	  },
	  
	  

	  items: [
		{
		  to: '/download',
		  label: 'Downloads',
		  position: 'left',
		},
		
		{
		  label: 'Docs',
		  to: '/docs/clustron/dkv/overview',
		  position: 'left',
		},

		{
		  to: '/blog',
		  label: 'Blog',
		  position: 'left',
		},

		{
			label: 'Contact Us',
			to: '/contact',
			position: 'right',
			className: 'navbar-contact',
		  },
		{
		  label: 'GitHub',
		  href: 'https://github.com/zeroheartbeat/clustron-dkv',
		  position: 'right',
		},

		{
		  label: 'Download',
		  to: '/download',
		  position: 'right',
		  className: 'navbar-cta',
		},
	  ],
	},

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Clustron DKV',
              to: '/docs/clustron/dkv/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/zeroheartbeat/clustron-dkv/discussions',
            },
            {
              label: 'X',
              href: 'https://x.com/clustron',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/zeroheartbeat/clustron-dkv',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Clustron. Built with Docusaurus.`,
    },

    prism: {
	  theme: prismThemes.github,
	  darkTheme: prismThemes.dracula,

	  additionalLanguages: [
		"csharp",
		"powershell",
		"bash",
		"json"
	  ],
	},
  } satisfies Preset.ThemeConfig,
};

export default config;