import { useState, useEffect } from "react";

function Hook(currency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((json) => setData(json[currency]));
  }, [currency]);

  return data;
}

export default Hook;
