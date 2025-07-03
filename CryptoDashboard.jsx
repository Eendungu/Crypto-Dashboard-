import React from "react";

const CryptoDashboard = () => {
  const dummyData = {
    walletBalance: "2578581.33 USDT",
    vipLevel: "VIP6",
    dailyLimit: "2,000,000 USDT",
    monthlyLimit: "60,000,000 USDT",
    prices: [
      { symbol: "BTC", price: "109,929.72", change: "+1.95%" },
      { symbol: "ETH", price: "2,599.65", change: "+5.59%" },
      { symbol: "BCH", price: "500.5", change: "-0.25%" },
      { symbol: "ETC", price: "17.18", change: "+4.69%" },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold">Crypto Dashboard (Demo)</h1>
        <p>Total Assets: <strong>{dummyData.walletBalance}</strong></p>
        <p>VIP Level: {dummyData.vipLevel}</p>
        <p>Daily Limit: {dummyData.dailyLimit}</p>
        <p>Monthly Limit: {dummyData.monthlyLimit}</p>
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
        <h2 className="text-xl font-semibold mb-4">Market Prices</h2>
        <ul className="space-y-2">
          {dummyData.prices.map((coin) => (
            <li key={coin.symbol} className="flex justify-between border-b pb-2">
              <span>{coin.symbol}</span>
              <span>{coin.price} ({coin.change})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CryptoDashboard;
