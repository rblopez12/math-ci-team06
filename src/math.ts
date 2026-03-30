export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number | null {
  if (b == 0) return null;
  return a / b;
}

export function factorial(n: number): number | null {
  if (n < 0 || !Number.isInteger(n)) return null;
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function power(base: number, exponent: number): number {
  return base ** exponent;
}

export function average(numbers: number[]): number | null {
  if (numbers.length == 0) {
    return null;
  }

  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }

  total = total / numbers.length;
  return total;
}

export function clamp(value: number, min: number, max: number): number {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
}

export function quadratic(a: number, b: number, c: number): number[] | null {
  let root1;
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    return [root1, (-b - Math.sqrt(discriminant)) / (2 * a)];
  } else if (discriminant == 0) {
    root1 = -b / (2 * a);
    return [root1];
  } else {
    return null;
  }
}
