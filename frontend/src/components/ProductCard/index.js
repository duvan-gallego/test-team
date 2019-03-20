import React from 'react';
import cn from 'classnames';
import { Card, CardTitle, CardText, Cell } from 'react-md';
import './styles.scss';

const ProductCard = ({ name, description, price, brand, stock, photo, categories, columnSize, twoColumnsSize }) => (
  <Cell size={columnSize} tabletSize={12} phoneSize={12}>
    <Card className={cn('productCard', { 'productCard--two-columns' : columnSize === twoColumnsSize })}>
      <CardTitle title={name} subtitle={brand} />
      <CardText className="productCard__content">
        <img className="productCard__image" src={photo} alt={name} />
        <div className="productCard__text">
          <div className="productCard__text--description">
            {description}
          </div>
          <div>
            <b>Stock:</b> {stock}
          </div>
          <div>
            <b>Price:</b> {price}
          </div>
        </div>
      </CardText>
    </Card>
  </Cell>
);

export default ProductCard;