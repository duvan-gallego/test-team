import React from 'react';
import ProductsMenuItem from '../ProductsMenuItem';
import './styles.scss';

const Products = () => (
  <>
    <div className="products__menu">
      <h4 className="products__menu_title">Categories</h4 >
      <ProductsMenuItem icon="format_list_bulleted" text="All" />
      <hr className="products__separator"/>
      <ProductsMenuItem icon="computer" text="Tech" />
      <ProductsMenuItem icon="build" text="Services" />
      <ProductsMenuItem icon="folder" text="Office" />
    </div>
    <div className="products__products_list">
      products list
    </div>

  </>
);

export default Products;