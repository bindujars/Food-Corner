import React, { useEffect, useState } from "react";
import axios from "axios";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/foods")
      .then((response) => setFoods(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-5">
      <h1
        style={{
          color: "green",
          fontSize: "3em",
          textAlign: "center",
          textShadow: "2px 2px 4px #aaa",
          margin: "30px 0",
          fontFamily: "Arial, sans-serif",
        }}
      >
        All Items
      </h1>

      <div className="row">
        {foods.map((food) => (
          <div className="col-md-4" key={food._id}>
            <div className="card mb-4 shadow-sm custom-card">
              <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text text-muted">{food.description}</p>
                <p className="card-text font-weight-bold">
                  ${food.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
