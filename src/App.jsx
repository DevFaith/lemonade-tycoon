import { useState, useEffect } from "react";

function App() {
  const [lemons, setLemons] = useState(0);
  const [money, setMoney] = useState(20);
  const [price, setPrice] = useState(2);
  const [cooler, setCooler] = useState(false);
  const [billboard, setBillboard] = useState(false);
  const [autoSeller, setAutoSeller] = useState(false);
  const [iceMachine, setIceMachine] = useState(false);
const [radioAds, setRadioAds] = useState(false);
const [franchiseKit, setFranchiseKit] = useState(false);


  // 🍋 Buy Lemons
  const buyLemon = () => {
    const cost = iceMachine ? 0.5 : 1;
  
    if (money >= cost) {
      setLemons(prev => prev + 1);
      setMoney(prev => prev - cost);
    }
  };
  

  // 💵 Sell Lemonade
  const sellLemonade = () => {
    let lemonadeSold = franchiseKit ? 2 : 1;
  
    if (lemons >= lemonadeSold) {
      setLemons(lemons - lemonadeSold);
  
      const earnings = (radioAds ? price * 1.2 : price) * lemonadeSold;
      setMoney(prev => prev + earnings);
    }
  };
  

  // 🧊 Buy Cooler
  const buyCooler = () => {
    if (!cooler && money >= 15) {
      setCooler(true);
      setMoney(money - 15);
    }
  };

  // 📢 Buy Billboard
  const buyBillboard = () => {
    if (!billboard && money >= 30) {
      setBillboard(true);
      setMoney(money - 30);
    }
  };

  // 🤖 Buy Auto Seller
  const buyAutoSeller = () => {
    if (!autoSeller && money >= 50) {
      setAutoSeller(true);
      setMoney(money - 50);
    }
  };

  const buyIceMachine = () => {
    if (!iceMachine && money >= 40) {
      setIceMachine(true);
      setMoney(money - 40);
    }
  };
  
  const buyRadioAds = () => {
    if (!radioAds && money >= 60) {
      setRadioAds(true);
      setMoney(money - 60);
    }
  };
  
  const buyFranchiseKit = () => {
    if (!franchiseKit && money >= 100) {
      setFranchiseKit(true);
      setMoney(money - 100);
    }
  };
  

  // ⚙️ Passive Income with Auto Seller
  useEffect(() => {
    if (autoSeller) {
      const interval = setInterval(() => {
        sellLemonade();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoSeller, lemons, price]);
  

  return (
    <div className="min-h-screen bg-yellow-50 p-8 text-center">
      <h1 className="text-3xl font-bold text-yellow-700 mb-4">🍋 Lemonade Tycoon</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto mb-6">
        <div className="p-4 bg-white shadow rounded-xl">
          <p className="text-sm text-gray-500">Money</p>
          <h2 className="text-xl font-semibold text-green-600">${money}</h2>
        </div>
        <div className="p-4 bg-white shadow rounded-xl">
          <p className="text-sm text-gray-500">Lemons</p>
          <h2 className="text-xl font-semibold">{lemons}</h2>
        </div>
        <div className="p-4 bg-white shadow rounded-xl">
          <p className="text-sm text-gray-500">Price / Lemonade</p>
          <h2 className="text-xl font-semibold">${price}</h2>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={buyLemon}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow"
        >
          Buy Lemon ($1)
        </button>
        <button
          onClick={sellLemonade}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl shadow"
        >
          Sell Lemonade
        </button>

        <button onClick={buyIceMachine} disabled={iceMachine} className="bg-blue-300 hover:bg-blue-400 text-white py-2 rounded-xl disabled:opacity-50">
  {iceMachine ? "Ice Machine: Owned" : "Buy Ice Machine ($40)"}
</button>
<button onClick={buyRadioAds} disabled={radioAds} className="bg-purple-400 hover:bg-purple-500 text-white py-2 rounded-xl disabled:opacity-50">
  {radioAds ? "Radio Ads: Owned" : "Buy Radio Ads ($60)"}
</button>
<button onClick={buyFranchiseKit} disabled={franchiseKit} className="bg-red-400 hover:bg-red-500 text-white py-2 rounded-xl disabled:opacity-50">
  {franchiseKit ? "Franchise Kit: Owned" : "Buy Franchise Kit ($100)"}
</button>

      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-yellow-700 mb-2">🛠️ Upgrades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto">
          <button
            onClick={buyCooler}
            disabled={cooler}
            className="bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-xl disabled:opacity-50"
          >
            {cooler ? "Cooler: Owned" : "Buy Cooler ($15)"}
          </button>
          <button
            onClick={buyBillboard}
            disabled={billboard}
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl disabled:opacity-50"
          >
            {billboard ? "Billboard: Owned" : "Buy Billboard ($30)"}
          </button>
          <button
            onClick={buyAutoSeller}
            disabled={autoSeller}
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl disabled:opacity-50"
          >
            {autoSeller ? "Auto Seller: Owned" : "Buy Auto Seller ($50)"}
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        Grow your stand, manage money wisely, and become a lemonade mogul! 🍋📈
      </p>
    </div>
  );
}

export default App;
