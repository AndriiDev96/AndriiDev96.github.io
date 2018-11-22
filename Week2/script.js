//-------------------1.------------------------
//Function that do currency converter from USD to UAH, and reverse (1 USD to 26 UAH).
//-------------------1.1------------------------
/* const content = document.querySelector('.content'),
  btnUah = document.querySelector('#btn-uah'),
  btnUsd = document.querySelector('#btn-usd'),
  resultUah = document.querySelector('.result-uah'),
  resultUsd = document.querySelector('.result-usd'),
  optConvert = document.querySelector('.main'),
  tagParg = document.createElement('p'),
  CURRENCY_VAl = 26;
//Text javaScript
content.style.display = 'none';
//Option convert
optConvert.classList.add('main-display');

(function () {

  btnUah.addEventListener("click", () => {
    let dolars = prompt("Enter the amount of dollars, please!");
    if (dolars == '' || isNaN(dolars)) {
      alert(`You didn't specify number`);
    } else {
      tagParg.innerHTML = `It is ${dolars * CURRENCY_VAl} UAH`;
      resultUah.append(tagParg);
    }
  })

  btnUsd.addEventListener("click", () => {
    let uah = prompt("Enter the amount of UAH, please!");
    if (uah == '' || isNaN(uah)) {
      alert(`You didn't specify number`);
    } else {
      let res = uah / CURRENCY_VAl;
      tagParg.innerHTML = `It is ${res.toFixed(2)} USD`;
      resultUsd.append(tagParg);
    }
  })
})(); */

//Function that returns min and max numbers.
//-------------------1.2------------------------
/* let array = [2, 3, 43, 34, 5, -6, -767, 23, 2],
  max = array[0],
  min = max;

function searchMaxMin() {

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min, max;
}

searchMaxMin(array);
console.log("max: " + max + " | " + " min: " + min); */


//Write a function that returns average number of values. Do not use Math object. For i.e. [1,4,2] should return [2.33].
//-------------------1.3------------------------

/* const array = [1, 4, 2];

const averageNum = function(){
   let sum = 0;

    for(let i = 0; i < array.length; i++){
      sum += array[i];
    };
  
    let result = sum / array.length;

    return result.toFixed(2);
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
    lastName: 'Smith'
  },
};

Object.keys(users).forEach(function (key) {
  const user = users[key];
  if (user) {
    console.log(key + ":" + ' name: ', users[key].name);
    console.log('last name: ' + users[key].lastName);
    if (users[key].otherData) {
      console.log('role: ', users[key].otherData.role)
    }
  }
}) */

//-------------------4.------------------------
//Print in console using for. If you think this is simple talk - implement using recursive function.

//-------------------4.1------------------------
/* function printSymbol(){
  let str = " ";
  const sym = '#';
  for(let i = 0; i < 8; i++){ 
   str += sym;
   console.log(str);
  }
}
printSymbol(); */

//-------------------4.2------------------------
/* const prtSymbolRec = function(n){
  const sym = "#";
  console.log(sym.repeat(n));
  if(n < 8){
    return prtSymbolRec(n+1);
  }else{
    return n;
  }
}
prtSymbolRec(1); */

//-------------------5.------------------------
//You need create a function to generating fibonacci sequence. The function should receive n as input parameter.
/* const number = prompt("Please enter a value");
 function fibonacci(number){
  return number <= 1 ? number : fibonacci(number - 1) + fibonacci(number - 2); 
}
alert(fibonacci(number)); */