var map  = function(callback){
  var obj = this,     
      len = obj.length,  
      arr = [];

  if(this == null){
    throw new TypeError('"this" is null');
  }

  if(typeof callback !== 'function'){
    throw new TypeError(`${callback}  is not a function`);
  }

  for(var i = 0; i < len; i++){
    if(i in obj){    
      var val = obj[i];
      arr[i] = arguments[1] ? callback.call(arguments[1], val, i, obj) : callback(val, i, obj);      
    } 
  }                
    return arr;
  };


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
console.log(`input: ${array}  output: ${roots}`);