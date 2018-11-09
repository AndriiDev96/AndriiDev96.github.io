/* //REWRITE TO CLASS

function Auditory(maxSize = 100, projector = false){
  //this {}
  this.maxSize = maxSize;
  this.projector = projector;
  this.check = function(people){
    return people <= this.maxSize; 
  };
  this.checkProjector = function(people){
    return this.check(people) <= this.projector;
  }
  //return this
};

const  auditory1 = new Auditory(30);
const  auditory2 = new Auditory(40, true);
const  auditory3 = new Auditory(15, true);

const PEOPLE = 18;

auditory1.check(PEOPLE);
auditory2.check(PEOPLE);
auditory3.check(PEOPLE);
 */

//CLASS
const people = prompt("Enter the number of people. max auditory: 40");

class Auditory{
  constructor(maxSize, projector){
    this.maxSize = maxSize;
    this.projector = projector;
  }
  check(){
    return people <= this.maxSize;
  }
  checkProjector(){
    return this.check()&&this.projector;
  }
}

const auditory1 = new Auditory(30, false);
const auditory2 = new Auditory(40, true);
const auditory3 = new Auditory(20, true);

console.log('Пошук аудиторії на ' + people + ' осіб + projector ...');

(function(){
  setTimeout(() => {
    console.log('В Auditory1 ' + auditory1.check(people) +', ' + 'projector ' + auditory1.checkProjector());
    console.log('В Auditory2 ' + auditory2.check(people) +', ' + 'projector ' + auditory2.checkProjector());
    console.log('В Auditory3 ' + auditory3.check(people) +', ' + 'projector ' + auditory3.checkProjector());
  },4000);
})();

