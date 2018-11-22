const mainDiv = document.querySelector('.main-div-block'),
      centerBtn = document.querySelector('.section-button'),
      body = document.querySelector('body'),
      buttonBlue = document.querySelectorAll('.btn')[0],
      buttonPurp = document.querySelectorAll('.btn')[1];

//SetTimeout
let i = 0;
//Style
body.setAttribute("style", `margin-left: auto; margin-right: auto; width: 70%; background-color: #ececec`);

centerBtn.setAttribute("style", `display: flex; justify-content: center; 
                                margin-top: 50px; margin-bottom: 50px;`);

buttonBlue.setAttribute("style", `border: none; background-color: #16abf3; 
                                  padding: 8px 14px 8px 14px; margin-left: 10px; color: white;`);

buttonPurp.setAttribute("style", `border: none; background-color: #a038ff; 
                                  padding: 8px 14px 8px 14px; margin-left: 10px; color: white;`);
//Random color                           
function backgroundDiv(){
  let symb,
      color;
  symb = "0123456789ABCDEF";
  color = "#";
  for(let i = 0; i < 6; i++){
    color = color + symb[Math.floor(Math.random() * 16)];
  }
  return color;
};

//Function show divs
const callback = (function () {
  function createDiv() {
    let newDivs = document.createElement('div');
    let numText = document.createElement('p');
    newDivs.setAttribute("style", `height: 115px; width: 115px; float: left;
                                   margin-left: 18px; margin-bottom: 30px; 
                                   background-color: ${backgroundDiv()};`);
    numText.setAttribute("style", `text-align: center; padding-top: 30px; font-size: 20px;`);

    setTimeout(function () {
      i++;
      if (i <= 21) {
        numText.innerText = i;
        mainDiv.appendChild(newDivs);
        newDivs.appendChild(numText);
        createDiv();
      } else {
        clearTimeout();
      }
    }, 500);
  }
  createDiv();
  buttonBlue.removeEventListener('click', callback);
});
//Start
buttonBlue.addEventListener('click', callback);
//Button updade page
buttonPurp.addEventListener('click', function(){
  location.reload();
});  