
//const baseUrl : string = 'https://api.coingecko.com/api/v3';
//const API_KEY: string = 'CG-tE6rwJBxRiHhWEYf2f3H396v'

/*
const url = 'https://api.coingecko.com/api/v3/ping';
const options = {
  method: 'GET',
  headers: {accept: 'application/json'}
};

*/

export const fetchCoins = () => {
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
      const coinElement = document.querySelector<HTMLDivElement>('.card');
      
      const coinName = document.createElement('h2');
      coinName.textContent = coin.item.name;

      const coinLogo = document.createElement('img');
      coinLogo.src = coin.item.small;

      const coinSymbol = document.createElement('p');
      coinSymbol.textContent = `Symbol: ${coin.item.symbol}`;

      const coinMarketCapRank = document.createElement('p');
      coinMarketCapRank.textContent = `Market Cap Rank: ${coin.item.market_cap_rank}`;

      coinElement?.appendChild(coinName);
      coinElement?.appendChild(coinSymbol);
      coinElement?.appendChild(coinMarketCapRank);
      coinElement?.appendChild(coinLogo)
      coinsContainer?.appendChild(coinElement);
    });
  })
  .catch(err => console.error('error:' + err));


}
