//-------------------1.------------------------
//Function that do currency converter from USD to UAH, and reverse (1 USD to 26 UAH).
//-------------------1.1------------------------
/* var dolars = prompt("Enter the amount of dolars, please!");

var convert = function(){
  uah = 26;
  return (dolars * uah);
}

alert("It is " + convert(dolars) + " UAH"); */


//Function that returns min and max numbers.
//-------------------1.2.1------------------------

 /* var  array = [],
      nimNum,
      maxNum;

function  checkInputNum(array){

  while(true){
    var value = prompt("Enter the number, please!")
  
    if(value === "" || value == 0 || value === null || isNaN(value)) break;
    array.push(value);  
  }
}

checkInputNum(array);

minNum = Math.min.apply(null, array);
maxNum = Math.max.apply(null, array);
alert("[" + array + "]" + "\n" + "min: " + minNum + " max: " + maxNum); */

//-------------------1.2.2------------------------
/* var  array = [2, 3, 43, 34, 5, -6, -767, 23, 2],
      max = array[0],
      min = max;

 function searchMaxMin(){
  
  for(var i = 0; i < array.length; i++){
       
    if(array[i] > max){
      max = array[i];
    }

    if(min > array[i]){
      min = array[i];
    }
  }  
  return min, max;
 }

 searchMaxMin(array);
 console.log("max: " + max + " | " + " min: " + min); */
 

//Write a function that returns average number of values. Do not use Math object. For i.e. [1,4,2] should return [2.33].
//-------------------1.3------------------------

/* var array = [1, 4, 2];

var averageNum = function(){
  var i,
    sum = 0;

    for(i = 0; i < array.length; i++){
      sum += array[i] / array.length;
    };
    return sum;
}

console.log(averageNum(array)); */

//-------------------2.------------------------
//2.Recursive function.
//Write a recursion function that print numbers from 10 to 1.

/* function print(n){
  if(n === 0){
   return 1;
 }else{
  console.log(n);
  return print(n-1);
 }
}
print(10); */

//-------------------3.------------------------
//Resolve all issues in the code. Don't delete something there! you can only add something or raplace (constant users have to be unchanged). 
//In console I have to see only output from console.log without some errors.

/* const users = {
  1: {
    name: 'Roman',
    lastName: 'Lurov',
    otherData: {
      role: 'student'
    }
  },
  2: {
    name: 'Ivan',
    lastName: 'Bondarenko',
    otherData: {
      role: 'student'
    }
  },
  3: {
    name: 'Roman',
    lastName: 'Lurov',
    otherData: {
      role: 'student'
    }
  },
  
  4: {
    name: 'Oleg',
    lastName: 'Murko',
    otherData: {
      role: 'student'
    }
  },
  5: {
    name: 'Kurz',
    lastName: 'Smith',
    otherData: {
      role: 'student'
    }
  },
};

Object.keys(users).forEach(function(key) {
  const user = users[key];
  if(user){
     console.log(key + ":" +  ' name: ', users[key].name);
     console.log('last name: ' + users[key].lastName);
     console.log('role: ', users[key].otherData.role)
  }
}) */

//-------------------4.------------------------
//Print in console using for. If you think this is simple talk - implement using recursive function.

//-------------------4.1------------------------
/* function symbol(){
  var str = " ";
  var sym = '#';
  for(var i = 0; i < 8; i++){ 
   str += sym;
   console.log(str);
  }
}
symbol();

//-------------------4.2------------------------
var symbolRec = function(n){
  var sym = "#";
  console.log(sym.repeat(n));
  if(n < 8){
    return symbolRec(n+1);
  }else{
    return n;
  }
}
symbolRec(1); */

//-------------------5.------------------------
//You need create a function to generating fibonacci sequence. The function should receive n as input parameter.
/* var number = prompt("Please enter a value");
 function fibonacci(number){
  return number <= 1 ? number : fibonacci(number - 1) + fibonacci(number - 2); 
}
alert(fibonacci(number));  */