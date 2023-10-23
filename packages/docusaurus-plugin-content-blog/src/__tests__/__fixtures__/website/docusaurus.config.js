/**
 * Copyright (c) it990110, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Docusaurus blog website fixture',
  tagline: 'Build optimized websites quickly, focus on your content',
  organizationName: 'it990110',
  projectName: 'docusaurus',
  baseUrl: '/',
  url: 'https://tutorial.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/docusaurus.ico',
  presets: [
    [
      'classic',
      {
        docs: false,
        pages: {},
        blog: {
          routeBasePath: '/blog/',
          path: 'blog',
          editUrl: 'https://github.com/it990110/docusaurus/edit/main/website/',
          postsPerPage: 3,
          feedOptions: {
            type: 'all',
            copyright: `Copyright`,
          },
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    algolia: {
      appId: 'X1Z85QJPUV',
      apiKey: 'bf7211c161e8205da2f933a02534105a',
      indexName: 'docusaurus-2',
      contextualSearch: true,
    },
    navbar: {
      hideOnScroll: true,
      title: 'Docusaurus',
      logo: {
        alt: 'Docusaurus Logo',
        src: 'img/docusaurus.svg',
        srcDark: 'img/docusaurus_keytar.svg',
      },
    },
  },
};
