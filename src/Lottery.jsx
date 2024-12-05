import { useState } from "react";
import "./Lottery.css";

export default function LotteryToken() {
  const [token, setToken] = useState(null);
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);

  const generateToken = () => {
    const randomNo = Math.floor(Math.random() * 900) + 100; 
    setToken(randomNo);
    setHasWon(false); 
    setHasLost(false); 
    console.log("Generated token:", randomNo);
  };

  const checkIfWins = () => {
    if (token !== null) {
      const digitsArray = token.toString().split("").map(Number);
      console.log("Digits Array:", digitsArray);

      const sum = digitsArray.reduce((acc, curr) => acc + curr, 0);
      if (sum === 15) {
        console.log("You won the lottery!");
        setHasWon(true);
        setHasLost(false);
      } else {
        console.log("Feels sorry for you.");
        setHasWon(false);
        setHasLost(true);
      }
    } else {
      console.log("No token generated yet.");
      alert("Please generate a token first!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Generate a Lottery Token</h1>
      <button onClick={generateToken} style={{ margin: "10px", padding: "10px" }}>
        Generate Token
      </button>
      <h2>Token value: {token !== null ? token : "No token generated"}</h2>
      <button onClick={checkIfWins} style={{ margin: "10px", padding: "10px" }}>
        Check
      </button>
      {hasWon && <h1 className="win-message">&#x1F973; Congratulations, you won the lottery!</h1>}
      {hasLost && <p className="lose-message">&#x1F643; Feels Sorry for you &#x1F609; Try again!!!</p>}
  
      {hasWon &&
        Array.from({ length: 15 }).map((_, index) => (
          <span
            key={index}
            className="trophy"
            style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }}
          >
            &#x1F3C6;
          </span>
        ))}
    </div>
  );
}
