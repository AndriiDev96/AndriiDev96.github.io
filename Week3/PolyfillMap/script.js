//Polyfill
if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    let assArray = this,
      len = assArray.length,
      arr = [];
    
    if (typeof callback !== 'function') {
      throw new TypeError(`${callback}  is not a function`);
    }

    for (let i = 0; i < len; i++) {
      let val = assArray[i];
      arr[i] = [...arguments] ? callback.call([...arguments], val, i, assArray) : callback(val, i, assArray);
    }
    return arr;
  }
}

//Тест функції
/*  let map = function (callback) {
  let assArray = this,
    len = assArray.length,
    arr = [];
    
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback}  is not a function`);
  }

  for (let i = 0; i < len; i++) {
    let val = assArray[i];
    arr[i] = [...arguments] ? callback.call([...arguments], val, i, assArray) : callback(val, i, assArray);
  }
  return arr;
  
} 

//Використання map для переформатування об'єктів в масиві.
var keyAndVal = [{key: 1, value: 10},
                 {key: 1, value: 10},
                 {key: 1, value: 10}];

var reformKeyAndVal  = map.call(keyAndVal, function(_obj){
  var rObj = {};
  rObj[_obj.key] = _obj.value;
  return rObj;
});

//Використання map для перевертання рядка.
var str = '12345';
var reverseStr = map.call(str, function(x) {
  return x;
}).reverse().join('');  

//Перетворення масиву з числами в масив квадратних коренів.
var array = [1, 4, 9, 16, 25, 36, 49];
var roots = map.call(array, Math.sqrt);

console.log(reformKeyAndVal);
console.log(`input: ${str}  output: ${reverseStr}`);
console.log(`input: ${array}  output: ${roots}`); */