/* //Function construction
const todayYear = new Date().getFullYear();

function Autoshow(mark, volume, price, year){

  this.mark = mark;
  this.volume = volume;
  this.price = price;
  this.year = year; 

  this.getTax = function(){
      return (this.price * 0.2) + (0.01 * this.volume * this.price); 
  };

  this.getDiscount = function(){
    return (todayYear - this.year) * 0.1 * this.price; 
  }
  console.log(`
            ${this.mark}  
   Engine:  ${this.volume}  
     Year:  ${this.year}
    Prise:  ${this.price}
            ---------
      Tax:  ${this.getTax()}
 Discount:  ${this.getDiscount()}`);
}

const auto1 = new Autoshow("Toyota", 2.5, 30000, 2017);
const auto2 = new Autoshow("Fiat", 1.6, 19000, 2010);
const auto3 = new Autoshow("Audi", 3.0, 24000, 2012);
const auto4 = new Autoshow("BMW", 2.0, 26000, 2015); */


/*
//CLASS
const todayYear = new Date().getFullYear();

class Autoshow{
  constructor(mark, volume, price, year){
  this.mark = mark;
  this.volume = volume;
  this.price = price;
  this.year = year; 
  //debugger
  console.log(`
              ${this.mark}  
      Engine: ${this.volume}  
        Year: ${this.year}
       Prise: ${this.price}
              ---------
         Tax: ${this.getTax()}
    Discount: ${this.getDiscount()}`);  
}
  getTax(){
    return (this.price * 0.2) + (0.01 * this.volume * this.price); 
  }
  getDiscount(){
    return (todayYear - this.year) * 0.1 * this.price; 
  } 
}

const auto1 = new Autoshow("Toyota", 2.5, 30000, 2017);
const auto2 = new Autoshow("Fiat", 1.6, 19000, 2010);
const auto3 = new Autoshow("Audi", 3.0, 24000, 2012);
const auto4 = new Autoshow("BMW", 2.0, 26000, 2015);

 */

//My new version
const todayYear = new Date().getFullYear(),
      nameMarkAuto = document.querySelector('#mark-auto'),
      volumeAuto = document.querySelector('#volume-auto'),
      priceAuto = document.querySelector('#price-auto'),
      yearAuto = document.querySelector('#year-auto'),
      buttonCount = document.querySelector('#idButton'),
      div = document.querySelector('#list-data'),
      ul = document.createElement('ul'),
      showResolt = document.querySelector('.calculation-result');

div.append(ul);

//Check name mar auto
const pattern = "^[a-zA-Z]+$";
function checkNameMark(str){
  return str.match(pattern);
}

//Click Calculator
buttonCount.addEventListener("click", function(){
  const volumeInt = Number(volumeAuto.value),
        priceInt = Number(priceAuto.value),
        yearInt = Number(yearAuto.value);

  if(nameMarkAuto.value == "" || !checkNameMark(nameMarkAuto.value) ||volumeAuto.value == "" || priceAuto.value == "" || yearAuto.value == ""){
    toastr.error('Error! Check all inputs');
  }else{

  var obj = {
    mark: nameMarkAuto.value, 
    volume: volumeInt,
    price: priceInt,
    year: yearInt
  };

  class Autoshow{
    constructor(...obj){
    this.mark = obj[0];
    this.volume = obj[1];
    this.price = obj[2];
    this.year = obj[3];

    //Resul 
    var listResults = [`Mark: ${this.mark}`, `Volume: ${this.volume}L`, 
                       `Prise: ${this.price}$`, `Year: ${this.year}`,
                       `Tex: ${this.getTax()}`,  `Discount: ${this.getDiscount()}`];
    
    showResolt.style.display = 'block';
    
    for(var i = 0; i < listResults.length; i++){
      var li = document.createElement('li');
      li.innerHTML = listResults[i];
      ul.append(li);
    }
    // Message
    toastr.success('The result of the conducted');
  }  
    getTax(){
      return (this.price * 0.2) + (0.01 * this.volume * this.price); 
    }
    getDiscount(){
      return (todayYear - this.year) * 0.1 * this.price; 
    } 
  }

  const auto1 = new Autoshow(obj.mark, obj.volume, obj.price, obj.year);  
  }
});
