import React, { useState } from "react";
import axios from "axios";

const AddFood = () => {
  const [food, setFood] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/foods", food)
      .then((response) => {
        console.log(response.data);
        setFood({
          name: "",
          description: "",
          quantity: "",
          price: "",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-5">
      <h1>New Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={food.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={food.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={food.price}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-warning">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddFood;
