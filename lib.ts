type FillFunc<T> = (i: number) => T;

export function list(len: number): number[];
export function list<T>(len: number, fill: FillFunc<T>): T[];
export function list<T>(len: number, fill?: FillFunc<T>) {
  return Array(len)
    .fill(0)
    .map((_, i) => (fill ? fill(i) : i));
}

export function signOf(n: number) {
  return n < 0 ? -1 : 1;
}
export function floors(...nums: number[]) {
  return nums.map(Math.floor);
}

export function ceils(...nums: number[]) {
  return nums.map(Math.ceil);
}

export function round(...nums: number[]) {
  return nums.map(Math.round);
}

export function range(start: number, end: number) {
  [start, end] = floors(start, end);
  return list(Math.abs(start - end), (i) => start + i * signOf(i));
}

export function isArray<T = unknown>(target: unknown): target is T[] {
  return target instanceof Array;
}

export function defined<T>(target: T | undefined): target is T {
  return target !== undefined;
}

export function hasKey<T>(target: T, key: unknown): key is keyof T {
  for (const k in target) {
    if (k === key) {
      return true;
    }
  }
  return false;
}
