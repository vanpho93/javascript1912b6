var str = '';
var str1 = '';
var start = Date.now()

for(var i = 0; i < 10000000; i++){
  str = str + i;
}

console.log(Date.now() - start);
var startConcat = Date.now();

for(var j = 0; j < 10000000; j++){
  str1 = str1.concat(j);
}
console.log(Date.now() - startConcat);
console.log(str1.length);
