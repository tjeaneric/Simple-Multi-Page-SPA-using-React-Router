import { Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Routes>
          <Route path="*" element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
