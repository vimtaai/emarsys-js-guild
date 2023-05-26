class Parent {
  constructor() {
    this.foo = "fizz";
    this.init();
  }
  init() {
  }
}
class Child extends Parent {
  init() {
    console.log("init > this.foo	", this.foo);
    this.foo = "fizzbuzz";
  }
}
const child = new Child();
console.log("child.foo	", child.foo);
