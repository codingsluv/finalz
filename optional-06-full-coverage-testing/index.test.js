// index.test.js

import assert from "node:assert";
import { test } from 'node:test';
import sum from './index.js';

test('Menjumlahkan dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('Menjumlahkan dua angka positif dan salah satu negatif', () => {
  assert.strictEqual(sum(-1, 3), 0);
});

test('Menjumlahkan dua angka negatif', () => {
  assert.strictEqual(sum(-1, -2), 0);
});

test('Menjumlahkan angka dengan tipe data yang salah', () => {
  assert.strictEqual(sum('a', 2), 0);
  assert.strictEqual(sum(2, 'b'), 0);
  assert.strictEqual(sum('a', 'b'), 0);
});

test('Menjumlahkan dua angka dengan nol', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test('Menjumlahkan dua angka nol', () => {
  assert.strictEqual(sum(0, 0), 0);
});

test('Menjumlahkan dua angka besar', () => {
  assert.strictEqual(sum(1000000, 2000000), 3000000);
});
