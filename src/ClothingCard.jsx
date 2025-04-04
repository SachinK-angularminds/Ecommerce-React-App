import React from "react";
import { Card, Image } from "react-bootstrap";
import "./ClothingCard.css";
import Avatar from "react-avatar";

const ClothingCard = ({ products }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product, index) => {
            return (
              <div className="col-md-4 mb-4" key={index}>
                <Card className="mt-4 w-75">
                  <Card.Body className="px-2 clothing-card">
                    <div>
                      <p className="d-flex align-items-center justify-content-center">
                        <p>
                          {product?.title?.length > 0
                            ? product.title.substring(0, 10) +
                              (product.title.length > 10 ? "..." : "")
                            : "No title available"}
                        </p>
                      </p>
                    </div>
                    <div className="d-flex justify-content-start">
                      <Avatar src={product.image} size="60px" round={true} />

                      <div className="d-flex flex-column ps-4">
                        <div className="pb-4">${product.price}</div>
                        <div>
                          <p>Quantity</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      Description:
                      <p>
                        {product?.description && product.description.length > 0
                          ? product.description.substring(0, 120)+"..."
                          : "No description available"}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ClothingCard;
