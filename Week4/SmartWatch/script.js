const secondArrow = document.querySelector('#id-second'),
      minuteArrow = document.querySelector('#id-minute'),
      hourArrow = document.querySelector('#id-hour');
/* Button controller */
const btnStart = document.querySelector('#btn-start'),
      btnPause = document.querySelector('#btn-pause'),
      btnReset = document.querySelector('#btn-reset');
/* Digital timer */
const digitalSecOne = document.querySelector('#timeId');
/* Button Burger menu */
let menuButton = document.querySelector('.menu-btn');
let menuContr = document.querySelector('.menu-block');

/* Transform buttons controller */
menuButton.addEventListener("click", function (e) {
  e.preventDefault();
  this.classList.toggle('menu-btn-active');
  menuContr.classList.toggle('menu__active');
});

/* Timer */
const PARAM = {
  INTERVAL: null,
  TIME_VAL: 0,
  SECOND: 6,
  MINUTE: 0
}

const Timer = function (obj) {
  this.interval = obj.INTERVAL;
  this.degSeconds = obj.SECOND;
  this.degMinutes = obj.MINUTE;
  this.time = obj.TIME_VAL;
  let now1;

  //Update timer
  const updateTimer = () => {
    this.time += leveling();
    let timeFormat = formatTimer(this.time);
    digitalSecOne.innerHTML = timeFormat;
  }

  //Reset Date.now()
  const leveling = () => {
    let now = Date.now();
    let timeEnd = now - now1;
    now1 = now;
    return timeEnd;
  }

  const formatTimer = (timeSecMin) => {
    const TIME = new Date(timeSecMin);
    let minutes = TIME.getMinutes().toString();
    let seconds = TIME.getSeconds().toString();

    //.toString() - Property of the object-prototype Object. Used for string transformation(example down (Conditional operator)).
    (minutes.length < 2) ? minutes = '0' + minutes: void(0);
    //void(0) - don't do anything
    (seconds.length < 2) ? seconds = '0' + seconds: void(0);

    return minutes + ' : ' + seconds;
  }

  /* Arrow timer */
  const moveSecArrow = () => {
    if (this.degSeconds > 360) {
      this.degSeconds = 6;
      this.degMinutes += 6;
    } else if (this.degMinutes > 360) {
      this.degMinutes = 6;
    }

    secondArrow.style.transform = 'rotate(' + this.degSeconds + 'deg)';
    minuteArrow.style.transform = 'rotate(' + this.degMinutes + 'deg)';
    this.degSeconds += 6;
  }

  this.start = function () {
    this.interval = setInterval(() => {
      moveSecArrow();
      updateTimer();
    }, 1000);
    now1 = Date.now();
  };

  this.pause = function () {
    clearInterval(this.interval);
  };

  this.reset = function () {
    this.time = 0;
    this.degSeconds = 0;
    this.degMinutes = 0;
    digitalSecOne.innerHTML = '00 : 00';
    moveSecArrow();
  };
}

const timer = new Timer(PARAM);

btnStart.addEventListener("click", () => {
  timer.start();
});

btnPause.addEventListener("click", () => {
  timer.pause();
});

btnReset.addEventListener("click", () => {
  timer.reset();
});