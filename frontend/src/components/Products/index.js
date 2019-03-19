import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductsMenuItem from '../ProductsMenuItem';
import './styles.scss';

const Products = ({ location }) => (
  <>
    <div className="products__menu">
      <h4 className="products__menu_title">Categories</h4 >
      <ProductsMenuItem icon="format_list_bulleted" text="All" link="/products" location={ location } />
      <hr className="products__separator"/>
      <ProductsMenuItem icon="computer" text="Tech" link="/products/tech" location={ location } />
      <ProductsMenuItem icon="build" text="Services" link="/products/services" location={ location } />
      <ProductsMenuItem icon="folder" text="Office" link="/products/office" location={ location } />
    </div>
    <div className="products__products_list">
      products list
    </div>

  </>
);

export default withRouter(Products);