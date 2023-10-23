/**
 * Copyright (c) it990110, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Hello',
  tagline: 'Hello World',
  organizationName: 'endiliey',
  projectName: 'hello',
  baseUrl: '/',
  url: 'https://gityjf.io',
  favicon: 'img/docusaurus.ico',
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: '../docs',
      },
    ],
    '@docusaurus/plugin-content-pages',
  ],
  clientModules: [
    'foo.js'
  ]
};
