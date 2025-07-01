import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({ quote: "", author: "", category: "" });

  const fetchQuote = async () => {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: { "X-Api-Key": "JNJV5g4UihKC9t9Pu7lmYQ==APILJGK4OWkPlBcD" },
    });
    const data = await response.json();
    setQuote(data[0]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box">
      <div id="text">{quote.quote}</div>
      <div id="author">{quote.author}</div>
      <button id="new-quote" onClick={fetchQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${quote.quote}" - ${quote.author}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
}

export default App;
