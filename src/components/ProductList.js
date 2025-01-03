import React from "react";
import { useProducts } from "../contexts/ProductContext";

function ProductList() {
  const { products, removeProduct } = useProducts();

  return (
    <div className="my-10 px-8">
      <table className="table-auto w-full border-collapse border border-gray-300 shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Products Name</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Prices</th>
            <th className="border border-gray-300 px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center py-3">No Product Found</td>
            </tr>
          ) : (
            products.map((product, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">${product.price}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => removeProduct(product.name)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
