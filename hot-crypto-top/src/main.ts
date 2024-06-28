import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '../public/coingecko-1.svg'
import { setupCounter } from './counter.ts'

/*
const url = 'https://api.coingecko.com/api/v3/ping';
const options = {
  method: 'GET',
  headers: {accept: 'application/json'}
};

*/
const url = 'https://api.coingecko.com/api/v3/search/trending';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => {
    console.log(json)
    const coinsContainer = document.getElementById('coins-container');
    const coins = json.coins;
    console.log('the coins are', coins);
    
    coins.forEach(coin => {
      const coinElement = document.getElementById('coin');
      coinElement.classList.add('coin');

      const coinName = document.createElement('h2');
      coinName.textContent = coin.item.name;

      const coinSymbol = document.createElement('p');
      coinSymbol.textContent = `Symbol: ${coin.item.symbol}`;

      const coinMarketCapRank = document.createElement('p');
      coinMarketCapRank.textContent = `Market Cap Rank: ${coin.item.market_cap_rank}`;

      coinElement.appendChild(coinName);
      coinElement.appendChild(coinSymbol);
      coinElement.appendChild(coinMarketCapRank);
      coinsContainer?.appendChild(coinElement);
    });
  })
  .catch(err => console.error('error:' + err));


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.coingecko.com/" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />Data from CoinGecko
    </a>
    <h1>Crypto coins trending in the past 24h</h1>
    <div class="card" id="coin">
      
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
