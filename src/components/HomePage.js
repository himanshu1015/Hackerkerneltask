import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../contexts/AuthContext";
import { useProducts } from "../contexts/ProductContext";
import AddProductForm from "./AddProductForm";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import HKLogo from "../assets/HKLogo.png";

function HomePage() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { products, addProduct, removeProduct } = useProducts();
  const navigate = useNavigate();

  const logoutfun = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <div className="bg-[#9B3CFF] flex justify-between px-4 md:px-14 py-4 gap-2">
        <a href="https://hackerkernel.com/" className="flex justify-center items-center gap-1">
          <div  className="w-10 h-10">
            <img src={HKLogo} alt="logo" className="w-full h-full" />
          </div>
          <h3 className="text-white font-medium text-[1.25rem] hidden sm:block">
            HackerKernel
          </h3>
        </a>
        <div className="flex text-center gap-2 sm:gap-4">
          <SearchBar />
          <button
            onClick={logoutfun}
            className="bg-red-500 text-white px-3 py-1 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <AddProductForm onAddProduct={addProduct} />
        <ProductList products={products} onRemoveProduct={removeProduct} />
      </div>
    </div>
  );
}

export default HomePage;
