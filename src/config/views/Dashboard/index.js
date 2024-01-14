// Dashboard.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const Navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    },[]);

    const getProducts = () => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((res) => setProducts(res.products))
            // .catch((error) => console.error("Error fetching products:", error));
    };
    if(!products){
        return<div>"wait"</div>
    }

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map(({ id, thumbnail, name, title, price }) => (
  <div key={id} className="col col-md-3 col-sm-6">
    <div onClick={() => Navigate(`Detail/${id}`)} className="card h-100">
      <img src={thumbnail} className="card-img-top" alt={name} height="300px" width="200px" />
      <div className="card-body">
        <p className="card-text">{title}</p>
        <h5 className="card-title">Rs {price}</h5>
      </div>
    </div>
  </div>
))}

            </div>
        </div>
    );
}

export default Dashboard


