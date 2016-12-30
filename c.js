function Person1(name, age){
  this.name = name;
  this.age = age;
}
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
  constructor(name, age, hobby){
    super(name, age);
    this.hobby = hobby;
  }
  sayHello(){
    return `Xin chao, em la ${this.name}, em ${this.age} tuoi, em thich choi ${this.hobby}`;
  }
  addAge(){
    this.age += 2;
  }
}

var c = new Child('Ti', 3, 'Oto');
Child.prototype.gioitinh = 'Nu';
console.log('CHild gioi tinh', c.gioitinh);
console.log(c);
c.addAge();
c.setAge(35);
console.log(c.sayHello());
// var d = new Child('Teo', 4, 'May bay')
var e = new Person1('KhoaPham', 30);
e.weight = 50;
var f = new Person1('Le thi rieng', 90);
Person1.prototype.getAge = function(){
  console.log(this.age);
};

Person1.prototype.gioitinh = 'Nam';
console.log('Gioi tinh', f.gioitinh);
console.log(JSON.stringify(e));

//Khai bao class Point(x, y)
//Khai bao class DoanThang(p1, p2)
//phuong thuc getLength()
