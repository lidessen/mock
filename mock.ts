import { list, defined, hasKey } from './lib.ts';
import { random } from './random.ts';

export function mock<T = unknown>(
  seed: (i: number) => T
): (count: number) => T[] {
  return (count: number) => list(count, seed);
}

export function mockName(chars: string[]): string;
export function mockName(chars: string, least: number, most: number): string;
export function mockName(arg1: unknown, arg2?: number, arg3?: number) {
  if (typeof arg1 === 'string' && defined(arg2) && defined(arg3)) {
    return mock(() => random(arg1))(random(arg2, arg3 + 1));
  }
  if (arg1 instanceof Array) {
    return random(arg1);
  }
  return null;
}

type Dict = {
  [K: string]: unknown;
};

type KeyMap<P, T extends { [K in keyof P]: unknown }> = {
  [K in keyof T]: K extends keyof P ? P[K] : never;
};
