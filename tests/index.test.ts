import { add, mul } from '../src';

test('adds two numbers correctly', () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test('multiplies two numbers correctly', () => {
    const result = mul(2, 3);
    expect(result).toBe(6);
  });