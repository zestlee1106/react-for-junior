import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    setDollar(event.target.value);
  };
  const onCoinChange = (event) => {
    setSelectedCoin(Number(event.target.value));
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <input
        placeholder="얼마를 넣을 건가요?"
        value={dollar}
        onChange={onChange}
        type="number"
      />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select value={selectedCoin} onChange={onCoinChange}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}

      {selectedCoin ? <h3>총 {dollar / selectedCoin} 개</h3> : null}
    </div>
  );
}

export default App;
