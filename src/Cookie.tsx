import React from 'react';

type CookieProps = {
  image: string;
  name: string;
  onClick: () => void;
}

const Cookie: React.FC<CookieProps> = ({ image, name, onClick }) => {
  return (
    <div className="cookie-option" onClick={onClick}>
      {/* TODO: Display the cookie image and name here */}
    </div>
  );
};

export default Cookie;
