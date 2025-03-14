import { expect, test, describe } from '@jest/globals';

import { checkAuth } from './checkAuth';

describe('checkAuth', () => {
  test('is correct', () => {
    expect(checkAuth('QpwL5tke4Pnpja7X1')).toBe(true);
  });
  test('is correct', () => {
    expect(checkAuth('QpwL5tke4Pnpja7X2')).toBe(true);
  });
  test('is correct', () => {
    expect(checkAuth('QpwL5tke4Pnpja7X3')).toBe(true);
  });
  test('is correct', () => {
    expect(checkAuth('QpwL5tke4Pnpja7X4')).toBe(true);
  });
  test('is correct', () => {
    expect(checkAuth('QpwL5tke4Pnpja7X5')).toBe(true);
  });
  test('is correct', () => {
    expect(checkAuth('QpwL5tke4Pnpja7X6')).toBe(true);
  });
  test('is correct', () => {
    expect(checkAuth('QpwL5tke4Pnpja7X7')).toBe(true);
  });
  test('is correct', () => {
    expect(checkAuth('QpwL5tke4Pnpja7X8')).toBe(true);
  });
  test('is correct', () => {
    expect(checkAuth('QpwL5tke4Pnpja7X9')).toBe(true);
  });
  test('is correct', () => {
    expect(checkAuth('QpwL5tke4Pnpja7X10')).toBe(true);
  });
  test('is correct', () => {
    expect(checkAuth('QpwL5tke4Pnpja7X11')).toBe(true);
  });
  test('is correct', () => {
    expect(checkAuth('QpwL5tke4Pnpja7X12')).toBe(true);
  });
  test('isn`t correct', () => {
    expect(checkAuth('')).toBe(false);
  });
  test('isn`t correct', () => {
    expect(checkAuth('rrrrrr')).toBe(false);
  });
});
