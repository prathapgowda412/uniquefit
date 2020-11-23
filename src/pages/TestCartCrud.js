import React, { useContext, useEffect } from "react";
import { addToCart } from "../services/fetchService";
import { productContext } from "./../contexts/ProductContext";
import { toast } from "react-toastify";
import { removeFromCart } from "./../services/fetchService";

function TestCartCrud() {
  let { products } = useContext(productContext);

  useEffect(() => {
    setTimeout(() => {
      console.log(products);
      if (products.length) {
        addToCart(products[1]).then(({ data }) => {
          console.log(data);
          toast(data.message);
        });
      }
    }, 2000);
    setTimeout(() => {
      if (products.length) {
        removeFromCart(products[0].productid).then(({ data }) => {
          console.log(data);
          toast(data.message);
        });
      }
    }, 3000);
  }, [products]);

  return <div></div>;
}

export default TestCartCrud;
