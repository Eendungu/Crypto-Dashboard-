import React, { useEffect, useState } from "react";

const CryptoDashboard = () => {
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(true);

  const walletData = {
    walletBalance: "2578581.33 USDT",
    vipLevel: "VIP6",
    dailyLimit: "2,000,000 USDT",
    monthlyLimit: "60,000,000 USDT",
  };

  const coinList = {
    bitcoin: "BTC",
    ethereum: "ETH",
    "bitcoin-cash": "BCH",
    "ethereum-classic": "ETC",
  };

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,bitcoin-cash,ethereum-classic&vs_currencies=usd&include_24hr_change=true"
        );
        const data = await res.json();
        const mapped = Object.entries(data).map(([id, info]) => ({
          symbol: coinList[id],
          price: info.usd.toLocaleString(),
          change: `${info.usd_24h_change.toFixed(2)}%`
        }));
        setPrices(mapped);
      } catch (error) {
        console.error("Failed to fetch prices", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // refresh every 60 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold">Crypto Dashboard (Live)</h1>
        <p>Total Assets: <strong>{walletData.walletBalance}</strong></p>
        <p>VIP Level: {walletData.vipLevel}</p>
        <p>Daily Limit: {walletData.dailyLimit}</p>
        <p>Monthly Limit: {walletData.monthlyLimit}</p>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button className="border rounded-xl p-2 hover:bg-gray-100">Recharge</button>
          <button className="border rounded-xl p-2 hover:bg-gray-100">Withdraw</button>
          <button className="border rounded-xl p-2 hover:bg-gray-100">Transfer</button>
          <button className="border rounded-xl p-2 hover:bg-gray-100">VIP Level</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Market Prices (Live)</h2>
        {loading ? (
          <p>Loading prices...</p>
        ) : (
          <ul className="space-y-2">
            {prices.map((coin) => (
              <li key={coin.symbol} className="flex justify-between border-b pb-2">
                <span>{coin.symbol}</span>
                <span>{coin.price} ({coin.change})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CryptoDashboard;
