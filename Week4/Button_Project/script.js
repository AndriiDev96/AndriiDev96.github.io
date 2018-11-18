const widthButton = document.querySelector('#width-button'),
      heightButton = document.querySelector('#height-button'),
      textButton = document.querySelector('#text-button'),
      mainDiv = document.querySelector('.show-button'),
      createButton = document.querySelector('#make-button'),
      colorButton = document.querySelector('#id-color'),
      updatePage = document.querySelector('#update-button');

 class Button{
  constructor(parameters){
    const {WIDTH, HEIGHT, TEXT_BTN, PARENT_ELEMENT, BG_COLOR ,onClick = () => {}} = parameters;
    this.newButton = document.createElement("button");
    this.newButton.append(TEXT_BTN);
    this.newButton.style.backgroundColor = BG_COLOR;
    this.newButton.style.width = `${WIDTH}px`;
    this.newButton.style.height = `${HEIGHT}px`;
    this.newButton.style.border = `none`;
    this.appendElement(PARENT_ELEMENT);
    this.newButton.addEventListener("click", () =>{
      this.animateClickBtn();
      onClick();
    });
    this.hoverButton(BG_COLOR);
    
  }

  animateClickBtn(){
    this.newButton.style.transform = "translate(0, 10px)";  
    this.newButton.style.opacity = "0.5";
    setTimeout(() => {
      this.newButton.style.transform = "translate(0, 0px)";
      this.newButton.style.opacity = "1";  
    },80);
  }
  
  appendElement(elem){
    elem.append(this.newButton);
  }

  hoverButton(colBtn){
    this.newButton.style.backgroundColor = colBtn;

    this.newButton.onmouseover = function(e){
      e.target.style.backgroundColor = "rgba(0,0,0,0.75)";
      e.target.style.color = "white";
      e.target.style.boxShadow = `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`;
      e.target.style.transition = '.3s';
    }
    this.newButton.onmouseout = function(e){
      e.target.style.backgroundColor = colBtn;
      e.target.style.boxShadow = `none`;
      e.target.style.color = "rgb(54, 54, 54)";
    }
  }
}

function paramAndCall(){
  const PARAMETERS = {
    WIDTH: +widthButton.value,
    HEIGHT: +heightButton.value,
    TEXT_BTN: textButton.value,
    PARENT_ELEMENT: mainDiv,
    BG_COLOR: colorButton.value,
    onClick: () => {}
  };

  if(PARAMETERS.WIDTH == " " || PARAMETERS.HEIGHT == ""){
    swal("Error!", "Сheck all fields!", "error");
  }else{
    const button = new Button(PARAMETERS);
  }
}

createButton.addEventListener("click", function(){
  updatePage.style.display = "block";
  paramAndCall();
});

updatePage.addEventListener("click", function(){
  setTimeout(() => {
    updatePage.style.display = "block";
    mainDiv.innerHTML = "";
  },300);
});