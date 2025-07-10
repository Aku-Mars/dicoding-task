import { sum } from './index.js';
import assert from 'node:assert';
import test from 'node:test';

test('Testing sum function', () => {
  // Test 1 Penjumlahan bilangan positif
  assert.strictEqual(sum(2, 5), 7, '2 + 5 Should Equal 7');

  // Test 2 Penjumlahan bilangan negatif
  assert.strictEqual(sum(-2, -1), -3, '-2 + -1 Should Equal -3');

  // Test 3 Penjumlahan bilangan positif dan negatif
  assert.strictEqual(sum(2, -4), -2, '2 + -4 Should Equal -2');

  // Test 4 Penjumlahan nol
  assert.strictEqual(sum(0, 0), 0, '0 + 0 Should Equal 0');
});
