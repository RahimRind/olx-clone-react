import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FbImageLibrary from 'react-fb-image-grid'


function Detail() {
  const [project, setProject] = useState([]);
  const { addId } = useParams();

  useEffect(() => {
    const getProductDetail = () => {
      fetch(`https://dummyjson.com/products/${addId}`)
        .then((res) => res.json())
        .then((res) => setProject(res))
        .catch((error) => console.error("Error fetching product details:", error));
    };

    getProductDetail();
  }, [addId]);
  console.log(project);

const { name ,images , description,title,price } = project
const image = [images];
  return (<>
      <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
       
          <div  className="col col-md-3 col-sm-6">
           <div className="card h-100">
           <FbImageLibrary images={image[0]}/>
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{title}</p>
        <p className="card-text">{description}</p>
        <h5 className="card-title">Rs {price}</h5>
      </div>
    </div>
  </div>


            </div>
        </div>
    </>
  );
}

export default Detail;
