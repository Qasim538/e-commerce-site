import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const productDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    const filterproduct = items.filter((product) => product.id == id);
    setProduct(filterproduct[0]);
    const relatedProduct = items.filter(
      (suman) => suman.category === product.category)
      // console.log("reladProduct = ", relatedProduct );
      setRelatedProduct(relatedProduct)

  }, [id, product.category]);

  return (
    <>
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt={product.title} />
        </div>

        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-2">${product.price}</button>
          <button className="btn btn-warning mx-2">Add To Cart</button>
        </div>
      </div>
      <hr/>
      <h2 className="text-center">Similar Products</h2>
      <Product items={relatedProduct}/>
    </>

  );
};

export default productDetails;
