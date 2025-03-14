import { expect, test, describe } from '@jest/globals';

import { toggleLikeGuide } from './toggleLikeGuide';
import { guides, guidesWithLike } from '../mock';

describe('toggleLikeGuide', () => {
  test('is correct with id', () => {
    expect(toggleLikeGuide(guides, 2)).toEqual(guidesWithLike);
  });

  test('is correct without id', () => {
    expect(toggleLikeGuide(guides, 3)).toEqual(guides);
  });
});
