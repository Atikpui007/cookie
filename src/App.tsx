import React, { useState } from 'react';
import Cookie from './Cookie';
import './App.css';

interface CookieOption {
  image: string;
  name: string;
  valuePerClick: number;
}

const cookieOptions: CookieOption[] = [
  { image: 'images/classic.png', name: 'Classic Cookie', valuePerClick: 1 },
  { image: 'images/double.png', name: 'Double Cookie', valuePerClick: 2 },
];

const App: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [selectedCookie, setSelectedCookie] = useState<CookieOption>(cookieOptions[0]);
  const [valuePerClick, setValuePerClick] = useState<number>(selectedCookie.valuePerClick);
  const [showCookieList, setShowCookieList] = useState<boolean>(false);

  const handleCookieClick = () => {
    setClickCount((prevCount) => prevCount + valuePerClick);
  };

  const resetCounter = () => {
    setClickCount(0);
  };

  const changeCookie = () => {
    setShowCookieList((prevShow) => !prevShow);
  };

  const selectCookie = (cookie: CookieOption) => {
    setSelectedCookie(cookie);
    setValuePerClick(cookie.valuePerClick);
    setShowCookieList(false);
  };

  return (
    <div className="App">
      <h1>Cookie Clicker</h1>
      <img src={selectedCookie.image} alt={selectedCookie.name} />
      <p>Cookie Clicks: {clickCount}</p>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={changeCookie}>Change Cookie</button>

      {showCookieList && (
        <div className="cookie-list">
          {cookieOptions.map((cookie, index) => (
            <Cookie key={index} image={cookie.image} name={cookie.name} onClick={() => selectCookie(cookie)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
