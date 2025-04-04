import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClothingCard from "./ClothingCard";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./CategoryPage.css"

const CategoryPage = () => {
  const { category } = useParams(); // `category` will hold the value from the URL (e.g., 'men-clothing')
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProductByCategory() {
        let result
        if(category === undefined){
            result=await axios.get("https://fakestoreapi.com/products")
        }else{
             result = await axios.get(
                `https://fakestoreapi.com/products/category/${category}`
              );
        }
     
      setProduct(result.data);
    }
    getProductByCategory();
  }, [category]);

  const handleSort=()=>{
    setProduct((prevProducts) => {
        return [...prevProducts].sort((a, b) => a.price - b.price);
      });
  }
  return (
    <div>
      <div className="d-flex justify-content-start ms-2 mt-3">
        <Button className="me-5 px-5 sorting-btn" variant="pink" onClick={handleSort}>
          Sorting
        </Button>
        <Button className="me-5 px-5" variant="dark">
          Filtering
        </Button>
      </div>
      <ClothingCard products={product} />
    </div>
  );
};

export default CategoryPage;
