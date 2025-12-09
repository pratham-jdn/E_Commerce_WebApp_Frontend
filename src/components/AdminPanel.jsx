import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    qty: "",
    imgSrc: "",
  });

  const API_URL = "https://e-commerce-webapp-y36e.onrender.com/api/product/add";

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit new product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API_URL, formData);
      toast.success("✅ Product added successfully!");
      setFormData({
        title: "",
        description: "",
        price: "",
        category: "",
        qty: "",
        imgSrc: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to add product!");
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">🛍️ Add New Product</h1>

      <div className="card p-4 shadow-lg bg-dark text-light">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control bg-secondary text-light"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea
              name="description"
              className="form-control bg-secondary text-light"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label>Price</label>
            <input
              type="number"
              name="price"
              className="form-control bg-secondary text-light"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Category</label>
            <input
              type="text"
              name="category"
              className="form-control bg-secondary text-light"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Quantity</label>
            <input
              type="number"
              name="qty"
              className="form-control bg-secondary text-light"
              value={formData.qty}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Image URL</label>
            <input
              type="text"
              name="imgSrc"
              className="form-control bg-secondary text-light"
              value={formData.imgSrc}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 fw-bold">
            ➕ Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
