import { useState } from 'react';
import Hook from './componant/Hook.js';

import InputBox from './componant/InputBox.jsx';
import './App.css'
function App() {
  const [fromamount, setfromamount] = useState(0);
  const [toamount, settoamount] = useState(0);
  const [fromcurrency, setfromcurrency] = useState("inr");
  const [tocurrency, settocurrency] = useState("usd");

  let options = Hook(fromcurrency);
  const keyoptions = options ? Object.keys(options) : [];
  const swap = () => {
    settocurrency(fromcurrency);
    setfromcurrency(tocurrency);
    setfromamount(toamount)
    settoamount(fromamount)
  }
  const convert = () => {
    if (options && options[tocurrency]) {
      settoamount(fromamount * options[tocurrency]);
    }
  };

  return (
    <div className="w-full h-screen flex  flex-col justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://wallpaper-house.com/data/out/10/wallpaper2you_396215.jpg')`,
      }}>
      <InputBox
        label="from"
        currencyoptions={keyoptions}
        amount={fromamount}
        currency={fromcurrency}
        onCurrencyChange={( currency) => setfromcurrency( currency)}
        onAmountChange={( amount) => setfromamount( amount)}
      />
      <button onClick={swap} className='bg-amber-100 w-20 h-10 rounded-lg'> swap </button>
      <InputBox
        label="to"
        currencyoptions={keyoptions}
        amount={toamount}
        currency={tocurrency}
        onCurrencyChange={(currency) => settocurrency(currency)} 
      />
      <button onClick={convert} className='bg-amber-100 w-88 h-10 rounded-lg  '>
        Convert from {fromcurrency.toUpperCase()} to {tocurrency.toUpperCase()}

      </button>
    </div>
  )
}
export default App