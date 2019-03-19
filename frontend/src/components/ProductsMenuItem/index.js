import React from 'react';
import { FontIcon } from 'react-md';
import './styles.scss';

const ProductsMenuItem = ({ icon, text }) => (
  <div className="productsMenuItem">
    <div className="productsMenuItem__icon">
      <FontIcon className="productsMenuItem__icon--image">{icon}</FontIcon>
    </div>
    <span className="productsMenuItem__text">{text}</span>
  </div>
);

export default ProductsMenuItem;