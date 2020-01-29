import { expect } from 'chai';
import sinon from 'sinon';
import MemoryCardGame from '../../src/js/MemoryCardGame';
import jsdom from 'mocha-jsdom';


describe('MemoryCardGame', function (done) {
  jsdom({
    html: '',
    src: '',
    url: "http://localhost"
  })
  describe('launchThegame', function () {
    it('should launch the game', (done) => {
      const memoryCardGame = new MemoryCardGame();
      const stubQuerySelector = sinon.stub(document, "querySelector").returns({ addEventListener: () => null });
      const stubRestartGame = sinon.stub(memoryCardGame, "restartGame");
      memoryCardGame.gameInit();

      expect(stubQuerySelector.called, true);
      expect(stubRestartGame.called, true);
      stubQuerySelector.restore();
      stubRestartGame.restore();
      done();
    });

    it('should not call resetFlippedCard when card does match', (done) => {
      const memoryCardGame = new MemoryCardGame();
      memoryCardGame.firstCard = {
        dataset: {
          type: "A"
        }
      };
      memoryCardGame.secondCard = {
        dataset: {
          type: "A"
        }
      };
      const stubQuerySelector = sinon.stub(document, "querySelector").returns({ addEventListener: () => null });
      const stubResetFlippedCard = sinon.stub(memoryCardGame, "resetFlippedCard");

      memoryCardGame.drawMatch();

      expect(stubQuerySelector.called, true);
      expect(stubResetFlippedCard.called, false);
      stubQuerySelector.restore();
      stubResetFlippedCard.restore();
      done();
    });

    it('should call resetFlippedCard when card does not match', (done) => {
      const memoryCardGame = new MemoryCardGame();
      memoryCardGame.firstCard = {
        dataset: {
          type: "A"
        }
      };
      memoryCardGame.secondCard = {
        dataset: {
          type: "B"
        }
      };
      const stubQuerySelector = sinon.stub(document, "querySelector").returns({ addEventListener: () => null });
      const stubResetFlippedCard = sinon.stub(memoryCardGame, "resetFlippedCard");

      memoryCardGame.drawMatch();

      expect(stubQuerySelector.called, true);
      expect(stubResetFlippedCard.called, true);
      stubQuerySelector.restore();
      stubResetFlippedCard.restore();
      done();
    });
  });
});