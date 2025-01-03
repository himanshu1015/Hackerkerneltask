import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addProduct = (product) => {
    const duplicateCheck = !products.find((p) => p.name === product.name);
    if (duplicateCheck) {
      setProducts([...products, product]);
    } else {
      alert("Product already exists!");
    }
  };

  const removeProduct = (name) => {
    const updatedList = products.filter((product) => product.name !== name);
    setProducts(updatedList);
  };

  const searchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ProductContext.Provider
      value={{
        products: searchProducts,
        addProduct,
        removeProduct,
        setSearchQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
