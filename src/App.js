import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import { ProductProvider } from "./contexts/ProductContext";
import Login from "./components/Login";
import HomePage from "./components/HomePage";


function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
}


function RedirectIfLoggedIn({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Navigate to="/" /> : children;
}

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <Routes>
          
            <Route
              path="/login"
              element={
                <RedirectIfLoggedIn>
                  <Login />
                </RedirectIfLoggedIn>
              }
            />
         
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
