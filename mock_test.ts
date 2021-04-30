import { assert } from "asserts";
import { mockObj, mockName } from "./mock.ts";
import { multi } from "./lib.ts";

Deno.test("Mock object", () => {
  const mocked = mockObj({
    name: [
      "func",
      () =>
        mockName("周吴郑王林", 1, 1) + mockName("风林火山水道德法徐可欣", 1, 2),
    ],
    age: ["num", [18, 26]],
    gender: ["multi", ["男", "女"]],
    userName: ["name", ["abcdefghijklmnopqrstuvwxyz_", 5, 8]],
  });
  console.log(mocked);
  assert(mocked);
});

Deno.test("Mock objects", () => {
  const mocked = multi(10, () =>
    mockObj({
      name: [
        "func",
        () =>
          mockName("周吴郑王林", 1, 1) +
          mockName("风林火山水道德法徐可欣", 1, 2),
      ],
      age: ["num", [18, 26]],
      gender: ["multi", ["男", "女"]],
      userName: ["name", ["abcdefghijklmnopqrstuvwxyz_", 5, 8]],
    })
  );
  console.log(mocked);
  assert(mocked);
});
