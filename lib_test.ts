import { assertEquals } from "asserts";
import { range, floors } from "./lib.ts";

Deno.test("Range 1..10", () => {
  assertEquals(range(1, 11), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

Deno.test("Floors", () => {
  assertEquals(floors(1.4, 5.2), [1, 5]);
});
