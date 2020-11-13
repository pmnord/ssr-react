import React, { useEffect, useState } from "react";
import './styles.css';

const App = () => {
  const [cookieCount, setCookieCount] = useState(0);
  const [cookies, setCookies] = useState("");
  const [rank, setRank] = useState("");
  const ranks = [
    "Neophyte",
    "Troglodyte",
    "Scout",
    "Apprentice",
    "Cookie Master",
  ];

  useEffect(() => {
    switch (cookieCount) {
      case 1:
        updateRank(0);
        break;
      case 10:
        updateRank(1);
        break;
      case 30:
        updateRank(2);
        break;
      case 60:
        updateRank(3);
        break;
      case 100:
        updateRank(4);
        break;
      default:
        break;
    }

    function updateRank(index) {
      setRank(ranks[index]);
    }
  }, [cookieCount]);

  const addCookie = () => {
    if ((cookieCount + 1) % 10 === 0) setCookies(cookies + "🍪");
    setCookieCount(cookieCount + 1);
  };

  return (
    <main className="game-board">
      <h1 className="score">
        Cookies: <span className="current-score">{cookieCount}</span>
      </h1>
      <h2 className="rank">Rank: {rank}</h2>
      <button className="btn" onClick={addCookie}>
        🍪
      </button>
      <div className="cookies" style={{height: '5rem'}}>{cookies}</div>
    </main>
  );
};

export default App;
