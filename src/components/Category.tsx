import React from 'react';

interface Props {
  image: string;
}
const Category = ({ image }: Props) => (
  <div className="category__list--item">
    <img src={ image } alt="Category" className="category__list--image" />
  </div>
)

export default Category;
