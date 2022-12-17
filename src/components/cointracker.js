import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [inputMoney, setInputMoney] = useState(0);
  const [mymoney, setMymoney] = useState(0);
  const [selectCoin, setSelectCoin] = useState(0);
  function onChange(event) {
    setInputMoney(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    setMymoney(inputMoney);
    setInputMoney("");
  }
  function changeValue(event) {
    let coinPrice = parseFloat(event.target.value);
    setSelectCoin(coinPrice);
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((Response) => {
        return Response.json();
      })
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={changeValue}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      {loading ? null : (
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={inputMoney}
            type="number"
            placeholder="write your money"
          />
          $ <button>submit</button>
        </form>
      )}
      <hr />
      {loading
        ? null
        : `I can buy ${mymoney / selectCoin} coins with my funds.`}
      {/* <Todo /> */}
    </div>
  );
}

export default CoinTracker;
