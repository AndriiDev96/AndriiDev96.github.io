'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addSlotMachine = document.querySelector('#add-slotMachine'),
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

var moneyFromSlMachine = 0,
    sumSlotMachine = document.querySelector('#id-sumSlotMachine'),
    sumMoney = document.querySelector('.sumMoney');

var Casino = function () {
  function Casino() {
    var _this = this;

    _classCallCheck(this, Casino);

    this.arrayDiv = null;
    this.allMachine = slotMachine.children;
    btnCountMoney.addEventListener("click", function () {
      _this.getTotalAmountMoney();
    });
    takeAwayMoney.addEventListener("click", function () {
      _this.takeMoney();
    });
    addSlotMachine.addEventListener("click", function () {
      _this.getNumSlotMachine();
      _this.addNewSlotMachine();
      M.toast({
        html: '<span>Added</span>'
      });
    });
  }

  _createClass(Casino, [{
    key: 'getTotalAmountMoney',
    value: function getTotalAmountMoney() {
      var errSumMoney = document.querySelector('#error-sumMoney');
      if (moneyFromSlMachine == 0) {
        errSumMoney.style.display = 'block';
        setTimeout(function () {
          errSumMoney.style.display = 'none';
        }, 3000);
      } else {
        sumMoney.innerText = moneyFromSlMachine;
      }
    }
  }, {
    key: 'getNumSlotMachine',
    value: function getNumSlotMachine() {
      sumSlotMachine.textContent = ' 0';
      sumSlotMachine.textContent = slotMachine.children.length + 1;
    }
  }, {
    key: 'addNewSlotMachine',
    value: function addNewSlotMachine() {
      var tagP = document.createElement('p'),
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
          tagP.innerText = 'Your money: ' + moneyFromSlMachine + '$';
        }
        tagIconDel.classList = 'fas fa-trash-alt';
        tagA.append(tagIconDel);
        tagIState.classList = randomClass;
        div.append(tagIState, tagP, tagA);
        slotMachine.append(div);
      })();
      this.arrayDiv = 0;
      this.getSlotMachine();
    }
  }, {
    key: 'getSlotMachine',
    value: function getSlotMachine() {
      var clickDiv = void 0;
      this.arrayDiv = [];
      for (var i = 0; i < this.allMachine.length; i++) {
        this.arrayDiv.push(this.allMachine[i]);
      }
      this.arrayDiv.forEach(function (elemDiv) {
        clickDiv = elemDiv;
      });
      clickDiv.addEventListener("click", function () {
        var status = clickDiv.firstChild.className;
        if (status == 'fas fa-lock') {
          var instances = M.Modal.init(modalWinInfo);
          instances.open();
        } else {
          showSlotMachine.classList.add('show_slotMachine_d-none');
          sectSlotMachine.classList.add('section_slotMachine_d-block');
        }
      });
      this.deleteSlotMachine();
    }
  }, {
    key: 'deleteSlotMachine',
    value: function deleteSlotMachine() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var value = _step.value;

          value.lastChild.addEventListener("click", function (event) {
            value.remove();
            sumSlotMachine.textContent = slotMachine.children.length + 1 - 1;
            event.stopPropagation();
          });
        };

        for (var _iterator = this.arrayDiv[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'takeMoney',
    value: function takeMoney() {
      moneyFromSlMachine != 0 ? sumMoney.innerText = '0' : void 0;
    }
  }]);

  return Casino;
}();

var casino = new Casino();

var SlotMachine = function () {
  function SlotMachine(gotMoney) {
    var _this2 = this;

    _classCallCheck(this, SlotMachine);

    this.gotMoney = gotMoney;
    this.stepCounter = 0;
    this.putMoney(this.gotMoney);
    buttonSpin.addEventListener("click", function () {
      _this2.getPlay();
    });
  }

  _createClass(SlotMachine, [{
    key: 'putMoney',
    value: function putMoney(money) {
      console.log('ok');

      var showPutMoney = function showPutMoney() {
        var showMoney = document.querySelector('#enter-money');
        showMoney.innerText = money;
        updateMoney.removeEventListener("click", showPutMoney);
      };
      updateMoney.addEventListener("click", showPutMoney);
    }
  }, {
    key: 'getPlay',
    value: function getPlay() {
      var _this3 = this;

      var money = document.querySelector('#enter-money'),
          amountOfmoney = document.querySelectorAll('.amount-of-money'),
          winMoney = document.querySelector('#win-money'),
          blockSlotMachne = document.querySelector('.top-slotMachine'),
          textSlotMachne = document.querySelector('#id-text-slotMach'),
          win = new Audio('audio/win.mp3'),
          tape = new Audio('audio/tape.mp3'),
          moneyInt = Number(money.innerText);

      if (moneyInt < 2) {
        alert('You can\'t play. Put up money.');
      } else {
        money.innerText = moneyInt - 2;
        var randomNumber = function randomNumber() {
          _this3.stepCounter++;
          tape.play();

          var numLeft = Math.floor(Math.random() * 10),
              numCenter = Math.floor(Math.random() * 10),
              numRight = Math.floor(Math.random() * 10);
          numOne.innerText = numLeft;
          numTwo.innerText = numCenter;
          numThree.innerText = numRight;

          if (_this3.stepCounter > 10) {
            var final_numLeft = numLeft,
                final_numCenter = numCenter,
                final_numRight = numRight;

            if (final_numLeft == 7 && final_numCenter == 7 && final_numRight == 7) {
              money.innerText = moneyInt + 100;
              winMoney.innerText = "100";
              blockSlotMachne.classList.add('top-slotMachine-red');
              textSlotMachne.innerText = 'Winning';
              win.play();
            } else if (final_numLeft == final_numCenter && final_numLeft == final_numRight) {
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
            amountOfmoney.forEach(function (allClass) {
              allClass.innerText = 'Your money: ' + moneyFromSlMachine + '$';
            });
            _this3.stepCounter = 0;
            clearInterval(_random);
          }
        };

        var _random = setInterval(function () {
          randomNumber();
        }, 65);
      }
    }
  }]);

  return SlotMachine;
}();

var transferMoney = function transferMoney() {
  var errorMessage = document.querySelector('.error-message-text'),
      gotMoney = Number(putMoneyinMachine.value);
  if (gotMoney >= 50 && gotMoney <= 200) {
    moneyFromInput.classList.add('modal-close');
    new SlotMachine(gotMoney);
    moneyFromInput.removeEventListener("click", transferMoney);
  } else {
    errorMessage.style.display = 'block';
    setTimeout(function () {
      errorMessage.style.display = 'none';
    }, 2500);
  }
};

moneyFromInput.addEventListener("click", transferMoney);

mainPanelBtn.addEventListener('click', function () {
  showSlotMachine.classList.remove('show_slotMachine_d-none');
  sectSlotMachine.classList.remove('section_slotMachine_d-block');
});

reloadPageBtn.addEventListener('click', function () {
  location.reload();
});

/* Modal windows */
$('.modal').modal();