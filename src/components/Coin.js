import React from 'react'
const Coin = ({name,image,current_price,symbol,high,low}) => {
  return (
    <div className="coinpage">
      <h1>{name} ({symbol})</h1>
      <img src={image} alt="crypto" />
      <h3>Current Price: {(current_price*79.74).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
      <h3 id="high">24H High: {(high*79.74).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
      <h3 id="low">24H Low: {(low*79.74).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
    </div>
  )
}

export default Coin