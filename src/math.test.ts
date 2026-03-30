import { describe, it, expect } from 'vitest';
import {
  add,
  subtract,
  multiply,
  divide,
  factorial,
  power,
  average,
  clamp,
  quadratic,
} from './math';
describe('add', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('should handle negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });
});
describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });
});
describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(3, 7)).toBe(21);
  });
  it('should handle multiplication by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});
describe('divide', () => {
  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });
  it('returns null for division by zero', () => {
    expect(divide(10, 0)).toBeNull();
  });
});
describe('factorial', () => {
  it('computes factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });
  it('returns 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });
  it('returns null for negative input', () => {
    expect(factorial(-3)).toBeNull();
  });
});
describe('power', () => {
  it('computes power of a number', () => {
    expect(power(2, 3)).toBe(8);
  });
  it('computes power of a number', () => {
    expect(power(5, 6)).toBe(15625);
  });
});
describe('average', () => {
  it('calculates the average of an array of numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });
  it('returns null for an empty array', () => {
    expect(average([])).toBeNull();
  });
});
describe('clamp', () => {
  it('clamps a value within a range', () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });
  it('clamps a value below the minimum', () => {
    expect(clamp(-2, 0, 5)).toBe(0);
  });
  it('clamps a value above the maximum', () => {
    expect(clamp(12, 0, 10)).toBe(10);
  });
});
describe('quadratic', () => {
  it('calculates the roots of a quadratic equation', () => {
    expect(quadratic(1, -3, 2)).toEqual([2, 1]);
  });
  it('returns null for no real roots', () => {
    expect(quadratic(1, 0, 1)).toBeNull();
  });
});
