import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const options = [
  {
    displayName: 'HOME',
    link: '/'
  },
  {
    displayName: 'PRODUCTS',
    link: '/products'
  },
  {
    displayName: 'CLIENTS',
    link: '/clients'
  },
  {
    displayName: 'CONTACT',
    link: '/contact'
  }
];

const MenuOptions = () => (
  <>
    {
      options.map(option => (
        <Link to={option.link} className="menuOptions">
          {option.displayName}
        </Link >
      ))
    }
  </>
);

export default MenuOptions;