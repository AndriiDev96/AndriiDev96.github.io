let width = 0,
    time = 10, //s
    countTimeText = document.querySelector('#inner_text'),
    elem = document.querySelector('#move_element'),
    btnStop1 = document.querySelector('#btn1'),
    endText = document.querySelector('.text-animate'),
    btnStop2 = document.querySelector('#btn2'),
    stopElem,
    stopTime;;

function moveSquare(){
  if(width == 100){
    clearTimeout();
    endText.classList.add('text-animate-block');
  }else{
    width++;
    elem.style.width = width + '%';
    stopElem = setTimeout(moveSquare, 100);
  }
}
moveSquare();

btnStop1.onclick = function(){
  clearTimeout(stopElem);
}

//Count time
function countTime(){
  countTimeText.innerHTML = time;
  time--;
  if(time >= 0){
    stopTime = setTimeout(countTime, 1000);
  }
}
countTime();

btnStop2.onclick = function(){
  clearTimeout(stopTime);
}