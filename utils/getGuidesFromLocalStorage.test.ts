import { expect, test, describe } from '@jest/globals';

import { getGuidesFromLocalStorage } from './getGuidesFromLocalStorage';
import { localStorageMock, guides } from '../mock';

describe('check type of guides list', () => {
  beforeAll(() => {
    const localStorage = new localStorageMock();
    global.localStorage = localStorage;
  });

  test('is null', () => {
    expect(getGuidesFromLocalStorage()).toBe(false);
  });

  test('is wrong data', () => {
    global.localStorage.setItem(
      'guides',
      JSON.stringify([{ id: 0, email: 'test' }]),
    );
    expect(getGuidesFromLocalStorage()).toBe(false);
  });

  test('is empty array', () => {
    global.localStorage.setItem('guides', JSON.stringify([]));
    expect(getGuidesFromLocalStorage()).toBe(false);
  });

  test('is empty string', () => {
    global.localStorage.setItem('guides', '');
    expect(getGuidesFromLocalStorage()).toBe(false);
  });

  test('is correct', () => {
    global.localStorage.setItem('guides', JSON.stringify(guides));
    expect(getGuidesFromLocalStorage()).toEqual(guides);
  });
});
