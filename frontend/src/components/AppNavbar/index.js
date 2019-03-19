import React from 'react';
import { Toolbar } from 'react-md';
import MenuOptions from '../MenuOptions';
import './styles.scss';

const Appnavbar = () => (
  <Toolbar
    colored
    className="appNavBar"
  >
    <MenuOptions />
  </Toolbar>
);

export default Appnavbar;