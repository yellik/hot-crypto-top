import './style.css'
import { fetchCoins } from './client/apiFetch';


  const app = document.getElementById('app');
  const coinsContainer = document.createElement('main');
  const coinElement = document.createElement('div')
  coinElement.classList.add('card')
  coinsContainer.appendChild(coinElement)

  app?.appendChild(coinsContainer)

  document.addEventListener("DOMContentLoaded", fetchCoins)