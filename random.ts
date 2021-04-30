import { assert } from "asserts";
import { isArray } from "./lib.ts";

export function randomList(seed: string): string;
export function randomList<T = unknown>(seed: T[]): T;
export function randomList(seed: string | unknown[]) {
  return seed[randomNum(0, seed.length)];
}

export function randomNum(start: number, end: number) {
  assert(start <= end, "Start cannot greater than end");
  start = Math.floor(start);
  end = Math.floor(end);
  return Math.floor(Math.random() * (end - start)) + start;
}

export function random(seed: string): string;
export function random<T = unknown>(seed: readonly T[]): T;

export function random(end: number): number;
export function random(start: number, end: number): number;
export function random(arg1: unknown, arg2?: unknown) {
  if (typeof arg1 === "number") {
    return typeof arg2 === "number"
      ? randomNum(arg1, arg2)
      : randomNum(0, arg1);
  }
  if (isArray(arg1)) {
    return randomList(arg1);
  }
  if (typeof arg1 === "string") {
    return randomList(arg1);
  }
  return null;
}
