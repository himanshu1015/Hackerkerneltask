import React, { useState } from "react";
import { useProducts } from "../contexts/ProductContext";

function AddProductForm() {
  const { addProduct } = useProducts();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (name && price) {
      addProduct({ name, price });
      setName("");
      setPrice("");
    }
  };

  return (
    <div className="flex items-center justify-center mt-16">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Add Product</h3>
        <div className="mb-4">
          <label htmlFor="product-name" className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            id="price"
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          onClick={handleAdd}
          className="w-full px-4 py-2 text-white bg-[#9B3CFF] rounded-md hover:bg-[#9541f0]"
        >
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProductForm;
