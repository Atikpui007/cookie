import React, { useState } from 'react';
import Cookie from './Cookie';
import './App.css'; 

type CookieOption = {
  image: string;
  name: string;
  valuePerClick: number;
}

// TODO: Add your cookie options here
const cookieOptions: CookieOption[] = [
  // Example cookie option
  { image: 'images/classic.png', name: 'Classic Cookie', valuePerClick: 1 },
];

const App: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0); // Tracks the total number of clicks
  const [selectedCookie, setSelectedCookie] = useState<CookieOption>(cookieOptions[0]); // The currently selected cookie
  const [showCookieList, setShowCookieList] = useState<boolean>(false); // Controls visibility of the cookie selection list

  // TODO: Implement the function to handle cookie clicks
  const handleCookieClick = () => {};

  // TODO: Implement the function to reset the click counter
  const resetCounter = () => {};

  // TODO: Implement the function to toggle the cookie selection list
  const changeCookie = () => {};

  // TODO: Implement the function to select a cookie from the list
  const selectCookie = (cookie: CookieOption) => {};

  return (
    <div className="App">
      <h1>Cookie Clicker</h1>
      {/* TODO: Display the selected cookie image here */}
      <p>Cookie Clicks: {clickCount}</p>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={changeCookie}>Change Cookie</button>

      {/* TODO: Implement the cookie selection list here */}
    </div>
  );
};

export default App;
