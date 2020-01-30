import './../css';
import MemoryCardGame from './MemoryCardGame';
import '@babel/polyfill';

const registerSW = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      alert('ServiceWorker registration failed. Sorry about that.');
    }
  } else {
    document.querySelector('.alert').removeAttribute('hidden');
  }
};

registerSW();

const memoryCardGame = new MemoryCardGame();
memoryCardGame.gameInit();
