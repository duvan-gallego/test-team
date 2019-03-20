import React, { useState } from 'react';
import { FontIcon, TextField, Grid } from 'react-md';
import cn from 'classnames';
import ProductCard from '../../components/ProductCard';
import './styles.scss';

const FULL_COLUMN_SIZE = 12;
const TWO_COLUMNS_SIZE = 6;

const ProductsList = () => {

  const [columnSize, setColumnSize] = useState(12);

  const list = [
    {
      "id": "c9a5c012-6295-48d5-a103-68ca76ff047b",
      "name": "Intelligent Concrete Computer",
      "description": "Omnis veritatis in aliquam aspernatur nulla. Officia quidem qui. Maxime veniam nulla sint qui dolorem qui saepe neque placeat. Magni culpa aut eos molestiae nihil molestias. Quidem consectetur quia quo blanditiis perspiciatis facere dolorem.",
      "price": "752.00",
      "brand": "Gusikowski - Ebert",
      "stock": 44903,
      "photo": "http://lorempixel.com/640/480/technics",
      "categories": [
        "Services"
      ]
    },
    {
      "id": "b98fba89-fd2e-493d-81f8-65ce6142bdcc",
      "name": "Intelligent Fresh Keyboard",
      "description": "Et omnis voluptas. Eveniet est nostrum beatae aut dolores qui illo quis. Eveniet libero sint consectetur dolor doloremque cumque quos iste.",
      "price": "520.00",
      "brand": "McCullough, Parisian and Waters",
      "stock": 55349,
      "photo": "http://lorempixel.com/640/480/sports",
      "categories": [
        "Office"
      ]
    },
    {
      "id": "bde2ab21-8880-4552-8f3a-e575b0513a1d",
      "name": "Ergonomic Rubber Chips",
      "description": "Esse eum sapiente. Impedit accusantium officiis similique sit veritatis. Quo nam quia sapiente non quas qui.",
      "price": "149.00",
      "brand": "Murphy Inc",
      "stock": 7793,
      "photo": "http://lorempixel.com/640/480/technics",
      "categories": ["Tech", "Office"]
    }, {
      "id": "a8946d49-2ed5-4e8d-87ce-8e9900dfdc22",
      "name": "Gorgeous Steel Chips",
      "description": "Eos rem assumenda. Minima aperiam pariatur deleniti mollitia sed. Maiores saepe magnam. Et voluptates omnis corrupti. Eos possimus reiciendis repudiandae ea voluptatum. Omnis corporis similique.",
      "price": "268.00",
      "brand": "Fadel, Lemke and Weber",
      "stock": 98720,
      "photo": "http://lorempixel.com/640/480/business",
      "categories": ["Office"]
    }, {
      "id": "747a3b2c-8125-4dca-9c37-9e4b41b8a77a",
      "name": "Refined Frozen Table",
      "description": "Nulla occaecati qui laboriosam reprehenderit veritatis ea eaque. Blanditiis consequuntur enim mollitia reprehenderit est sunt corrupti quibusdam error. Provident minus non labore et alias aut quos rerum.",
      "price": "526.00",
      "brand": "Carter and Sons",
      "stock": 28915,
      "photo": "http://lorempixel.com/640/480/food",
      "categories": ["Office"]
    }
  ];

  const handlerViewModeClick = (size) => {
    setColumnSize(size);
  }

  return (
    <div className="productsList">
      <header className="productsList__header">
        <div className="productsList__rows_view">
          <div>
            <FontIcon
              className={cn('productsList__icon', { 'productsList__icon--active' : columnSize === FULL_COLUMN_SIZE })}
              onClick={() => handlerViewModeClick(FULL_COLUMN_SIZE)}
            >
              view_list
            </FontIcon>
            <FontIcon
              className={cn('productsList__icon', { 'productsList__icon--active' : columnSize === TWO_COLUMNS_SIZE })}
              onClick={() => handlerViewModeClick(TWO_COLUMNS_SIZE)}
            >
              view_module
            </FontIcon>
          </div>
          <div>
            Showing <b>10</b> products - Hidden: <b>5</b>
          </div>
        </div>
        <TextField
          id="search"
          label="Search"
          lineDirection="center"
          placeholder="Type any word to search..."
          className="md-cell md-cell--bottom productsList__search"
        />
      </header>
      <Grid>
        { list.map((item) => <ProductCard key={ item.id } columnSize={columnSize} { ...item } twoColumnsSize={TWO_COLUMNS_SIZE} />) }
      </Grid>
    </div>
  )
};

export default ProductsList;