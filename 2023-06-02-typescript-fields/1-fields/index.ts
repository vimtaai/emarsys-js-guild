class Parent {
  public foo: string = "fizz";

  constructor() {
    this.init();
  }

  init() {}
}

class Child extends Parent {
  public foo: string;

  init() {
    console.log("init > this.foo\t", this.foo);
    this.foo = "fizzbuzz";
  }
}

const child = new Child();
console.log("child.foo\t", child.foo);