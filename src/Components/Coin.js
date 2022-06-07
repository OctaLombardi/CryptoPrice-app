import React from 'react';
import '../Styles/Coin.css';
export default function Coin({ name, icon, price, symbol, websiteUrl }) {
  return (
    <div className='coin'>
      <h1>Name: {name}</h1>
      <img src={icon} alt='coin-icon' />
      <h3> Price:{price}</h3>
      <h3> Symbol:{symbol}</h3>
    </div>
  );
}
