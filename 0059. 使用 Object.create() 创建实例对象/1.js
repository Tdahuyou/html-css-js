var person1 = {
  name: '张三',
  age: 38,
  greeting: function () {
    console.log("Hi! I'm " + this.name + '.')
  },
}

var person2 = Object.create(person1)

console.log(person1 === person2)
// false

console.log(person2.name)
// 张三

person2.greeting()
// Hi! I'm 张三.
