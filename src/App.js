import "./App.css";
import Coin from "./components/Coin";
import { useEffect,useState } from "react";
import axios from "axios";

async function getData(){
  const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  return await res;
}

function App() {
    
    const [Coins,setCoins] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    
    setTimeout(() => {
        getData().then((res) => {
            setCoins(res.data);
        });
    }, 10000);
    // useEffect(() => {
    //   axios
    //   .get(
    //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    //     )
    //     .then((res) => {
    //       setCoins(res.data);
    //     });
    //   }, []);
      
  const filteredCoins = Coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });


  return (
    <div className="App">
      <div className="cryptoHeader">
      <input
          type="text"
          placeholder="Bitcoin..."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="coinDisplay">
      {filteredCoins.map((coin) => {
      return <Coin name={coin.name} image={coin.image} current_price={coin.current_price} symbol={coin.symbol} high={coin.high_24h} low={coin.low_24h}/>})}
      </div>
    </div>
  );
}

export default App;
