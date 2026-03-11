import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Clustron',
  tagline: 'Distributed Coordination & Key Value Platform',
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

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/zeroheartbeat/clustron-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/zeroheartbeat/clustron-site/tree/main/',
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
	
	colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Clustron',
      logo: {
        alt: 'Clustron Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/zeroheartbeat/clustron-dkv',
          label: 'GitHub',
          position: 'right',
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
              href: 'https://x.com',
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
    },
  } satisfies Preset.ThemeConfig,
};

export default config;