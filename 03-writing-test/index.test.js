import { sum } from "./index.js";
import assert from "node:assert";
import { test } from 'node:test';


test('menambahkan dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('menambahkan angka negatif dan positif', () => {
  assert.strictEqual(sum(-1, 1), 0);
});

test('menambahkan dua angka negatif', () => {
  assert.strictEqual(sum(-2, -3), -5);
});

test('menambahkan angka dengan nol', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});
