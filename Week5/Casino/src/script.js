const addSlotMachine = document.querySelector('#add-slotMachine'),
      slotMachine = document.querySelector('.all-slotMachine'),
      numOne = document.querySelector('#num-one'),
      numTwo = document.querySelector('#num-two'),
      numThree = document.querySelector('#num-three'),
      buttonSpin = document.querySelector('#id-btnSpin'),
      tagI2 = document.querySelector('.fas'),
      mainPanelBtn = document.querySelector('#panel-main'),
      reloadPageBtn = document.querySelector('#reload-page'),
      btnCountMoney = document.querySelector('#id-sumMoney'),
      takeAwayMoney = document.querySelector('#withdraw-money'),
      updateMoney = document.querySelector('#id-autorenew'),
      moneyFromInput = document.querySelector('#get-money'),
      showSlotMachine = document.querySelector('.show-slotMachine'),
      sectSlotMachine = document.querySelector('.section-slotMachine'),
      modalWinInfo = document.querySelector('#modal-message'),
      putMoneyinMachine = document.querySelector('#input_money');

let moneyFromSlMachine = 0,
    sumSlotMachine = document.querySelector('#id-sumSlotMachine'),
    sumMoney = document.querySelector('.sumMoney');

class Casino {
  constructor() {
    this.arrayDiv = null;
    this.allMachine = slotMachine.children;
    btnCountMoney.addEventListener("click", () => {
      this.getTotalAmountMoney();
    });
    takeAwayMoney.addEventListener("click", () => {
      this.takeMoney();
    });
    addSlotMachine.addEventListener("click", () => {
      this.getNumSlotMachine();
      this.addNewSlotMachine();
      M.toast({
        html: `<span>Added</span>`
      });
    });
  }

  getTotalAmountMoney() {
    let errSumMoney = document.querySelector('#error-sumMoney');
    if (moneyFromSlMachine == 0) {
      errSumMoney.style.display = 'block';
      setTimeout(() => {
        errSumMoney.style.display = 'none';
      }, 3000);
    } else {
      sumMoney.innerText = moneyFromSlMachine;
    }
  }

  getNumSlotMachine() {
    sumSlotMachine.textContent = ' 0';
    sumSlotMachine.textContent = slotMachine.children.length + 1;
  }

  addNewSlotMachine() {
    let tagP = document.createElement('p'),
        tagIState = document.createElement('i'),
        tagIconDel = document.createElement('i'),
        div = document.createElement('div'),
        tagA = document.createElement('a'),
        randomClass = Math.random() > 0.5 ? 'fas fa-lock' : 'fas fa-unlock';

    (function () {
      if (randomClass == 'fas fa-lock') {
        tagP.innerText = 'Buzy';
      } else {
        tagP.classList.add('amount-of-money');
        tagP.innerText = `Your money: ${moneyFromSlMachine}$`;
      }
      tagIconDel.classList = 'fas fa-trash-alt';
      tagA.append(tagIconDel);
      tagIState.classList = randomClass;
      div.append(tagIState, tagP, tagA);
      slotMachine.append(div);
    })();
    this.arrayDiv = 0;
    this.getSlotMachine();
  };

  getSlotMachine() {
    let clickDiv;
    this.arrayDiv = [];
    for (let i = 0; i < this.allMachine.length; i++) {
      this.arrayDiv.push(this.allMachine[i]);
    }
    this.arrayDiv.forEach((elemDiv) => {
      clickDiv = elemDiv;
    })
    clickDiv.addEventListener("click", () => {
      let status = clickDiv.firstChild.className;
      if (status == 'fas fa-lock') {
        let instances = M.Modal.init(modalWinInfo);
        instances.open();
      } else {
        showSlotMachine.classList.add('show_slotMachine_d-none');
        sectSlotMachine.classList.add('section_slotMachine_d-block');
      }
    });
    this.deleteSlotMachine();
  }

  deleteSlotMachine() {
    for (let value of this.arrayDiv) {
      value.lastChild.addEventListener("click", (event) => {
        value.remove();
        sumSlotMachine.textContent = slotMachine.children.length + 1 - (1);
        event.stopPropagation();
      });
    }
  }

  takeMoney() {
    moneyFromSlMachine != 0 ? sumMoney.innerText = '0' : void(0);
  }
}

const casino = new Casino();

class SlotMachine {
  constructor(gotMoney) {
    this.gotMoney = gotMoney;
    this.stepCounter = 0;
    this.putMoney(this.gotMoney);
    buttonSpin.addEventListener("click", () => {
      this.getPlay();
    });
  }

  putMoney(money) {
    const showPutMoney = function () {
      let showMoney = document.querySelector('#enter-money');
      showMoney.innerText = money;
      updateMoney.removeEventListener("click", showPutMoney);
    };
    updateMoney.addEventListener("click", showPutMoney);
  }

  getPlay() {
    let money = document.querySelector('#enter-money'),
        amountOfmoney = document.querySelectorAll('.amount-of-money'),
        winMoney = document.querySelector('#win-money'),
        blockSlotMachne = document.querySelector('.top-slotMachine'),
        textSlotMachne = document.querySelector('#id-text-slotMach'),
        win = new Audio('audio/win.mp3'),
        tape = new Audio('audio/tape.mp3'),
        moneyInt = Number(money.innerText);


    if (moneyInt < 2) {
      alert(`You can't play. Put up money.`);
    } else {
      money.innerText = moneyInt - 2;
      const randomNumber = () => {
        this.stepCounter++;
        tape.play();

        let numLeft = Math.floor(Math.random() * 10),
            numCenter = Math.floor(Math.random() * 10),
            numRight = Math.floor(Math.random() * 10);
        numOne.innerText = numLeft;
        numTwo.innerText = numCenter;
        numThree.innerText = numRight;

        if (this.stepCounter > 10) {
          let final_numLeft = numLeft,
            final_numCenter = numCenter,
            final_numRight = numRight;

          if ((final_numLeft == 7) && (final_numCenter == 7) && (final_numRight == 7)) {
              money.innerText = moneyInt + 100;
              winMoney.innerText = "100";
              blockSlotMachne.classList.add('top-slotMachine-red');
              textSlotMachne.innerText = 'Winning';
              win.play();
          } else if ((final_numLeft == final_numCenter) && (final_numLeft == final_numRight)) {
              money.innerText = moneyInt + 30;
              winMoney.innerText = "30";
              blockSlotMachne.style.backgroundColor = '#c32525';
              textSlotMachne.innerText = 'Winning';
              win.play();
          } else if (final_numLeft == final_numCenter) {
              money.innerText = moneyInt + 10;
              winMoney.innerText = "10";
              blockSlotMachne.style.backgroundColor = '#c32525';
              textSlotMachne.innerText = 'Winning';
              win.play();
          } else if (final_numCenter == final_numRight) {
              money.innerText = moneyInt + 10;
              winMoney.innerText = "10";
              blockSlotMachne.style.backgroundColor = '#c32525';
              textSlotMachne.innerText = 'Winning';
              win.play();
          } else {
              textSlotMachne.innerText = 'Try again.';
              blockSlotMachne.style.backgroundColor = 'rgb(53, 52, 52)';
          }
            moneyFromSlMachine = money.innerText;
            amountOfmoney.forEach(allClass => {
              allClass.innerText = `Your money: ${moneyFromSlMachine}$`
          });
            this.stepCounter = 0;
            clearInterval(random);
          }
        } 

      let random = setInterval(() => {
        randomNumber();
      }, 65);
    }

  }
}

const transferMoney = () => {
  let errorMessage = document.querySelector('.error-message-text'),
    gotMoney = Number(putMoneyinMachine.value);
  if (gotMoney >= 50 && gotMoney <= 200) {
    moneyFromInput.classList.add('modal-close');
    new SlotMachine(gotMoney);
    moneyFromInput.removeEventListener("click", transferMoney);
  } else {
    errorMessage.style.display = 'block';
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 2500);
  }
}

moneyFromInput.addEventListener("click", transferMoney);

mainPanelBtn.addEventListener('click', () => {
  showSlotMachine.classList.remove('show_slotMachine_d-none');
  sectSlotMachine.classList.remove('section_slotMachine_d-block');
});

reloadPageBtn.addEventListener('click', () => {
  location.reload();
});

/* Modal windows */
$('.modal').modal();