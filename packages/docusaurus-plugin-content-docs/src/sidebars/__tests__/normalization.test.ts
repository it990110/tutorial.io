/**
 * Copyright (c) it990110, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {normalizeSidebars} from '../normalization';

describe('normalization', () => {
  it('normalizes shorthands', () => {
    expect(
      normalizeSidebars({
        sidebar: {
          Category: ['doc1', 'doc2'],
          'Category 2': {
            'Subcategory 1': ['doc3', 'doc4'],
            'Subcategory 2': ['doc5', 'doc6'],
          },
        },
      }),
    ).toMatchSnapshot();

    expect(
      normalizeSidebars({
        sidebar: [
          {
            type: 'link',
            label: 'Google',
            href: 'https://google.com',
          },
          {
            'Category 1': ['doc1', 'doc2'],
            'Category 2': ['doc3', 'doc4'],
          },
        ],
      }),
    ).toMatchSnapshot();
  });
  it('rejects some invalid cases', () => {
    expect(() =>
      normalizeSidebars({
        sidebar: {
          // @ts-expect-error: test
          Category: {type: 'autogenerated', dirName: 'foo'},
          // @ts-expect-error: test
          Category2: {type: 'autogenerated', dirName: 'bar'},
        },
      }),
    ).toThrowErrorMatchingInlineSnapshot(
      `"Invalid sidebar items collection \`{"type":"autogenerated","dirName":"foo"}\` in \`items\` of the category Category: it must either be an array of sidebar items or a shorthand notation (which doesn't contain a \`type\` property). See https://tutorial.io/docs/sidebar/items for all valid syntaxes."`,
    );

    expect(() =>
      normalizeSidebars({
        sidebar: [
          'foo',
          {
            Category: {
              // @ts-expect-error: test
              type: 'category',
              items: ['bar', 'baz'],
            },
          },
        ],
      }),
    ).toThrowErrorMatchingInlineSnapshot(
      `"Invalid sidebar items collection \`{"type":"category","items":["bar","baz"]}\` in \`items\` of the category Category: it must either be an array of sidebar items or a shorthand notation (which doesn't contain a \`type\` property). See https://tutorial.io/docs/sidebar/items for all valid syntaxes."`,
    );

    expect(() =>
      normalizeSidebars({
        sidebar: [
          'foo',
          {
            // @ts-expect-error: test
            Category: 'bar',
          },
        ],
      }),
    ).toThrowErrorMatchingInlineSnapshot(
      `"Invalid sidebar items collection \`"bar"\` in \`items\` of the category Category: it must either be an array of sidebar items or a shorthand notation (which doesn't contain a \`type\` property). See https://tutorial.io/docs/sidebar/items for all valid syntaxes."`,
    );

    expect(() =>
      normalizeSidebars({
        // @ts-expect-error: test
        sidebar: 'item',
      }),
    ).toThrowErrorMatchingInlineSnapshot(
      `"Invalid sidebar items collection \`"item"\` in sidebar sidebar: it must either be an array of sidebar items or a shorthand notation (which doesn't contain a \`type\` property). See https://tutorial.io/docs/sidebar/items for all valid syntaxes."`,
    );
  });

  it('adds a translatable marker for labels defined in sidebars.js', () => {
    expect(
      normalizeSidebars({
        sidebar: [
          {
            type: 'doc',
            id: 'google',
            label: 'Google',
          },
          {
            'Category 1': ['doc1', 'doc2'],
            'Category 2': [
              'doc3',
              'doc4',
              {
                type: 'ref',
                id: 'msft',
                label: 'Microsoft',
              },
            ],
          },
        ],
      }),
    ).toMatchSnapshot();
  });
});
