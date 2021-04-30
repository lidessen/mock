import { list, defined } from "./lib.ts";
import { random } from "./random.ts";

export function mock<T = unknown>(
  seed: (i: number) => T
): (count: number) => T[] {
  return (count: number) => list(count, seed);
}

export function mockName(chars: string[]): string;
export function mockName(chars: string, least: number, most: number): string;
export function mockName(arg1: unknown, arg2?: number, arg3?: number) {
  if (typeof arg1 === "string" && defined(arg2) && defined(arg3)) {
    return mock(() => random(arg1))(random(arg2, arg3 + 1)).join("");
  }
  if (arg1 instanceof Array) {
    return random(arg1);
  }
  return null;
}

type NameMock = ["name", [string, number, number]];
type FuncMock = ["func", () => unknown];
type ListMock = ["list", readonly [...unknown[]]];
type StringMock = ["str", string];
type NumMock = ["num", [number, number]];
type MockMock = ["mock", MockSeed];

interface MockSeed {
  [K: string]: NameMock | FuncMock | ListMock | NumMock | MockMock | StringMock;
}

type TupleItem<T> = T extends [...(infer P)[]] ? P : never;

type Mocked<T extends MockSeed> = {
  [K in keyof T]: T[K] extends FuncMock
    ? ReturnType<T[K]["1"]>
    : T[K] extends NameMock
    ? string
    : T[K] extends MockMock
    ? Mocked<T[K]["1"]>
    : T[K] extends ListMock
    ? TupleItem<T[K]["1"]>
    : Random<T[K]["1"]>;
};

type Random<T> = T extends [number, number]
  ? number
  : T extends (infer P)[]
  ? P
  : T;

export function mockObj<T extends MockSeed>(seed: T): Mocked<T> {
  const result: Record<string, unknown> = {};
  Object.keys(seed).forEach((k) => {
    const val = seed[k];
    if (val[0] === "func") {
      result[k] = val[1]();
    } else if (val[0] === "name") {
      result[k] = mockName(...val[1]);
    } else if (val[0] === "mock") {
      result[k] = mockObj(val[1]);
    } else if (val[0] === "list") {
      result[k] = random(val[1]);
    } else if (val[0] === "num") {
      result[k] = random(...val[1]);
    } else {
      result[k] = random(val[1]);
    }
  });
  return result as Mocked<T>;
}
