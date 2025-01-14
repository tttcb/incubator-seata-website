// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Seata',
  favicon: 'img/seata_logo_small.jpeg',

  // Set the production url of your site here
  url: 'https://seata.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'seata', // Usually your GitHub org/user name.
  projectName: 'seata.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // clientModules: [require.resolve('./src/myClientModule.ts')],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        label: 'En',
        htmlLang: 'en-US',
      },
      'zh-cn': {
        label: '中',
        htmlLang: 'zh-CN',
      },
    },
  },
  scripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-X4LJGF90X2',
      async: true,
    },
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'unversioned',
        path: 'unversioned',
        routeBasePath: '/unversioned',
        sidebarPath: require.resolve('./sidebarsUnversioned.js'),
      }),
    ],
    [
      'docusaurus-plugin-includes',
      {
        injectedHtmlTags: {
          headTags: [
            {
              tagName: 'meta',
              attributes: {
                name: 'aes-config',
                content:
                  'pid=xux-opensource&user_type=101&uid=&username=&dim10=seata',
              },
            },
          ],
          preBodyTags: [
            {
              tagName: 'script',
              attributes: {
                type: 'text/javascript',
                src: 'https://hm.baidu.com/hm.js?104e73ef0c18b416b27abb23757ed8ee',
              },
            },
            {
              tagName: 'script',
              attributes: {
                src: '//g.alicdn.com/alilog/mlog/aplus_v2.js',
                id: 'beacon-aplus',
                exparams: 'clog=o&aplus&sidx=aplusSidx&ckx=aplusCkx',
              },
            },
            {
              tagName: 'script',
              attributes: {
                src: '//g.alicdn.com/aes/??tracker/1.0.34/index.js,tracker-plugin-pv/2.4.5/index.js,tracker-plugin-event/1.2.5/index.js,tracker-plugin-jserror/1.0.13/index.js,tracker-plugin-api/1.1.14/index.js,tracker-plugin-perf/1.1.8/index.js,tracker-plugin-eventTiming/1.0.4/index.js',
              },
            },
          ],
        },
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        // disable default sitemap generation
        sitemap: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content:
            'Seata,Seata官网,Seata official site,分布式事务,distributed transactions',
        },
      ],
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, // 禁止切换主题模式
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Seata Logo',
          src: 'img/seata_logo.png',
        },
        items: [
          {
            label: 'Home',
            to: '/',
            activeBaseRegex: '^/$',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            label: 'Docs',
            docid: '/overview/what-is-seata',
            position: 'right',
          },
          {
            label: 'Developers',
            type: 'doc',
            docId: 'developers/contributor-guide/new-contributor-guide_dev',
            position: 'right',
          },
          {
            label: 'Blog',
            to: '/blog',
            position: 'right',
          },
          {
            label: 'Community',
            to: '/community',
            position: 'right',
          },
          {
            label: 'Download',
            to: '/unversioned/download/seata-server',
            position: 'right',
          },
          {
            label: 'Console sample',
            to: 'http://demo.seata.io/',
            position: 'right',
            target: '_blank',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'ICHFIJRDZF',

        // Public API key: it is safe to commit it
        apiKey: '9dc9d497652065c6d77a6a384c1310fb',

        indexName: 'seata',
      },
    }),
};

module.exports = config;
