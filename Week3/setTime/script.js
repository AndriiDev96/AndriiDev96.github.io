var width = 0,
    time = 10, //s
    countTimeText = document.querySelector('#inner_text'),
    elem = document.querySelector('#move_element'),
    btnStop1 = document.querySelector('#btn1'),
    btnStop2 = document.querySelector('#btn2'),
    stopElem,
    stopTime;;

function move(){
  if(width == 100){
    clearTimeout(stopElem);
  }else{
    width++;
    elem.style.width = width + '%';
    stopElem = setTimeout(move, 100);
  }
}
move();

btnStop1.onclick = function(){
  clearTimeout(stopElem);
}

//Count time
function countTime(){
  countTimeText.innerHTML = time;
  time--;
  if(time < 0){
    clearTimeout(stopTime);
  }else{
    stopTime = setTimeout(countTime, 1000);
  }
}
countTime();

btnStop2.onclick = function(){
  clearTimeout(stopTime);
}