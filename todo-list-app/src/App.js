import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div>
      <h1 style={{ backgroundColor: "yellow" }}>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} /> {/* Pass 'count' as a prop to the Message component */}

    </div>
  );
}

function Message({ count }) {
  return (
    <p>
      you have read <strong>{count}</strong> advices
    </p>
  );
}

export default App;