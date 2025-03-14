import { expect, test, describe } from '@jest/globals';

import { updateAvatar } from './updateAvatar';
import { guides, guidesWithAvatar } from '../mock';

describe('updateAvatar', () => {
  test('is correct with avatar', () => {
    expect(updateAvatar(guides, 2, 'changedString')).toEqual(guidesWithAvatar);
  });

  test('is correct without avatar', () => {
    expect(updateAvatar(guides, 8, 'changedString')).toEqual(guides);
  });
});
