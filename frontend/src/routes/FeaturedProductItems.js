import React from 'react';

function FeaturedProductItem({ src, name, label, path }) {
  return (
    <li>
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <p>{label}</p>
      <button onClick={() => window.location.href = path}>Visit Shop</button>
    </li>
  );
}

export default FeaturedProductItem;