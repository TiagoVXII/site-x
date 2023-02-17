// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Site X | The all Seeing',
  tagline: '',
  favicon: 'img/favicon.ico',
  
  

  // Set the production url of your site here
  url: 'https://site-x.pages.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
           'https://github.com/TiagoVXII/site-x/tree/main',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
           'https://github.com/TiagoVXII/site-x/tree/main',
        },
       
        
       
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/favicon.ico',
      navbar: {
        title: 'Site X | The all Seeing',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon-32x32.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Introduction',
          },
          {
            href: 'https://github.com/TiagoVXII/site-x',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/gQPgpp4aDe',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/TiagoVXII/site-x',
              },
            ],
          },
        ],
      logo: {
      alt: 'Image',
      src: '/img/ThatWElRD_Dude_scp_foundation_badge_ETA-10_metalic_with_an_eye_2e41844a-3fee-4915-967d-4b43bd25ef28-removebg-preview.png',
      href: 'https://discord.gg/fCax8BYdv8',
      },
        copyright: `Copyright © ${new Date().getFullYear()} Site X, Inc. Built with Docusaurus. Powered by Wolf Studios.`,
      },
announcementBar: {
        id: 'announce_bar',
        content:
          'The Handbook is subject to change at any time. Major changes will be announced in the main communications server.',
        backgroundColor: '#0000001a',
        textColor: '#5f98c0',
        isCloseable: false,
},
      colorMode: {
  defaultMode: 'dark',
  disableSwitch: true,
  respectPrefersColorScheme: false
},

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

