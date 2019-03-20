import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import cn from 'classnames';
import { FontIcon } from 'react-md';
import './styles.scss';

const ProductsMenuItem = ({ icon, text, link, location  }) => (
  <Link to={link} className={cn('productsMenuItem', { 'productsMenuItem--active' : location.pathname === link })}>
    <div className="productsMenuItem__icon">
      <FontIcon className="productsMenuItem__icon--image">{icon}</FontIcon>
    </div>
    <span className="productsMenuItem__text">{text}</span>
  </Link>
);

export default withRouter(ProductsMenuItem);