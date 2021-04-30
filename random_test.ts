import {
  AssertionError,
  assertThrows,
  assertEquals,
  assertArrayIncludes,
  assertStringIncludes,
} from "asserts";
import { randomNum, randomList } from "./random.ts";

Deno.test("Random num start cannot greater than end", () => {
  assertThrows(() => randomNum(6, 5), AssertionError);
});

Deno.test("Random num", () => {
  assertEquals(randomNum(5, 5), 5);
  assertEquals(randomNum(1, 100) % 1, 0);
});

Deno.test("Random list", () => {
  assertArrayIncludes([1, null, 2, 4, 5], [randomList([1, null, 2, 4, 5])]);
  assertStringIncludes("风林火山阴雷", randomList("风林火山阴雷"));
});
