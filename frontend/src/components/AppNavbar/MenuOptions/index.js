import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import cn from 'classnames';
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

const MenuOptions = ({ location }) => (
  <>
    {
      options.map(option => (
        <Link
          to={option.link}
          key={option.link}
          className={cn('menuOptions', { 'menuOptions--active' : location.pathname === option.link })}
        >
          {option.displayName}
        </Link >
      ))
    }
  </>
)

export default withRouter(MenuOptions);