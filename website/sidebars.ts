/**
 * Copyright (c) it990110, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'installation',
        'configuration',
        'playground',
        'typescript-support',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
        title: 'Docusaurus Guides',
        description:
          "Let's learn about the most important Docusaurus concepts!",
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        'guides/creating-pages',
        {
          type: 'category',
          label: 'Docs',
          link: {
            type: 'doc',
            id: 'guides/docs/introduction',
          },
          items: [
            'guides/docs/create-doc',
            {
              type: 'category',
              label: 'Sidebar',
              link: {
                type: 'doc',
                id: 'guides/docs/sidebar/index',
              },
              items: [
                'guides/docs/sidebar/items',
                'guides/docs/sidebar/autogenerated',
                'guides/docs/sidebar/multiple-sidebars',
              ],
            },
            'guides/docs/versioning',
            'guides/docs/multi-instance',
          ],
        },
        'blog',
        {
          type: 'category',
          label: 'Markdown Features',
          link: {
            type: 'doc',
            id: 'guides/markdown-features/introduction',
          },
          items: [
            'guides/markdown-features/react',
            'guides/markdown-features/tabs',
            'guides/markdown-features/code-blocks',
            'guides/markdown-features/admonitions',
            'guides/markdown-features/toc',
            'guides/markdown-features/assets',
            'guides/markdown-features/links',
            'guides/markdown-features/plugins',
            'guides/markdown-features/math-equations',
            'guides/markdown-features/diagrams',
            'guides/markdown-features/head-metadata',
          ],
        },
        'styling-layout',
        'swizzling',
        'static-assets',
        'search',
        'browser-support',
        'seo',
        'using-plugins',
        'deployment',
        {
          type: 'category',
          label: 'Internationalization',
          link: {type: 'doc', id: 'i18n/introduction'},
          items: [
            {
              type: 'doc',
              id: 'i18n/tutorial',
              label: 'Tutorial',
            },
            {
              type: 'doc',
              id: 'i18n/git',
              label: 'Using Git',
            },
            {
              type: 'doc',
              id: 'i18n/crowdin',
              label: 'Using Crowdin',
            },
          ],
        },
        'guides/whats-next',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Guides',
      link: {type: 'doc', id: 'advanced/index'},
      items: [
        'advanced/architecture',
        'advanced/plugins',
        'advanced/routing',
        'advanced/ssg',
        'advanced/client',
      ],
    },
    {
      type: 'category',
      label: 'Migrating from v1 to v2',
      items: [
        'migration/migration-overview',
        'migration/migration-automated',
        'migration/migration-manual',
        'migration/migration-versioned-sites',
        'migration/migration-translated-sites',
      ],
    },
  ],
  api: [
    'cli',
    'docusaurus-core',
    {
      type: 'autogenerated',
      dirName: 'api',
    },
  ],
};

export default sidebars;
