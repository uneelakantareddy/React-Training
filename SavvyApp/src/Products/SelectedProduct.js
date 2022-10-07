import React from "react";
import "./SelectedProduct.scss";
const SelectedProduct = (props) => {
  return (
    <div className="selectedProduct">
      <img className="selectedProduct__img" src={props.image} />
      <div className="selectedProduct__content">
        <h1 className="selectedProduct__category">{`Product Category:- ${props.category}`}</h1>
        <h2 className="selectedProduct__title">{`Product Title :- ${props.title}`}</h2>
        <h4 className="selectedProduct__description">{`Description:- ${props.description}`}</h4>
        <h3 className="selectedProduct__price">{`Product Price:- $ ${props.price}`}</h3>
        <h3 className="selectedProduct__rating">{` Product Rating:- ${props.rating}`}</h3>
      </div>
    </div>
  );
};

export default SelectedProduct;
