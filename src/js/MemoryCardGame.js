class MemoryCardGame {
  constructor () {
    this.firstCard = '';
    this.secondCard = '';
    this.isCardOpen = false;
    this.isGameLocked = false;
    this.winCounter = 0;
    this.moveCounter = 0;
    this.cards = document.querySelectorAll('.flip-card');
    this.movesElement = document.querySelector('.moves');
    this.timerElement = document.querySelector('.timer');
    this.timer = {
      intervalId: 0,
      hour: 0,
      min: 0,
      sec: 0
    };
  }

  drawMatch () {
    const isCardMatched = this.firstCard.dataset.type === this.secondCard.dataset.type;

    if (isCardMatched) {
      this.winCounter++;
      if (this.winCounter === 8) {
        this.winPop();
      }
    } else {
      this.resetFlippedCard();
    }
  }

  resetFlippedCard () {
    this.isGameLocked = true;
    setTimeout(() => {
      this.firstCard.childNodes[1].classList.remove('flip');
      this.firstCard.classList.remove('disabled');

      this.secondCard.childNodes[1].classList.remove('flip');
      this.secondCard.classList.remove('disabled');
      this.isGameLocked = false;
      this.firstCard = '';
      this.secondCard = '';
    }, 500);
  }

  winPop () {
    alert(`Congrats you won in ${this.moveCounter} moves and in ${this.timer.hour} hours ${this.timer.min} minutes and ${this.timer.sec} seconds`);
    this.restartGame();
  }

  restartGame () {
    this.cards.forEach(card => {
      const randomPos = Math.floor(Math.random() * 16);
      card.childNodes[1].classList.remove('flip');
      card.classList.remove('disabled');
      card.style.order = randomPos;
    });

    clearInterval(this.timer.intervalId);

    this.isGameLocked = false;
    this.isCardOpen = false;
    this.firstCard = '';
    this.secondCard = '';
    this.winCounter = 0;
    this.moveCounter = 0;
    this.movesElement.innerHTML = 'Number of moves: (0).';
    this.timerElement.innerHTML = 'playing time: 0 minute 0 seconds';
  }

  startTimer () {
    this.timer.intervalId = setInterval(() => {
      this.timerElement.innerHTML = `Playing time: ${this.timer.min} minutes ${this.timer.sec} seconds`;
      this.timer.sec++;
      if (this.timer.sec === 60) {
        this.timer.min++;
        this.timer.sec = 0;
      }
      if (this.timer.min === 60) {
        this.timer.hour++;
        this.timer.min = 0;
      }
    }, 1000);
  }

  gameInit () {
    const self = this;
    const restart = document.querySelector('.restart');

    restart.addEventListener('click', function () {
      self.restartGame();
    });

    this.cards.forEach(card => card.addEventListener('click', function () {
      if (self.isGameLocked) return;

      this.childNodes[1].classList.add('flip');
      this.classList.add('disabled');

      if (!self.isCardOpen) {
        self.firstCard = this;
        self.isCardOpen = true;
      } else {
        self.secondCard = this;
        self.isCardOpen = false;
        self.drawMatch();
        self.moveCounter++;
        self.movesElement.innerHTML = `Number of moves: (${self.moveCounter}).`;

        if (self.moveCounter === 1) {
          self.startTimer();
        }
      }
    }));

    this.restartGame();
  }
}

export default MemoryCardGame;
