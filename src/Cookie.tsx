import React from 'react';

type CookieProps = {
  image: string;
  name: string;
  onClick: () => void;
}

const Cookie: React.FC<CookieProps> = ({ image, name, onClick }) => {
  return (
    <div className="cookie-option" onClick={onClick}>
      <img src={image} alt={name} style={{ width: '100px', cursor: 'pointer' }} />
      <p>{name}</p>
    </div>
  );
};

export default Cookie;
