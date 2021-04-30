# A Simple data mock library

### Example
```ts
const mocked = multi(10, () =>
  mockObj({
    name: [
      "func",
      () =>
        mockName("周吴郑王林", 1, 1) + mockName("风林火山水道德法徐可欣", 1, 2),
    ],
    age: ["num", [18, 26]],
    gender: ["list", ["男", "女"]],
    userName: ["name", ["abcdefghijklmnopqrstuvwxyz_", 5, 8]],
  })
);
```

### Output
```js
[
  { name: "周欣林", age: 22, gender: "男", userName: "jvugpeq" },
  { name: "周火火", age: 25, gender: "男", userName: "vsnxhv" },
  { name: "吴可", age: 24, gender: "男", userName: "swqnuhps" },
  { name: "王林", age: 21, gender: "男", userName: "_vubf" },
  { name: "林徐可", age: 19, gender: "女", userName: "hkszyjfm" },
  { name: "郑德", age: 21, gender: "女", userName: "tpztfze" },
  { name: "林林徐", age: 19, gender: "女", userName: "npulxm" },
  { name: "郑德风", age: 20, gender: "男", userName: "mzoel" },
  { name: "林风徐", age: 21, gender: "男", userName: "wdwuto" },
  { name: "王风风", age: 18, gender: "男", userName: "mldae" }
]
```