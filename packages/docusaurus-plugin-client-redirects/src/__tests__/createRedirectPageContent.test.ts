/**
 * Copyright (c) it990110, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import createRedirectPageContent from '../createRedirectPageContent';

describe('createRedirectPageContent', () => {
  it('works', () => {
    expect(
      createRedirectPageContent({toUrl: 'https://tutorial.io/'}),
    ).toMatchSnapshot();
  });

  it('encodes uri special chars', () => {
    const result = createRedirectPageContent({
      toUrl: 'https://tutorial.io/gr/σελιδας/',
    });
    expect(result).toContain(
      'https://tutorial.io/gr/%CF%83%CE%B5%CE%BB%CE%B9%CE%B4%CE%B1%CF%82/',
    );
    expect(result).toMatchSnapshot();
  });
});
