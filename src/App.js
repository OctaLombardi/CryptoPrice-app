import './Styles/App.css';
import { useEffect, useState } from 'react';
import Coin from './Components/Coin';
import axios from 'axios';
function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    axios
      .get('https://api.coinstats.app/public/v1/coins?skip=0')
      .then((response) => {
        setListOfCoins(response.data.coins);
      });
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });
  return (
    <div className='App'>
      <div className='cryptoHeader'>
        <input
          type='text'
          placeholder='Search a coin'
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className='cryptoDisplay'>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={'key'}
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
              websiteUrl={coin.websiteUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
