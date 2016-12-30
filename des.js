var name = 'KhoaPham';
var age = 18
var obj = { name, age: age + 1 };
console.log(obj);

var person = {
  ten: 'Khoa',
  age: 30,
  weight: 50
}
var mang = [1, 2, 4, 12, 4]
// var ten = person.ten;
// var age = person.age;
// var weight = person.weight;
var {ten, age, weight} = person;
console.log(ten, age, weight);

var mang2 = [0, 0,...mang, 5, 6]
mang.push(3)
console.log(mang2);
