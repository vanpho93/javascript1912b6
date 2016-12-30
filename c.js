// function Person(name, age){
//   this.name = name;
//   this.age = age;
// }
//
// extends

class Person {
  constructor(name, age){
    // console.log('ABCD');
    this.name = name;
    this.age = age;
  }
  sayHello(){
    return `Xin chao, toi la ${this.name}, nam nay ${this.age} tuoi`
  }
  addAge(){
    this.age++;
  }
  setAge(newAge){
    this.age = newAge;
  }
}
// var p = new Person('Khoa Pham', 30);
// p.addAge();
// console.log(p.sayHello());

class Child extends Person{
  sayHello(){
    return `Xin chao, em la ${this.name}, em ${this.age} tuoi`;
  }
  addAge(){
    this.age += 2;
  }
}

var c = new Child('Ti', 3);
c.addAge();
c.setAge(35);
console.log(c.sayHello());
