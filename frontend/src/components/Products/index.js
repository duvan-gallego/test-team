import React from 'react';
import ProductsMenuItem from '../ProductsMenuItem';
import ProductsList from '../../containers/ProductsList';
import './styles.scss';

const Products = () => (
  <>
    <div className="products__menu">
      <h4 className="products__menu_title">Categories</h4 >
      <ProductsMenuItem icon="format_list_bulleted" text="All" link="/products" />
      <hr className="products__separator"/>
      <ProductsMenuItem icon="computer" text="Tech" link="/products/tech" />
      <ProductsMenuItem icon="build" text="Services" link="/products/services" />
      <ProductsMenuItem icon="folder" text="Office" link="/products/office" />
    </div>
    <div className="products__products_list">
      <ProductsList />
    </div>

  </>
);

export default Products;