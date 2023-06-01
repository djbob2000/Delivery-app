import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Container } from "./App.styled";
import { lazy, Suspense } from "react";

const Shop = lazy(() => import("../pages/Shop/Shop"));
const Cart = lazy(() => import("../pages/Cart/Cart"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Container>
    </Suspense>
  );
}

export default App;
