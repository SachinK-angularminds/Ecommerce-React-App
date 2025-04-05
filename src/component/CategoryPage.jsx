import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClothingCard from "./ClothingCard";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();
  const [product, setProduct] = useState([]);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    async function getProductByCategory() {
      let result;
      if (category === undefined) {
        result = await axios.get("https://fakestoreapi.com/products");
      } else {
        result = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
      }

      setProduct(result.data);
    }
    getProductByCategory();
  }, [category]);
  const handleSliderChange = (event) => {
    const newMaxPrice = event.target.value;
    setMaxPrice(newMaxPrice); // Update maxPrice state
  };

  const handleSort = () => {
    console.log(category);
    if (category === undefined) {
      console.log("data", product);
      let discountedProducts = product.map((product) => {
        let discount = 0;
        if (product.category === "men's clothing") {
          discount = 0.3;
        } else if (product.category === "jewelery") {
          discount = 0.1;
        }

        product.price = product.price - product.price * discount;

        return product;
      });
      discountedProducts.sort((a, b) => a.price - b.price);

      setProduct(discountedProducts);
    } else {
      setProduct((prevProducts) => {
        return [...prevProducts].sort((a, b) => a.price - b.price);
      });
    }
  };
  console.log(maxPrice)
  const filteredProducts = product.filter((prod) => prod.price <= maxPrice);

  return (
    <div>
      <div className="d-flex justify-content-start ms-2 mt-3">
        <Button
          className="me-5 px-5 sorting-btn"
          variant="pink"
          onClick={handleSort}
        >
          Sorting
        </Button>
        <div class="slidecontainer">
          <input
            type="range"
            min={0}
            max={3000}
            value={maxPrice}
            class="slider"
            id="myRange"
            onChange={handleSliderChange}
          />
          <div className="slider-value">Max Price: ${maxPrice}</div>
        </div>
      </div>
      <ClothingCard products={filteredProducts} />
    </div>
  );
};

export default CategoryPage;
