var x1 = 1, x2 = 2

if (x1 === 2) x1 = x1 + 1
// 表示当 x1 等于 2 时，才会将其值加上 1。
if (x2 === 2) x2 = x2 + 1
// 表示当 x2 等于 2 时，才会将其值加上 1。

console.log(x1) // 1
console.log(x2) // 3

// 上述这种 if 的写法
// 要求条件表达式后面只能有一个语句