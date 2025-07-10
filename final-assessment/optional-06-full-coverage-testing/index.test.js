import sum from './index.js';
import assert from 'node:assert';
import test from 'node:test';

test("Testing sum function", t => {
  // Test 1 Penjumlahan bilangan positif
  assert.strictEqual(sum(4, 3), 7, "4 + 3 should equal 7");

  // Test 2 Penjumlahan bilangan negatif
  assert.strictEqual(sum(-7, -3), 0, "-7 + -3 should equal 0");

  // Test 3 Penjumlahan bilangan positif dan negatif
  assert.strictEqual(sum(3, -3), 0, "3 + (-3) should equal 0");

  // Test 4 Penjumlahan nol
  assert.strictEqual(sum(0, 1), 1, "0 + 1 should equal 1");

  // Test 5 Penjumlahan angka dan string angka
  assert.strictEqual(sum(1, "2"), 0, "1 + '2' should equal 0");

  // Test 6 Penjumlahan string angka
  assert.strictEqual(sum("1", "2"), 0, "1 + '2' should equal 0");
});