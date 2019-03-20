import React from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import './styles.scss';

const ProductCard = ({ name, description, price, brand, stock, photo, categories  }) => (
  <Card className="card">
    <CardTitle title={name} subtitle={brand} />

    <CardText className="card__content">      
      <img className="card__image" src={photo} alt={name} />      
      <p className="card__text">
        {description}
        stock: {stock}
        price: {price}
      </p>      
    </CardText>

  </Card>
);

export default ProductCard;