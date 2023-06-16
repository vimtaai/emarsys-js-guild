const { compilerOptions } = require('../tsconfig.json');

class Parent {
  public foo: string = (() => {
    console.log("parent.prop")
    return "parent.prop";
  })();

  constructor() {
    console.log("parent.ctor")
    this.foo = "parent.ctor";
    this.init();
  }

  init() {}
}

class Child extends Parent {
  public foo: string;

  constructor() {
    super();
    console.log("child.ctor", this.foo);
  }

  init() {
    console.log("child.init");
    this.foo = "child.init";
  }
}

console.log(compilerOptions.target);
const child = new Child();
console.log("----------");
console.log("child.foo:", child.foo);